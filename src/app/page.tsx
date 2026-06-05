import { type Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn, FadeInStagger } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { SectionIntro } from '@/components/SectionIntro'
import imageDusti from '@/images/dusti/blue-headshot-1.jpg'
import {
  type Article,
  type CaseStudy,
  type MDXEntry,
  loadArticles,
  loadCaseStudies,
} from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function FeaturedProjects({
  projects,
}: {
  projects: Array<MDXEntry<CaseStudy>>
}) {
  return (
    <>
      <SectionIntro
        eyebrow="Portfolio"
        title="Selected automation, application, and systems work."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          A few examples of how I think through workflow logic, data movement,
          product constraints, and the details that make software reliable
          enough for real users.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {projects.map((project) => (
            <FadeIn key={project.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="text-sm font-semibold text-neutral-950">
                  {project.project}
                </p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  <Link href={project.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {project.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {project.description}
                </p>
                <p className="mt-6 text-sm text-neutral-950">
                  {project.role}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function Writing({ articles }: { articles: Array<MDXEntry<Article>> }) {
  return (
    <>
      <SectionIntro
        eyebrow="Blog"
        title="Notes on automation, interfaces, and maintainable systems."
        className="mt-24 sm:mt-32 lg:mt-40"
      >
        <p>
          Practical writing shaped by CRM integration work, TypeScript projects,
          SQL data modeling, research collaboration, and the craft of making
          technical decisions legible.
        </p>
      </SectionIntro>
      <Container className="mt-16">
        <FadeInStagger className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          {articles.map((article) => (
            <FadeIn key={article.href} className="flex">
              <article className="relative flex w-full flex-col rounded-3xl p-6 ring-1 ring-neutral-950/5 transition hover:bg-neutral-50 sm:p-8">
                <p className="text-sm text-neutral-950">{article.date}</p>
                <h3 className="mt-6 font-display text-2xl font-semibold text-neutral-950">
                  <Link href={article.href}>
                    <span className="absolute inset-0 rounded-3xl" />
                    {article.title}
                  </Link>
                </h3>
                <p className="mt-4 text-base text-neutral-600">
                  {article.description}
                </p>
              </article>
            </FadeIn>
          ))}
        </FadeInStagger>
      </Container>
    </>
  )
}

function FocusAreas() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn>
        <GridList>
          <GridListItem title="CRM integrations">
            Make-based automations, webhooks, API configuration, field mapping,
            and data flows that support internal teams and advisor-facing
            platforms.
          </GridListItem>
          <GridListItem title="Application development">
            Next.js, TypeScript, MySQL, MariaDB, Java, and occasional mobile
            app work built around useful workflows, clear interfaces, and
            reliable behavior.
          </GridListItem>
          <GridListItem title="Systems troubleshooting">
            A practical operations mindset from production equipment, app
            development, and integration debugging: isolate the issue, test the
            fix, and document what changed.
          </GridListItem>
        </GridList>
      </FadeIn>
    </Container>
  )
}

export const metadata: Metadata = {
  description:
    'Dusti Johnson is a CRM Integration Developer and Computer Information Science student building automations, applications, and practical software systems.',
}

export default async function Home() {
  let projects = (await loadCaseStudies()).slice(0, 3)
  let articles = (await loadArticles()).slice(0, 3)

  return (
    <RootLayout>
      <Container className="mt-24 sm:mt-32 md:mt-56">
        <div className="grid grid-cols-1 gap-y-12 lg:grid-cols-12 lg:items-end lg:gap-x-8">
          <FadeIn className="max-w-3xl lg:col-span-7">
            <p className="font-display text-base font-semibold text-neutral-950">
              Dusti Johnson
            </p>
            <h1 className="mt-6 font-display text-5xl font-medium tracking-tight text-balance text-neutral-950 sm:text-7xl">
              CRM Integration Developer building reliable automations and useful apps.
            </h1>
            <p className="mt-6 text-xl text-neutral-600">
              I design Make-based workflows, connect systems through APIs and
              webhooks, and build TypeScript and SQL-backed applications with a
              focus on clear data flow, careful testing, and documentation.
            </p>
          </FadeIn>
          <FadeIn className="lg:col-span-5">
            <div className="overflow-hidden rounded-3xl bg-neutral-100">
              <Image
                src={imageDusti}
                alt="Dusti Johnson"
                className="aspect-4/5 w-full object-cover"
                priority
                sizes="(min-width: 1024px) 28rem, 100vw"
              />
            </div>
          </FadeIn>
        </div>
      </Container>

      <FocusAreas />

      <FeaturedProjects projects={projects} />

      <Writing articles={articles} />

      <ContactSection />
    </RootLayout>
  )
}
