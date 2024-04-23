"use client"

import React, { useEffect, useState } from "react"
import Link from "next/link"
import { Button, Icons } from "@/comps"
import { AppStores, NavItem, SettingsContext, cn } from "@/lib"
import { MenuIcon, SidebarClose } from "lucide-react"

import { ThemeToggle } from "@/app/comps"

import { siteConfig } from "./site"

interface MainNavProps {
  items?: NavItem[]
}

export function NavbarHeader({ items }: MainNavProps) {
  const [hideConnectBtn, setHideConnectBtn] = useState(false)
  const { isSidebarOpen, setIsSidebarOpen } = AppStores.useSettingsStore()
  // const settings = useContext(SettingsContext)

  useEffect(() => {
    const w = window as any
    if (w.ethereum && w.ethereum.isMiniPay) {
      setHideConnectBtn(true)
      // connect()
    }
  }, [])

  return (
    <header className="bg-primary sticky top-0 z-20 w-full border-b">
      <div className="container flex h-[60px] items-center justify-between">
        <div className="flex gap-6 md:gap-10 ">
          <Link href="/" className="flex items-center space-x-2">
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="flex gap-6">
            {hideConnectBtn ? (
              <Link
                href={"/dashboard"}
                className={cn(
                  "flex items-center text-sm font-medium text-muted-foreground"
                )}
              >
                Dashboard
              </Link>
            ) : (
              <Button>Connect</Button>
            )}
          </nav>
        </div>

        <div className="flex items-center justify-center md:gap-x-3">
          <div className="mr-4">
            <ThemeToggle />
          </div>
          <div className={"md:hidden"}>
            {isSidebarOpen ? (
              <SidebarClose
                onClick={() => {
                  setIsSidebarOpen(false)
                }}
              />
            ) : (
              <MenuIcon
                onClick={() => {
                  setIsSidebarOpen(true)
                }}
              />
            )}
          </div>
        </div>
      </div>
    </header>
  )
}
