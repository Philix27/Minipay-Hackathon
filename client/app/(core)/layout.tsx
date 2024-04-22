"use client"

import { AppStores } from "@/lib"

import { Sidebar } from "./_comps"
import { SidebarMobile } from "./_comps/SidebarMobile"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  const store = AppStores.useSettingsStore()

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex h-full">
        {store.isSidebarOpen && <SidebarMobile />}
        <Sidebar />
        {children}
      </div>
    </div>
  )
}
