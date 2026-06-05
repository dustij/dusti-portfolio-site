import { type Metadata } from 'next'

import { ContactSection } from '@/components/ContactSection'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { GridList, GridListItem } from '@/components/GridList'
import { GridPattern } from '@/components/GridPattern'
import { List, ListItem } from '@/components/List'
import { PageIntro } from '@/components/PageIntro'
import { SectionIntro } from '@/components/SectionIntro'
import { TagList, TagListItem } from '@/components/TagList'
import { RootLayout } from '@/components/RootLayout'

function Step({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <Container className="group/section [counter-increment:section]">
      <FadeIn>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 border-t border-neutral-950/10 pt-12 lg:grid-cols-3">
          <div>
            <div
              className="font-display text-base font-semibold before:text-neutral-300 before:content-['/_'] after:text-neutral-950 after:content-[counter(section,decimal-leading-zero)]"
              aria-hidden="true"
            />
            <h2 className="mt-2 font-display text-3xl font-medium tracking-tight text-neutral-950 sm:text-4xl">
              {title}
            </h2>
          </div>
          <div className="lg:col-span-2">{children}</div>
        </div>
      </FadeIn>
    </Container>
  )
}

function Understand() {
  return (
    <Step title="Understand">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          I start by turning a workflow request into concrete requirements:
          which systems are involved, what data needs to move, who depends on
          it, and what failure would look like.
        </p>
        <p>
          For CRM integrations, that usually means identifying the source of
          truth, field mappings, authentication needs, webhook behavior, edge
          cases, and the handoff between marketing, operations, and technology
          stakeholders.
        </p>
      </div>

      <h3 className="mt-12 font-display text-base font-semibold text-neutral-950">
        Typical output
      </h3>
      <TagList className="mt-4">
        <TagListItem>Workflow requirements</TagListItem>
        <TagListItem>Field mapping</TagListItem>
        <TagListItem>Data flow sketch</TagListItem>
        <TagListItem>Acceptance criteria</TagListItem>
      </TagList>
    </Step>
  )
}

function Build() {
  return (
    <Step title="Build">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Implementation should be explicit in the right places. In Make, that
          means readable scenario structure, clear transformation steps,
          careful filters, predictable error paths, and data mapping that is
          easy to audit later.
        </p>
        <p>
          In application code, I follow the same pattern: small pieces, clear
          state boundaries, practical naming, and enough documentation for
          someone else to understand why the workflow or feature behaves the way
          it does.
        </p>
      </div>

      <List className="mt-8">
        <ListItem title="Automations">
          Make scenarios, CRM actions, REST requests, webhooks, filters, routers,
          and transformations organized so the logic can be reviewed.
        </ListItem>
        <ListItem title="Applications">
          Next.js, TypeScript, MySQL, MariaDB, Java, and occasional mobile app
          work shaped around direct user workflows and maintainable structure.
        </ListItem>
        <ListItem title="Documentation">
          Workflow notes, technical configuration, integration logic, and review
          context that make future troubleshooting less dependent on memory.
        </ListItem>
      </List>
    </Step>
  )
}

function Verify() {
  return (
    <Step title="Verify">
      <div className="space-y-6 text-base text-neutral-600">
        <p>
          Verification should match the risk of the change. For integrations,
          that means sandbox testing, sample payloads, field validation, failure
          handling, and checking that data lands where stakeholders expect it.
        </p>
        <p>
          The goal is to leave the work in a state where another person can see
          what changed, why it changed, how it was tested, and what to check if
          the workflow fails later.
        </p>
      </div>
    </Step>
  )
}

function Principles() {
  return (
    <div className="relative mt-24 pt-24 sm:mt-32 sm:pt-32 lg:mt-40 lg:pt-40">
      <div className="absolute inset-x-0 top-0 -z-10 h-[884px] overflow-hidden rounded-t-4xl bg-linear-to-b from-neutral-50">
        <GridPattern
          className="absolute inset-0 h-full w-full mask-[linear-gradient(to_bottom_left,white_40%,transparent_50%)] fill-neutral-100 stroke-neutral-950/5"
          yOffset={-270}
        />
      </div>

      <SectionIntro
        eyebrow="Principles"
        title="The habits I want visible in every integration."
      >
        <p>
          Reliable automation is not only whether a scenario runs once. It is
          whether the data stays consistent, failures are diagnosable, and the
          next change is easier because this one was documented carefully.
        </p>
      </SectionIntro>

      <Container className="mt-24">
        <GridList>
          <GridListItem title="Explicit">
            Important decisions should be visible in scenario structure, field
            names, mappings, tests, and written context.
          </GridListItem>
          <GridListItem title="Accurate">
            Data synchronization depends on precise mapping, clear source-of-
            truth decisions, and validation before production.
          </GridListItem>
          <GridListItem title="Incremental">
            Small, working changes reduce guesswork and make sandbox testing
            more useful.
          </GridListItem>
          <GridListItem title="Maintainable">
            Workflows and code should be arranged for the person who has to
            troubleshoot them months later.
          </GridListItem>
          <GridListItem title="Measured">
            Tests, monitoring, and manual checks should follow the actual risk
            profile of the data flow.
          </GridListItem>
          <GridListItem title="Pragmatic">
            The best solution is the one that fits the current system, improves
            reliability, and does not make the next handoff harder.
          </GridListItem>
        </GridList>
      </Container>
    </div>
  )
}

export const metadata: Metadata = {
  title: 'Approach',
  description:
    'How Dusti Johnson approaches CRM integrations, Make automations, application development, testing, and documentation.',
}

export default function Process() {
  return (
    <RootLayout>
      <PageIntro
        eyebrow="Approach"
        title="A practical way to build reliable integrations."
      >
        <p>
          I try to keep the path from request to production clear: understand
          the workflow, build the data path in accountable steps, test before
          launch, and document the behavior that matters.
        </p>
      </PageIntro>

      <div className="mt-24 space-y-24 [counter-reset:section] sm:mt-32 sm:space-y-32 lg:mt-40 lg:space-y-40">
        <Understand />
        <Build />
        <Verify />
      </div>

      <Principles />

      <ContactSection />
    </RootLayout>
  )
}
