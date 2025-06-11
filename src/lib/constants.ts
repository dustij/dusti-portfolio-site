import { StaticImageData } from "next/image";
import avatarImage from "~/images/avatar.jpg";
import cacheImage from "~/images/cache-logo.png";
import logoClumsyCat from "~/images/clumsycat.ico";
import portraitImage from "~/images/portrait.jpg";
import rsGraphImage from "~/images/RSGraph02.png";

export { avatarImage, portraitImage };

export const navLinks = [
  { text: "About", href: "/about" },
  { text: "Articles", href: "/articles" },
  { text: "Projects", href: "/projects" },
  // { text: "Contact", href: "/contact" },
];

export const socialLinks = {
  linkedIn: "https://linkedin.com/in/dusti-johnson",
  gitHub: "https://github.com/dustij",
};

export const DEFAULT_ARTICLES_PER_PAGE = 5;

interface Project {
  name: string;
  description: string;
  link: { href: string; label: string };
  logo: StaticImageData;
}

export const projects: Project[] = [
  {
    name: "ClumsyCat Website",
    description:
      "Responsive landing page built with Next.js and TypeScript for my Solana token launch, featuring smooth animations with Framer Motion.",
    link: { href: "https://www.clumsycatsol.com", label: "clumsycatsol.com" },
    logo: logoClumsyCat,
  },
  {
    name: "Reed-Solomon Demo",
    description:
      "Java-based GUI application that visualizes Reed-Solomon encoding and decoding. Presented at Washburn University’s Apeiron event.",
    link: {
      href: "https://github.com/dustij/Reed-Solomon-Demo",
      label: "Go to GitHub",
    },
    logo: rsGraphImage,
  },
  {
    name: "Cache Simulator",
    description:
      "Interactive webpage built with Next.js and TypeScript demonstrating how cache works inside your computer.",
    link: {
      href: "https://cache.dustijohnson.com",
      label: "cache.dustijohnson.com",
    },
    logo: cacheImage,
  },
];
