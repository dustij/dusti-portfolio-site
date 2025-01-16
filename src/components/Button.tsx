import Link from "next/link";
import { cn } from "~/lib/utils";

const variantStyles = {
  primary:
    "bg-zinc-800 font-semibold text-zinc-100 hover:bg-zinc-700 active:bg-zinc-800 active:text-zinc-100/70 dark:bg-zinc-700 dark:hover:bg-zinc-600 dark:active:bg-zinc-700 dark:active:text-zinc-100/70",
  secondary:
    "bg-zinc-50 stroke-zinc-500 font-medium text-zinc-600 active:bg-zinc-100/50 active:stroke-zinc-900/70 active:text-zinc-900/70 active:hover:bg-zinc-100 active:hover:stroke-zinc-900 active:hover:text-zinc-900 dark:bg-zinc-800/50 dark:text-zinc-400 dark:active:bg-zinc-800/50 dark:active:stroke-zinc-50/70 dark:active:text-zinc-50/70 dark:active:hover:bg-zinc-800 dark:active:hover:stroke-zinc-50 dark:active:hover:text-zinc-50",
};

type ButtonProps = {
  variant?: keyof typeof variantStyles;
  icon?: React.ElementType;
} & (
  | (React.ComponentPropsWithoutRef<"button"> & { href?: undefined })
  | React.ComponentPropsWithoutRef<typeof Link>
);

export function Button({
  variant = "primary",
  className,
  ...props
}: ButtonProps) {
  className = cn(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    className,
  );

  return typeof props.href === "undefined" ? (
    <button className={className} {...props} />
  ) : (
    <Link className={className} {...props} />
  );
}

export function ButtonIconLeft({
  variant = "primary",
  icon: Icon,
  className,
  children,
  ...props
}: ButtonProps) {
  const isButton = typeof props.href === "undefined";

  className = cn(
    "inline-flex items-center gap-2 justify-center rounded-md py-2 px-3 text-sm outline-offset-2 transition active:transition-none",
    variantStyles[variant],
    isButton && props.disabled && "stroke-zinc-500/50 text-zinc-600/50 active:bg-zinc-50 active:stroke-zinc-500/50 active:text-zinc-600/50 active:hover:bg-zinc-50 active:hover:stroke-zinc-500/50 active:hover:text-zinc-600/50 dark:text-zinc-400/50 dark:active:bg-zinc-800/50 dark:active:stroke-zinc-500/50 dark:active:text-zinc-400/50 dark:active:hover:bg-zinc-800/50 dark:active:hover:stroke-zinc-500/50 dark:active:hover:text-zinc-400/50",
    className,
  );

  const iconLeft = Icon ? (
    <Icon aria-hidden="true" className="-ml-0.5 size-5" />
  ) : null;

  return isButton ? (
    <button className={className} {...props}>
      {iconLeft}
      {children}
    </button>
  ) : (
    <Link className={className} {...props}>
      {iconLeft}
      {children}
    </Link>
  );
}
