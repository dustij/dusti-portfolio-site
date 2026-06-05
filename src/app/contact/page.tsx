import { useId } from 'react'
import { type Metadata } from 'next'

import { Border } from '@/components/Border'
import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'
import { PageIntro } from '@/components/PageIntro'
import { SocialMedia } from '@/components/SocialMedia'
import { RootLayout } from '@/components/RootLayout'

function TextInput({
  label,
  ...props
}: React.ComponentPropsWithoutRef<'input'> & { label: string }) {
  let id = useId()

  return (
    <div className="group relative z-0 transition-all focus-within:z-10">
      <input
        type="text"
        id={id}
        {...props}
        placeholder=" "
        className="peer block w-full border border-neutral-300 bg-transparent px-6 pt-12 pb-4 text-base/6 text-neutral-950 ring-4 ring-transparent transition group-first:rounded-t-2xl group-last:rounded-b-2xl focus:border-neutral-950 focus:ring-neutral-950/5 focus:outline-hidden"
      />
      <label
        htmlFor={id}
        className="pointer-events-none absolute top-1/2 left-6 -mt-3 origin-left text-base/6 text-neutral-500 transition-all duration-200 peer-not-placeholder-shown:-translate-y-4 peer-not-placeholder-shown:scale-75 peer-not-placeholder-shown:font-semibold peer-not-placeholder-shown:text-neutral-950 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:font-semibold peer-focus:text-neutral-950"
      >
        {label}
      </label>
    </div>
  )
}

function ContactForm() {
  return (
    <FadeIn className="lg:order-last">
      <form>
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Send a note
        </h2>
        <div className="isolate mt-6 -space-y-px rounded-2xl bg-white/50">
          <TextInput label="Name" name="name" autoComplete="name" />
          <TextInput
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />
          <TextInput label="Project or topic" name="topic" />
          <TextInput label="Message" name="message" />
        </div>
        <Button type="submit" className="mt-10">
          Send message
        </Button>
      </form>
    </FadeIn>
  )
}

function ContactDetails() {
  return (
    <FadeIn>
      <h2 className="font-display text-base font-semibold text-neutral-950">
        What I’m open to
      </h2>
      <p className="mt-6 text-base text-neutral-600">
        CRM integrations, Make automations, API and webhook workflows,
        TypeScript application work, portfolio feedback, and thoughtful
        conversations about systems that need to be maintained.
      </p>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Find me
        </h2>
        <SocialMedia className="mt-6" />
      </Border>

      <Border className="mt-16 pt-16">
        <h2 className="font-display text-base font-semibold text-neutral-950">
          Before reaching out
        </h2>
        <p className="mt-6 text-base text-neutral-600">
          The most useful notes include the workflow or system involved, the
          current constraints, where the data needs to go, and what kind of
          outcome would make the conversation worthwhile.
        </p>
      </Border>
    </FadeIn>
  )
}

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Contact Dusti Johnson about CRM integrations, Make automations, application development, and technical documentation.',
}

export default function Contact() {
  return (
    <RootLayout>
      <PageIntro eyebrow="Contact" title="Let’s talk about the workflow.">
        <p>
          Send context about what needs to connect, what is stuck, or what kind
          of automation or application work would move it forward.
        </p>
      </PageIntro>

      <Container className="mt-24 sm:mt-32 lg:mt-40">
        <div className="grid grid-cols-1 gap-x-8 gap-y-24 lg:grid-cols-2">
          <ContactForm />
          <ContactDetails />
        </div>
      </Container>
    </RootLayout>
  )
}
