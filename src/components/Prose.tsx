import rehypePrism from "@mapbox/rehype-prism";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { cn } from "~/lib/utils";

export function Prose({
  className,
  content,
}: {
  className?: string;
  content?: string;
}) {
  return (
    <Markdown
      className={cn(
        "prose md:prose-lg lg:prose-xl dark:prose-invert",
        className,
      )}
      remarkPlugins={[remarkGfm]}
      rehypePlugins={[rehypePrism as any]} // Force compatibility
    >
      {content}
    </Markdown>
  );
}
