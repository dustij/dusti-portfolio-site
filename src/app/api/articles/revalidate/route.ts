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

    // Ensure the request has a body
    if (!request.body) {
      return NextResponse.json(
        { error: "Request body is missing" },
        { status: 400 },
      );
    }

    // Parse the request body to get the article slug
    let body;
    try {
      body = await request.json();
    } catch (error) {
      console.error("Error parsing JSON:", error);
      return NextResponse.json(
        { error: "Invalid JSON in request body" },
        { status: 400 },
      );
    }

    const { slug } = body;

    if (!slug) {
      return NextResponse.json(
        { error: "Missing 'slug' in request body" },
        { status: 400 },
      );
    }

    // Revalidate the blog listing page and the specific article page
    revalidatePath("/articles");
    revalidatePath(`/articles/${slug}`);

    return NextResponse.json({ revalidated: true });
  } catch (error) {
    console.error("Revalidation error:", error);
    return NextResponse.json(
      { error: "Failed to revalidate" },
      { status: 500 },
    );
  }
}
