import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "~/app/providers";
import { Layout } from "~/components/Layout";
import "~/styles/tailwind.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    template: "%s - Dusti Johnson",
    default: "Dusti Johnson - Software designer, web developer, and student",
  },
  description:
    "Hey there, I'm Dusti—a software engineer and computer science student. Usually, I'm burning the midnight oil, working on a personal project or diving deep into documentation.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full antialiased" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans flex h-full bg-zinc-50 dark:bg-black`}
      >
        <Providers>
          <div className="flex w-full">
            <Layout>{children}</Layout>
          </div>
        </Providers>
      </body>
    </html>
  );
}
