import { type Metadata } from 'next'
import Link from 'next/link'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { formatDate } from '@/lib/formatDate'
import { type CaseStudy, type MDXEntry, loadCaseStudies } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Projects({ projects }: { projects: Array<MDXEntry<CaseStudy>> }) {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <div className="space-y-20 sm:space-y-24 lg:space-y-32">
        {projects.map((project) => (
          <FadeIn key={project.project}>
            <article>
              <Border className="grid grid-cols-1 gap-x-8 gap-y-8 pt-16 lg:grid-cols-3">
                <div>
                  <p className="text-sm font-semibold text-neutral-950">
                    {project.project}
                  </p>
                  <p className="mt-2 text-sm text-neutral-950">
                    <time dateTime={project.date}>
                      {formatDate(project.date)}
                    </time>
                  </p>
                  <p className="mt-2 text-sm tracking-tight text-neutral-950">
                    {project.role}
                  </p>
                </div>
                <div className="lg:col-span-2 lg:max-w-2xl">
                  <h2 className="font-display text-4xl font-medium text-neutral-950">
                    <Link href={project.href}>{project.title}</Link>
                  </h2>
                  <div className="mt-6 space-y-6 text-base text-neutral-600">
                    {project.summary.map((paragraph) => (
                      <p key={paragraph}>{paragraph}</p>
                    ))}
                  </div>
                  <ul
                    role="list"
                    className="mt-8 flex flex-wrap gap-3 text-sm text-neutral-950"
                  >
                    {project.stack.map((item) => (
                      <li
                        key={item}
                        className="rounded-full bg-neutral-100 px-4 py-2"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                  <div className="mt-8 flex">
                    <Button
                      href={project.href}
                      aria-label={`Read project: ${project.project}`}
                    >
                      Read project
                    </Button>
                    <Button
                      href={project.externalLink.href}
                      className="ml-4"
                      aria-label={project.externalLink.label}
                    >
                      {project.externalLink.label}
                    </Button>
                  </div>
                </div>
              </Border>
            </article>
          </FadeIn>
        ))}
      </div>
    </Container>
  )
}

export const metadata: Metadata = {
  title: 'Portfolio',
  description:
    'Selected projects from Dusti Johnson, focused on automations, TypeScript interfaces, SQL-backed tools, research demos, and maintainable systems.',
}

export default async function Work() {
  let projects = await loadCaseStudies()

  return (
    <RootLayout>
      <PageIntro
        eyebrow="Portfolio"
        title="Projects shaped around workflow, clarity, and useful systems."
      >
        <p>
          These writeups connect my current integration mindset with the
          software I build outside of CRM work: TypeScript interfaces,
          educational demos, data tools, research presentations, responsive web
          interfaces, and a few mobile utility projects.
        </p>
      </PageIntro>

      <Projects projects={projects} />

      <ContactSection />
    </RootLayout>
  )
}
