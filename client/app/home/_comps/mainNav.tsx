"use client"

import React, { Dispatch, SetStateAction, useEffect, useState } from "react"
import Link from "next/link"
import { Button, Icons } from "@/comps"
import { AppStores, NavItem, cn } from "@/lib"
import { MenuIcon, SidebarClose } from "lucide-react"
import { useAccount, useConnect, useEnsName } from "wagmi"

import { ThemeToggle } from "@/app/comps"

import { siteConfig } from "./site"

interface MainNavProps {
  items?: NavItem[]
}

export function NavbarHeader({ items }: MainNavProps) {
  const { isConnected } = useAccount()
  const [hideConnectBtn, setHideConnectBtn] = useState(false)
  const store = AppStores.useSettingsStore()
  // useEffect(() => {
  //   const w = window as any
  //   if (w.ethereum && w.ethereum.isMiniPay) {
  //     setHideConnectBtn(true)
  //     // connect()
  //   }
  // }, [])

  return (
    <header className="bg-secondary sticky top-0 z-40 w-full border-b">
      <div className="container flex h-16 items-center space-x-4 sm:justify-between sm:space-x-0">
        {/* <MainNav items={siteConfig.mainNav} /> */}
        <div className="flex gap-6 md:gap-10 ">
          <Link href="/" className="flex items-center space-x-2">
            <Icons.logo className="h-6 w-6" />
            <span className="inline-block font-bold">{siteConfig.name}</span>
          </Link>
          <nav className="flex gap-6">
            {isConnected ? (
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
        <div className="flex flex-1 items-center justify-end space-x-4">
          <nav className="items-center space-x-1 md:flex">
            <ThemeToggle />
            <div className={"md:hidden"}>
              {store.isSidebarOpen ? (
                <SidebarClose onClick={store.setIsSidebarOpen(true)} />
              ) : (
                <MenuIcon onClick={store.setIsSidebarOpen(false)} />
              )}
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}
