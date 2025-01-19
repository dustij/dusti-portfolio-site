/**
 * The purpose of this module is to maintain a record of valid url slugs for articles.
 * Because ISR runs at build time, anytime the Strapi webhook triggers a revalidation event
 * in the server, old slugs and there pages will persist.
 *
 * For example,
 *
 * If an article has the url slug, "my-article", and that slug is updated later to, "my-amazing-article",
 * there will be two pages not for that article: "articles/my-article" and "articles/my-amazing-article"
 *
 * This needs to be resolved by cross-referencing the the slugs in Next.js with the slugs in Strapi.
 * It should be simple to determine, at the time the revalidation is triggered, which slug name
 * has changed:
 *
 * Next.js =>
 * ["my-article", "my-second-article", "my-third-article"]
 *
 * Strapi =>
 * ["my-article", "my-second-article", "my-changed-article"]
 *
 * In this case, I should also revalidate the "articles/my-third-article" path. So that the server
 * know it's stale. This will cause that path to return 404 Not Found, resulting on removal from cache
 *
 * Note:
 * My only concern is this. Will the ISR cache become bloated if too many changes to slugs are made?
 * Such that, the cache will have prerendered unnecessary 404 pages, when they could otherwise be
 * generated on demand?
 */
import fs from "fs";
import path from "path";

const FILE_PATH = path.join(process.cwd(), "temp", "cached-slugs.json");

export function exportSlugsJson(slugs: { slug: string }[]) {
  try {
    if (fs.existsSync(FILE_PATH)) {
      // Remove the file
      fs.unlinkSync(FILE_PATH);
      console.log(`\n✅ Removed existing file: ${FILE_PATH}`);
    }

    fs.writeFileSync(FILE_PATH, JSON.stringify(slugs, null, 2));
    console.log(`✅ File written: ${FILE_PATH}`);
  } catch (error) {
    console.error("❌ Error handling file:", error);
  }
}

export function loadSlugsJson(): { slug: string }[] {
  let slugs = [];
  try {
    if (fs.existsSync(FILE_PATH)) {
      const data = fs.readFileSync(FILE_PATH, "utf8");
      slugs = JSON.parse(data);
    } else {
      console.warn(
        "⚠️ No cached slugs file found. Starting with an empty cache.",
      );
    }
  } catch (error) {
    console.error("❌ Failed to load slugs into memory:", error);
  }
  return slugs;
}
