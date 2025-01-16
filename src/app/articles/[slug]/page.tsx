import { Metadata } from "next";
import { notFound } from "next/navigation";
import BackButton from "~/components/BackButton";
import { Container } from "~/components/Container";
import { Prose } from "~/components/Prose";
import { fetchArticleBySlug } from "~/graphql/actions";
import { formatDate } from "~/lib/formatDate";

export async function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Promise<Metadata> {
  const article = await fetchArticleBySlug((await params).slug);

  if (!article) {
    return {
      title: "Page Not Found",
      description: "Sorry, we couldn’t find the page you’re looking for.",
    };
  }

  return {
    title: article.title,
    description: article.description,
    openGraph: {
      title: article.title,
      description: article.description,
      type: "article",
      publishedTime: article.updatedAt,
      url: `https://dustijohnson.com/articles/${(await params).slug}`,
      // images: [
      //   {
      //     url: "https://yourwebsite.com/path-to-image.jpg",
      //     width: 1200,
      //     height: 630,
      //     alt: "A description of the image",
      //   },
      // ],
    },
    twitter: {
      // card: "summary_large_image",
      card: "summary",
      title: article.title,
      description: article.description,
      // images: ["https://yourwebsite.com/path-to-image.jpg"],
    },
  };
}

export default async function Article({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const article = await fetchArticleBySlug((await params).slug);

  if (!article) {
    notFound();
  }

  return (
    <Container className="mt-16 lg:mt-32">
      <div className="xl:relative">
        <div className="mx-auto max-w-2xl">
          <BackButton />
          <article>
            <header className="flex flex-col">
              <h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
                {article.title}
              </h1>
              <time
                dateTime={article.updatedAt}
                className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
              >
                <span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
                <span className="ml-3">{formatDate(article.updatedAt)}</span>
              </time>
            </header>
            <Prose className="mt-8" content={article.content} />
          </article>
        </div>
      </div>
    </Container>
  );
}
