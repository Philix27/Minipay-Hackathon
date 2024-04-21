"use client"

import React from "react"
import { AppImg } from "@/lib"

import CardsSection from "./cards"
import FooterSection from "./footer"
import HeroSection from "./hero"
import HeroCenter from "./heroC"
import JumbutronSection from "./jumbutron"

export default function HomeClient() {
  return (
    <div>
      <section className="container flex flex-col items-center gap-6 pb-8 pt-6 md:py-10 w-full">
        <HeroCenter
          title={"Manage all your expenses in one place"}
          subtitle={`Create budgets, invoices, payment-links and all you need to handle your day to day expenses and financial records.`}
        />
        <HeroSection
          img={AppImg.chain}
          title={"Expense management"}
          subtitle={`Create and manage budgets for your various needs.`}
        />
        <JumbutronSection
          title={
            "Beautifully designed components built with Radix UI and Tailwind CSS."
          }
          subtitle="Beautifully designed components built with Radix UI and Tailwind CSS."
        />
        <HeroSection
          imgFirst
          img={AppImg.invoice}
          title={"Invoice management"}
          subtitle={`Accessible and customizable components that you can copy and paste
          into your apps. Free. Open Source. And Next.js 13 Ready.`}
        />
        <JumbutronSection
          title={""}
          subtitle="Beautifully designed components built with Radix UI and Tailwind CSS."
        />
        <CardsSection />
        <JumbutronSection
          title={""}
          subtitle="Beautifully designed components built with Radix UI and Tailwind CSS."
        />
        <HeroSection
          img={AppImg.cart}
          title={"Shopping"}
          subtitle={`Pay for all your digital shoppings in crypto (CUSD).`}
        />
        <FooterSection />
      </section>
    </div>
  )
}
