"use client"

import React from "react"
import Link from "next/link"
import { TextB, TextH, buttonVariants } from "@/comps"
import { siteConfig } from "@/lib"

import HeroSection from "./hero"
import JumbutronSection from "./jumbutron"
import CardsSection from "./cards"

export default function HomeClient() {
  return (
    <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 w-full">
      <HeroSection />
      <JumbutronSection />
      <CardsSection />
    </section>
  )
}
