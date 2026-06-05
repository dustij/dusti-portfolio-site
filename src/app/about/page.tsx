import { type Metadata } from 'next'
import Image from 'next/image'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { PageIntro } from '@/components/PageIntro'
import { PageLinks } from '@/components/PageLinks'
import { StatList, StatListItem } from '@/components/StatList'
import imageDusti from '@/images/dusti/Dusti Johnson.jpg'
import { loadArticles } from '@/lib/mdx'
import { RootLayout } from '@/components/RootLayout'

function Capabilities() {
  return (
    <div className="mt-24 rounded-4xl bg-neutral-950 py-24 sm:mt-32 lg:mt-40 lg:py-32">
      <Container>
        <FadeIn>
          <div className="max-w-3xl">
            <h2 className="font-display text-3xl font-medium tracking-tight text-white sm:text-4xl">
              I like work where systems, data, and people have to line up.
            </h2>
            <p className="mt-6 text-base text-neutral-300">
              Integration work rewards the same habits I value in application
              development: understand the workflow, make the data path explicit,
              test before production, and document the logic so the next person
              can trust it.
            </p>
          </div>
        </FadeIn>
        <GridList className="mt-16">
          <GridListItem title="Automation and integration" invert>
            Designing Make scenarios, API and webhook flows, field mappings,
            sandbox tests, and troubleshooting paths for CRM-connected systems.
          </GridListItem>
          <GridListItem title="Application development" invert>
            Building Next.js, TypeScript, MySQL, MariaDB, Java, and SQL-backed
            projects with practical interfaces, clear data models, and reliable
            behavior.
          </GridListItem>
          <GridListItem title="Clear communication" invert>
            Translating technical work into requirements, acceptance criteria,
            documentation, and explanations that non-technical stakeholders can
            act on.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'About',
  description:
    'About Dusti Johnson, a CRM Integration Developer and Computer Information Science student focused on automations, applications, and reliable systems.',
}

export default async function About() {
  let blogArticles = (await loadArticles()).slice(0, 2)

  return (
    <RootLayout>
      <PageIntro
        eyebrow="About"
        title="I build integrations and applications with the workflow in mind."
      >
        <p>
          I’m Dusti Johnson, a CRM Integration Developer and Computer
          Information Science student at Washburn University. My work combines
          Make-based automation, CRM data flow, APIs, webhooks, and application
          development.
        </p>
        <div className="mt-10 max-w-2xl space-y-6 text-base">
          <p>
            In my current role, I focus on building and maintaining automated
            workflows that support internal teams and advisor-facing technology.
            That means understanding requirements, mapping fields carefully,
            configuring integrations, testing in sandboxes, monitoring for
            failures, and documenting how each workflow behaves.
          </p>
          <p>
            I also build software outside of CRM work: Next.js and TypeScript
            demos, SQL-backed features, Java research tools, and some mobile app
            projects. My background includes full-stack volunteer development at
            Center for Supportive Communities, faculty-mentored research at
            Washburn, and hands-on process troubleshooting in manufacturing.
          </p>
        </div>
      </PageIntro>

      <Container className="mt-16">
        <FadeIn>
          <div className="overflow-hidden rounded-3xl bg-neutral-100">
            <Image
              src={imageDusti}
              alt="Dusti Johnson"
              className="aspect-16/9 w-full object-cover"
              sizes="(min-width: 1216px) 76rem, 100vw"
            />
          </div>
        </FadeIn>
      </Container>

      <Container className="mt-16">
        <StatList>
          <StatListItem value="01" label="CRM integration and automation" />
          <StatListItem value="02" label="TypeScript and SQL-backed applications" />
          <StatListItem value="03" label="Research, documentation, and support" />
        </StatList>
      </Container>

      <Capabilities />

      <PageLinks
        className="mt-24 sm:mt-32 lg:mt-40"
        title="Recent writing"
        intro="Practical notes on workflow logic, maintainability, documentation, and the engineering habits that keep systems understandable."
        pages={blogArticles}
      />

      <ContactSection />
    </RootLayout>
  )
}
