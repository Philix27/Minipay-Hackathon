"use client"

import * as React from "react"
import Link from "next/link"
import { Icons } from "@/comps"
import { NavItem, cn } from "@/lib"
import { useAddress } from "@thirdweb-dev/react"
import { ConnectButton } from "thirdweb/react"

import { ThirdClient } from "@/lib/thirdweb"

import { siteConfig } from "./site"

interface MainNavProps {
  items?: NavItem[]
}

export function MainNav({ items }: MainNavProps) {
  // const { user, isLoggedIn, isLoading } = useUser()
  // const address = useAddress()
  return (
    <div className="flex gap-6 md:gap-10">
      <Link href="/" className="flex items-center space-x-2">
        <Icons.logo className="h-6 w-6" />
        <span className="inline-block font-bold">{siteConfig.name}</span>
      </Link>
      {items?.length ? (
        <nav className="flex gap-6">
          {/* {items?.map(
            (item, index) =>
              item.href && (
                <Link
                  key={index}
                  href={item.href}
                  className={cn(
                    "flex items-center text-sm font-medium text-muted-foreground",
                    item.disabled && "cursor-not-allowed opacity-80"
                  )}
                >
                  {item.title}
                </Link>
              )
          )} */}
          {/* {isLoggedIn ? (
            <Link
              href={"/dashboard"}
              className={cn(
                "flex items-center text-sm font-medium text-muted-foreground"
              )}
            >
              Dashboard
            </Link>
          ) : (
            <ConnectButton
              client={ThirdClient}
              appMetadata={{
                name: siteConfig.name,
                url: "http://localhost:3300",
              }}
            />
          )} */}
        </nav>
      ) : null}
    </div>
  )
}
