import { cn } from "~/lib/utils";

function SpinnerIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg
      viewBox="0 0 50 50"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      aria-hidden="true"
      {...props}
      className={cn("animate-spin", props.className)}
    >
      <circle
        cx="25"
        cy="25"
        r="20"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        opacity="0.3"
      />
      <path
        d="M25 5a20 20 0 0 1 0 40"
        stroke="currentColor"
        strokeWidth="4"
        fill="none"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function LoadingSpinner() {
  return <SpinnerIcon className="text-primary-500 size-8" />;
}
