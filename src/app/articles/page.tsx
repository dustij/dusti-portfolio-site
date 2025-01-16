import { Metadata } from "next";
import { Suspense } from "react";
import { fetchArticles } from "~/graphql/actions";
import ArticlesPage from "./_components/ArticlesPage";

// ==== ARTICLES PAGE ==== //

export const metadata: Metadata = {
  title: "Articles",
  description:
    "All of my long-form thoughts on programming, computer science, life, and more, collected in chronological order.",
};

/* TODO:
If you want to retain static generation for SEO and performance but also update your content automatically, 
set up a webhook in Strapi to trigger a front-end rebuild upon content changes.

Steps:

In your Strapi admin panel, set up a webhook to call your deployment provider (e.g., Vercel, Netlify) when an article is added or updated.
Configure the webhook to point to your deployment API endpoint (e.g., Vercel's Deploy Hook).
When Strapi content changes, it will automatically trigger a rebuild of your static front end.
Pros:

Maintains the benefits of static generation.
Updates are automated.
Cons:

Requires redeployment (triggered by the webhook).
*/

export default async function Articles() {
  return (
    <Suspense>
      <ArticlesPage />
    </Suspense>
  );
}
