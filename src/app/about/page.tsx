import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Container } from "~/components/Container";
import { GitHubIcon, LinkedInIcon } from "~/components/SocialIcons";
import { portraitImage, socialLinks } from "~/lib/constants";
import { cn } from "~/lib/utils";

// ====  SOCIAL LINK ==== //

function SocialLink({
  className,
  href,
  children,
  icon: Icon,
}: {
  className?: string;
  href: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <li className={cn(className, "flex")}>
      <Link
        href={href}
        target="_blank"
        className="hover:text-primary-500 dark:hover:text-primary-500 group flex text-sm font-medium text-zinc-800 transition dark:text-zinc-200"
      >
        <Icon className="group-hover:fill-primary-500 h-6 w-6 flex-none fill-zinc-500 transition" />
        <span className="ml-4">{children}</span>
      </Link>
    </li>
  );
}

// ==== ICON ==== //

function MailIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fillRule="evenodd"
        d="M6 5a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h12a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3H6Zm.245 2.187a.75.75 0 0 0-.99 1.126l6.25 5.5a.75.75 0 0 0 .99 0l6.25-5.5a.75.75 0 0 0-.99-1.126L12 12.251 6.245 7.187Z"
      />
    </svg>
  );
}

// ==== ABOUT PAGE ==== //

export const metadata: Metadata = {
  title: "About",
  description: "",
};

export default function About() {
  return (
    <Container className="mt-16 sm:mt-32">
      <div className="grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:grid-rows-[auto_1fr] lg:gap-y-12">
        <div className="lg:pl-20">
          <div className="max-w-xs px-2.5 lg:max-w-none">
            <Image
              src={portraitImage}
              alt=""
              sizes="(min-width: 1024px) 32rem, 20rem"
              className="aspect-square rotate-3 rounded-2xl bg-zinc-100 object-cover dark:bg-zinc-800"
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Dusti Johnson. I live in Kansas, where I spend my days studying
            and my nights coding.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I can remember, as a kid, watching <i>Pee-wee's Big Adventure</i>.
              Pee-wee starts his morning by flipping on a fan, which set off a
              chain reaction ending in breakfast. That was the first time
              witnessing a Rube Goldberg machine, and I was hooked. I knew for
              sure I’d grow up to be a mad scientist&mdash;like the dad from{" "}
              <i>Honey, I Shrunk the Kids</i>.
            </p>
            <p>
              I wanted to make things! Plain and simple. Technology fascinated
              me. But as I grew older, my mad science dreams faded. Yet, a new
              dream was taking root, and it had something to do with computers.
            </p>
            <p>
              When I discovered coding, that inner mad scientist whispered to
              me, "This is it&mdash;you can make anything you want here." Thus,
              at the ripe age of 28, I finally took the leap and started
              programming, and I've never looked back.
            </p>
            <h3 className="text-xl font-semibold">The Beginning</h3>
            <p>
              My journey began in 2017. I was studying finance (inspired by my
              short-lived forex trading adventure) and I had just learned
              financial accounting. With this new knowledge, I figured it was
              time to finally grow up and make a budget. Little did I know, this
              would set me on a path to programming.
            </p>
            <p>
              Over time, I looked for ways to improve my system. How could I
              streamline it? Could I automate anything? It was time to get
              serious. It was time to learn how to code. My budget system was
              built in Excel, so naturally, I turned to VBA first.
              Cool&mdash;now I had a form and a button. But it wasn't enough; I
              wanted more. What I wanted was a completely custom, standalone
              budgeting app.
            </p>
            <p>
              Every new developer starts their journey by Googling, "What's the
              best programming language for beginners"&mdash;right? At least,
              that's what I did, and that's when I found Python. So, in early
              2020, my obsession began. Mornings? Code. Nights? Yeah&mdash;I'm
              coding!
            </p>
            <h3 className="text-xl font-semibold">The Present</h3>
            <p>
              Fast forward to today. I'm studying computer science and working
              full-time (not as a programmer,
              <span className="text-xs">
                <i> yet</i>
              </span>
              ). Over the past couple of years, I've learned Python, TypeScript,
              and Java, along with some React and Next.js.
            </p>
            <p>
              I spend my nights devoted to programming, focusing on personal
              projects, from automation bots to full-stack web apps. My goal is
              to, some day soon, become a well-rounded developer capable of
              solving any problem (mad science optional).
            </p>
            <div className="border-t border-zinc-100 dark:border-zinc-700/40" />
            <p>
              Daniel H. Pink talks about the flow state in his book{" "}
              <i>Drive.</i> I remember my first experience with it: one morning,
              I sat down with my coffee, opened my IDE, and started coding. Next
              thing I knew, it was dark outside. Whoa! Twelve hours had
              vanished. Then the next twelve hours disappeared. I knew, right
              then and there, programming was my calling. This quote perfectly
              describes my experience.
            </p>
            <div className="relative isolate pt-8">
              <p className="font-serif absolute inset-0 text-9xl font-bold text-zinc-200/60 dark:text-zinc-800">
                &#8220;
              </p>
              <p className="font-serif relative z-50 pl-8">
                <i>
                  The challenge wasn't too easy. Nor was it too difficult. It
                  was a notch or two beyond his current abilities, which
                  stretched the body and mind in a way that made the effort
                  itself the most delicious reward. That balance produced a
                  degree of focus and satisfaction that easily surpassed other,
                  more quotidian, experiences. In flow, people lived so deeply
                  in the moment, and felt so utterly in control, that their
                  sense of time, place, and even self melted away.
                </i>
              </p>
              <p className="font-serif pl-8 pt-4 text-zinc-500">
                &mdash; Daniel H. Pink, from his book <i>Drive</i>
              </p>
            </div>
          </div>
        </div>
        <div className="lg:pl-20">
          <ul role="list">
            <SocialLink
              href={socialLinks.gitHub}
              icon={GitHubIcon}
              className="mt-4"
            >
              Follow on GitHub
            </SocialLink>
            <SocialLink
              href={socialLinks.linkedIn}
              icon={LinkedInIcon}
              className="mt-4"
            >
              Follow on LinkedIn
            </SocialLink>
            <SocialLink
              href="mailto:dustijohnson@outlook.com"
              icon={MailIcon}
              className="mt-8 border-t border-zinc-100 pt-8 dark:border-zinc-700/40"
            >
              dustijohnson@outlook.com
            </SocialLink>
          </ul>
        </div>
      </div>
    </Container>
  );
}
