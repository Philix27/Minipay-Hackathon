"use client"

import { useState } from "react"
import { AppStores } from "@/lib"

import {  Sidebar } from "./_comps"
import { SidebarMobile } from "./_comps/SidebarMobile"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const store = AppStores.useSettingsStore()

  return (
    <div className="flex flex-col min-h-screen">
      {/* <Navbar
        onMenuClick={() => setOpenNav(true)}
        isOpen={openNav}
        onCloseClick={() => setOpenNav(false)}
      /> */}
      <div className="flex h-full mt-[50px]">
        {store.isSidebarOpen && <SidebarMobile />}
        <Sidebar />
        {/* <SidebarMobile className={` ${openNav && "hidden md:block"}`} /> */}

        {children}
      </div>
    </div>
  )
}
