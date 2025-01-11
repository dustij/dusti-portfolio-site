"use client";

import { LINKS } from "@/constants";
import { Dialog, DialogPanel } from "@headlessui/react";
import Link from "next/link";
import { useState } from "react";
import { RiCloseFill, RiMenu3Fill } from "react-icons/ri";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="absolute inset-x-0 top-0 z-50 mx-auto max-w-7xl">
      <nav
        aria-label="Global"
        className="flex items-center justify-between p-6 lg:px-8"
      >
        <div className="flex lg:flex-1">
          <Link href="#" className="-m-1.5 p-1.5">
            <span className="sr-only">Dusti Johnson</span>
            <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
              Dusti Johnson
            </h1>
          </Link>
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            onClick={() => setMobileMenuOpen(true)}
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
          >
            <span className="sr-only">Open main menu</span>
            <RiMenu3Fill aria-hidden="true" className="size-6" />
          </button>
        </div>
        <div className="hidden flex-1 justify-end space-x-6 lg:flex">
          {LINKS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm/6 font-medium underline-offset-4 hover:underline"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </nav>
      <Dialog
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
        className="lg:hidden"
      >
        <div className="fixed inset-0 z-50" />
        <DialogPanel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <div className="hidden sm:flex" />
            <Link href="#" className="-m-1.5 p-1.5 sm:hidden">
              <span className="sr-only">Dusti Johnson</span>
              <h1 className="text-xl font-bold tracking-tight sm:text-2xl">
                Dusti Johnson
              </h1>
            </Link>
            <button
              type="button"
              onClick={() => setMobileMenuOpen(false)}
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5"
            >
              <span className="sr-only">Open main menu</span>
              <RiCloseFill aria-hidden="true" className="size-6" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {LINKS.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base/7 font-semibold text-gray-900 hover:bg-gray-50"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </DialogPanel>
      </Dialog>
    </header>
  );
}
