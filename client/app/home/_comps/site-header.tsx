"use client"

import { ThemeToggle } from "@/comps"

import { MainNav } from "./main-nav"
import { siteConfig } from "./site"

export function SiteHeader() {
  return (
    <header className="bg-secondary sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        <MainNav items={siteConfig.mainNav} />
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="items-center space-x-1 md:flex">
            <ThemeToggle />
          </nav>
        </div>
      </div>
    </header>
  )
}
