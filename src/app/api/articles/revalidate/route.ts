import { revalidatePath } from "next/cache";
import { NextRequest, NextResponse } from "next/server";

const SECRET = process.env.STRAPI_WEBHOOK_SECRET;

export async function POST(request: NextRequest) {
  try {
    // Verify the secret for security
    const authHeader = request.headers.get("authorization");
    if (!authHeader || authHeader !== `Bearer ${SECRET}`) {
      return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
    }

    let payload;
    try {
      payload = await request.json();
      console.log(payload);
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

    revalidatePath(`/articles/${urlSlug}`);

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 },
    );
  }
}
