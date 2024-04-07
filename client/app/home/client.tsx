"use client"

import React from "react"
import Link from "next/link"
import { TextB, TextH, buttonVariants } from "@/comps"
import { AppImg } from "@/lib"

import { SiteHeader } from "./_comps"
import CardsSection from "./cards"
import FooterSection from "./footer"
import HeroSection from "./hero"
import HeroCenter from "./heroC"
import JumbutronSection from "./jumbutron"

export default function HomeClient() {
  return (
    <div>
      <SiteHeader />
      <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 w-full">
        <HeroCenter
          title={"Free. Open Source. And MiniPay Ready"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps.`}
        />
        <HeroSection
          img={AppImg.chain}
          title={"P2P Solution"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.`}
        />
        <JumbutronSection
          title={
            "Beautifully designed components built with Radix UI and Tailwind CSS."
          }
          subtitle=""
        />
        <HeroSection
          imgFirst
          img={AppImg.chain}
          title={"P2P Solution"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.`}
        />
        <CardsSection />
        <HeroSection
          img={AppImg.secure}
          title={"P2P Solution"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.`}
        />
        <FooterSection />
      </section>
    </div>
  )
}
