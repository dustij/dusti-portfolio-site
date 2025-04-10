import avatarImage from "~/images/avatar.jpg";
import logoClumsyCat from "~/images/logos/clumsycat.ico";
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

export const projects = [
  {
    name: "ClumsyCat",
    description:
      "A fun landing page for my Solana token launch, with responsive layouts and smooth animations.",
    link: { href: "https://www.clumsycatsol.com", label: "clumsycatsol.com" },
    logo: logoClumsyCat,
  },
  {
    name: "Reed-Solomon Demo",
    description: "Java-based GUI application that visualizes Reed-Solomon encoding and decoding. Built for demonstrating error correction at Washburn University’s Apeiron event",
    link: { href: "https://github.com/dustij/Reed-Solomon-Demo", label: "Go to GitHub" },
    logo: rsGraphImage,
  }
];
