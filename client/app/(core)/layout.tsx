"use client"

import { useState } from "react"

import { Navbar, Sidebar } from "./_comps"
import { SidebarMobile } from "./_comps/SidebarMobile"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const [openNav, setOpenNav] = useState(false)

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar
        onMenuClick={() => setOpenNav(true)}
        isOpen={openNav}
        onCloseClick={() => setOpenNav(false)}
      />
      <div className="flex h-full">
        {openNav && <SidebarMobile />}
        <Sidebar />
        {/* <SidebarMobile className={` ${openNav && "hidden md:block"}`} /> */}

        {children}
      </div>
    </div>
  )
}
