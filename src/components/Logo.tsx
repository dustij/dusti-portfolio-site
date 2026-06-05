import { useId } from 'react'
import clsx from 'clsx'

export function Logomark({
  invert = false,
  filled = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
}) {
  let id = useId()

  return (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <circle
        cx="16"
        cy="16"
        r="15.25"
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <path
        clipPath={`url(#${id}-clip)`}
        className={clsx(
          'transition-all duration-300',
          invert ? 'fill-white' : 'fill-neutral-950',
          filled ? 'opacity-100' : 'opacity-0 group-hover/logo:opacity-100',
        )}
        d="M8 8h7.5c5 0 8.5 3.2 8.5 8s-3.5 8-8.5 8H8V8Zm4.5 3.8v8.4h2.7c2.8 0 4.3-1.6 4.3-4.2s-1.5-4.2-4.3-4.2h-2.7Z"
      />
      <use
        href={`#${id}-path`}
        className={invert ? 'stroke-white' : 'stroke-neutral-950'}
        fill="none"
        strokeWidth="1.5"
      />
      <defs>
        <path
          id={`${id}-path`}
          d="M8 8h7.5c5 0 8.5 3.2 8.5 8s-3.5 8-8.5 8H8V8Zm4.5 3.8v8.4h2.7c2.8 0 4.3-1.6 4.3-4.2s-1.5-4.2-4.3-4.2h-2.7Z"
        />
        <clipPath id={`${id}-clip`}>
          <use href={`#${id}-path`} />
        </clipPath>
      </defs>
    </svg>
  )
}

export function Logo({
  className,
  invert = false,
  filled = false,
  fillOnHover = false,
  ...props
}: React.ComponentPropsWithoutRef<'svg'> & {
  invert?: boolean
  filled?: boolean
  fillOnHover?: boolean
}) {
  return (
    <svg
      viewBox="0 0 128 32"
      aria-hidden="true"
      className={clsx(fillOnHover && 'group/logo', className)}
      {...props}
    >
      <Logomark
        preserveAspectRatio="xMinYMid meet"
        invert={invert}
        filled={filled}
      />
      <text
        x="42"
        y="22"
        className={invert ? 'fill-white' : 'fill-neutral-950'}
        fontSize="18"
        fontWeight="650"
        letterSpacing="0"
      >
        Dusti
      </text>
    </svg>
  )
}
