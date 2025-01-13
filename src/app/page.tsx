import Link from "next/link";
import { Card } from "~/components/Card";
import { Container } from "~/components/Container";
import { GitHubIcon, LinkedInIcon } from "~/components/SocialIcons";
import { client } from "~/graphql/apollo";
import { ArticleWithSlug, getAllArticles } from "~/graphql/queries";
import { formatDate } from "~/lib/formatDate";

// ==== SOCIAL LINK ==== //

function SocialLink({
  icon: Icon,
  ...props
}: React.ComponentPropsWithoutRef<typeof Link> & {
  icon: React.ComponentType<{ className?: string }>;
}) {
  return (
    <Link className="group -m-1 p-1" {...props}>
      <Icon className="h-6 w-6 fill-zinc-500 transition group-hover:fill-zinc-600 dark:fill-zinc-400 dark:group-hover:fill-zinc-300" />
    </Link>
  );
}

// ==== ARTICLE COMPONENT ==== //

function Article({ article }: { article: ArticleWithSlug }) {
  return (
    <Card as="article">
      <Card.Title href={`/articles/${article.urlSlug}`}>
        {article.title}
      </Card.Title>
      <Card.Eyebrow as="time" dateTime={article.updatedAt} decorate>
        {formatDate(article.updatedAt)}
      </Card.Eyebrow>
      <Card.Description>{article.description}</Card.Description>
      <Card.Cta>Read article</Card.Cta>
    </Card>
  );
}

// ==== HOME COMPONENT ==== //

export default async function Home() {
  const _client = await client.query({
    query: getAllArticles,
    fetchPolicy: "no-cache", // TODO: explore caching options
  });

  let articles = null;

  if (_client) {
    articles = _client?.data.blogPosts.slice(0, 4);
  } else {
    console.warn("Apollo client is undefined.");
  }

  return (
    <>
      <Container className="mt-9">
        <div className="max-w-2xl">
          <h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            Software designer, web developer, and CS student.
          </h1>
          <p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
            Hey there, I'm Dusti&mdash;a software engineer and computer science
            student. Usually, I'm buring the midnight oil, working on a personal
            project or diving into documentation.
          </p>
          <div className="mt-6 flex gap-6">
            <SocialLink
              href="https://github.com/dustij"
              aria-label="Follow on GitHub"
              icon={GitHubIcon}
            />
            <SocialLink
              href="https://linkedin.com/in/dusti-johnson"
              aria-label="Follow on LinkedIn"
              icon={LinkedInIcon}
            />
          </div>
        </div>
      </Container>
      <Container className="mt-24 md:mt-28">
        <div className="mx-auto grid max-w-xl grid-cols-1 gap-y-20 lg:max-w-none lg:grid-cols-2">
          <div className="flex flex-col gap-16">
            <h1 className="text-xl">Recent articles</h1>
            {articles?.map((article: ArticleWithSlug) => (
              <Article key={article.urlSlug} article={article} />
            ))}
          </div>
        </div>
      </Container>
    </>
  );
}
