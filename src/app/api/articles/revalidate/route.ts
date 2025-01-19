import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";
import { fetchAllSlugs } from "~/graphql/actions";
import { exportSlugsJson, loadSlugsJson } from "~/lib/slugs-management";

const SECRET = process.env.STRAPI_WEBHOOK_SECRET;

async function syncSlugsWithBackend(slug: string) {
  // Transform into a Set of strings
  const currentSlugs = new Set(loadSlugsJson().map((item) => item.slug));
  const backendSlugs = new Set(
    await fetchAllSlugs().then((payload) =>
      payload.map((item) => item.urlSlug),
    ),
  );

  // Sync ISR cache with backend
  currentSlugs.add(slug);
  for (const s of currentSlugs) {
    if (!backendSlugs.has(s)) {
      console.log(`Removed slug: '${s}'`);
      currentSlugs.delete(s);
      revalidatePath(`/articles/${s}`);
    }
  }

  exportSlugsJson([...currentSlugs].map((slug) => ({ slug })));
}

export async function POST(request: NextRequest) {
  try {
    const authHeader = request.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let payload;
    try {
      payload = await request.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    const { urlSlug } = payload.entry;

    if (!urlSlug) {
      return NextResponse.json(
        { error: "Missing 'urlSlug' in request body" },
        { status: 400 },
      );
    }

    await syncSlugsWithBackend(urlSlug);
    revalidatePath(`/articles/${urlSlug}`);
    revalidatePath(`/`);

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 },
    );
  }
}
