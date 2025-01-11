"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useState } from "react";
import { Button } from "~/components/ui/button";
import { DUSTI_PICTURE, HERO_CONTENT } from "~/constants";
import { cn } from "~/lib/utils";

export default function Hero() {
  // const textVariants = {
  //   hidden: { opacity: 0, y: 50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  // const containerVariants = {
  //   hidden: { opacity: 1 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.3,
  //     },
  //   },
  // };

  // const imageVariants = {
  //   hidden: { opacity: 0, y: -50 },
  //   visible: {
  //     opacity: 1,
  //     y: 0,
  //     transition: { duration: 0.8, ease: "easeOut" },
  //   },
  // };

  const [forWho, setForWho] = useState<
    "forAnyone" | "forRecruiters" | "forDevelopers"
  >("forAnyone");

  const buttonConfig = [
    { id: "forAnyone", label: "Anyone" },
    { id: "forRecruiters", label: "Recruiters" },
    { id: "forDevelopers", label: "Developers" },
  ];

  return (
    <section className="flex min-h-screen flex-col flex-wrap items-center px-6 pt-14 sm:flex-row lg:px-8">
      <div className="w-full p-6 sm:w-1/2 lg:px-8">
        <div className="relative flex cursor-pointer rounded-full border">
          {/* Sliding Background */}
          <motion.div
            layout
            transition={{ type: "spring", stiffness: 500, damping: 30 }}
            className="absolute inset-y-0 w-1/3 cursor-pointer rounded-full bg-black"
            style={{
              left: `${buttonConfig.findIndex((btn) => btn.id === forWho) * 33.3333}%`,
            }}
          ></motion.div>

          {/* Buttons */}
          {buttonConfig.map((btn) => (
            <button
              key={btn.id}
              type="button"
              onClick={() => setForWho(btn.id as typeof forWho)}
              className={cn(
                "relative z-10 flex-1 cursor-pointer rounded-full px-2 py-[2px] text-sm/6",
                forWho === btn.id
                  ? "font-medium text-white transition-colors duration-200"
                  : "text-black hover:font-medium",
              )}
            >
              {btn.label}
            </button>
          ))}
        </div>
        <div className="flex min-h-80 flex-col justify-center lg:min-h-[32rem]">
          <h1 className="text-balance text-2xl font-semibold tracking-tight lg:text-5xl">
            {HERO_CONTENT[`${forWho}`]}
          </h1>
        </div>
        <Button className="bg-my-green-500 text-black rounded-xl text-xl lg:text-2xl p-6 lg:p-8 hover:bg-my-green-500/90">{HERO_CONTENT[`${forWho}Action`]}</Button>
      </div>
      <div className="flex w-full justify-end p-6 sm:w-1/2 lg:px-8">
        <Image
          src={DUSTI_PICTURE}
          alt="Dusti Johnson"
          width={2050}
          height={2050}
          className="rounded-full"
        />
      </div>
    </section>
  );
}
