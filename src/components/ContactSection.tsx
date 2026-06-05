import { Button } from '@/components/Button'
import { Container } from '@/components/Container'
import { FadeIn } from '@/components/FadeIn'

export function ContactSection() {
  return (
    <Container className="mt-24 sm:mt-32 lg:mt-40">
      <FadeIn className="-mx-6 rounded-4xl bg-neutral-950 px-6 py-20 sm:mx-0 sm:py-32 md:px-12">
        <div className="mx-auto max-w-4xl">
          <div className="max-w-xl">
            <h2 className="font-display text-3xl font-medium text-balance text-white sm:text-4xl">
              Have a workflow or integration problem worth talking through?
            </h2>
            <p className="mt-6 text-base text-neutral-300">
              I’m interested in Make automations, CRM data flows, practical
              application work, and teams that care about reliable systems.
            </p>
            <div className="mt-6 flex">
              <Button href="/contact" invert>
                Start a conversation
              </Button>
            </div>
          </div>
        </div>
      </FadeIn>
    </Container>
  )
}
