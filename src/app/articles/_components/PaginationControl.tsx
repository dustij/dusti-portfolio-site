"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";
import { ButtonIconLeft } from "~/components/Button";
import { ARTICLES_PER_PAGE } from "~/lib/constants";

// ==== ICONS ==== //

function ChevronDownIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 1.75 4 4.25l2.25-2.5"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DashIcon(props: React.ComponentPropsWithoutRef<"svg">) {
  return (
    <svg viewBox="0 0 8 6" aria-hidden="true" {...props}>
      <path
        d="M1.75 3 6.25 3"
        fill="none"
        strokeWidth="1"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

// ==== PAGINATION CONTROL ==== //

export default function PaginationControl({ total }: { total: number }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const page = Number(searchParams.get("page") ?? 1);
  const perPage = Number(searchParams.get("per_page") ?? ARTICLES_PER_PAGE);

  const isMore = page * perPage < total;

  const createQueryString = useCallback(
    (args: { name: string; value: string }[]) => {
      const params = new URLSearchParams(searchParams.toString());

      args.map((arg) => {
        params.set(arg.name, arg.value);
      });

      return params.toString();
    },
    [searchParams],
  );

  return (
    <div className="mt-16 flex justify-center sm:mt-20">
      <ButtonIconLeft
        variant={"secondary"}
        disabled={!isMore}
        icon={isMore ? ChevronDownIcon : DashIcon}
        onClick={() => {
          router.push(
            pathname +
              "?" +
              createQueryString([
                { name: "page", value: (page + 1).toString() },
                { name: "per_page", value: perPage.toString() },
              ]),
            {
              scroll: false,
            },
          );
        }}
      >
        {isMore ? "Show more" : "No more"}
      </ButtonIconLeft>
    </div>
  );
}
