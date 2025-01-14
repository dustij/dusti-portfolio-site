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
              width={2050}
              height={2050}
            />
          </div>
        </div>
        <div className="lg:order-first lg:row-span-2">
          <h1 className="text-balance text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
            I'm Dusti Johnson. I live in Kansas, where I spend my days growing
            and my nights coding.
          </h1>
          <div className="mt-6 space-y-7 text-base text-zinc-600 dark:text-zinc-400">
            <p>
              I can remember, as kid, watching <i>Pee-wee's Big Adventure</i>,
              when Pee-wee starts his morning routine by setting off a chain
              reaction of events leading to his breakfast. This was the first
              time I saw a Rube Goldberg machine, and I was hooked. I knew for a
              fact I would become a mad scientist, like the dad from{" "}
              <i>Honey, I Shrunk the Kids</i>. I wanted to make things, and I
              was enthralled by technology. Years went by, and my dream of mad
              science faded, but I I began feeling this innate pull towards
              computers. I knew I could create things through code, and the
              inner mad scientist whispered, "You can make whatever you want
              here." It wasn't until I was 28 that I finally took the leap into
              the world of code, and I never looked back.
            </p>
            <p>
              The year was 2017. I was pursuing a degree in finance {"("}sparked
              by my discovery of currency trading in forex{")"}, and I had just
              learned financial accounting. It was time to grow up and make
              myself a budget, inspired by my newfound knowledge. Little did I
              know, this would set me on a path to programming.
            </p>
            <p>
              As time went on, I looked for ways to improve my system. How could
              I streamline this? Where could I automate processes? It was time
              to learn to code. Since my budget was built in Excel, the first
              place i naturally turned to was VBA. Cool&mdash;I have a form and
              a button now. But this wasn't enough for me&mdash;I desired a
              standalone, completely custom budget app.
            </p>
            <p>
              Every developer starts their journey by searching some variation
              of, "Best first programming language to learn"&mdash;right? At
              least, thats what I did, and I found Python. And so the journey
              began. I was instantly addicted. First thing in the morning? Code
              time, baby. Last thing at night? You guessed it&mdash;code time!
            </p>
            <p>
              Today, I'm a undergrad studying computer science while working a
              full-time job as a process tech making plastic cups. I've managed
              to learn three languages so far: Python, TypeScript, and Java. At
              night, I often stay up working on peronsal projects, ranging from
              bots and automation scripts to full-stack web applications and
              websites.I continue learning everything I can about programming,
              with the goal of becoming a well-rounded, fully capable
              developer&mdash;someone with the tools and skills to solve any
              problem and create any product {"("}whether its mad science or
              academic{")"}.
            </p>
            <p>
              Daniel H. Pink, author of the book <i>Drive</i>, talks about
              autotelic exeperiences, better known as the flow state. I remember
              the first time i experienced this flow state: I sat down at my
              computer one morning with my cofee, opened my IDE, and started
              working. Next thing I remember, I looked up and said, "Whoa, it's
              dark outside. What time is it?" The first twelve hours of the day
              had disappeared. Then the next twelve hours vanished just as
              quickly. I knew that if I could find flow this easily, this is was
              my destiny. This qoute from the book prefectly describes my
              experience every time.
            </p>
            <div className="relative pt-8 isolate">
              <p className="absolute inset-0 text-9xl font-bold text-zinc-200 dark:text-zinc-800 font-serif">&#8220;</p>
              <p className="relative z-50 pl-8">
                <i>The challenge wasn't too easy. Nor was it too difficult. It was
                a notch or two beyond his current abilities, which stretched the
                body and mind in a way that made the effort itself the most
                delicious reward. That balance produced a degree of focus and
                satisfaction that easily surpassed other, more quotidian,
                experiences. In flow, people lived so deeply in the moment, and
                felt so utterly in control, that their sense of time, place, and
                even self melted away.</i>
              </p>
              <p className="pl-8 pt-4 text-zinc-500">&mdash;{" "}Daniel H. Pink, from the book <i>Drive</i></p>
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
