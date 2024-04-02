import { TextH } from "@/comps"

import { Navbar, Sidebar } from "./_comps"

interface RootLayoutProps {
  children: React.ReactNode
}

export default function ProtectedLayout({ children }: RootLayoutProps) {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <div className="flex h-full">
        <Sidebar />
        <div>{children}</div>
      </div>
    </div>
  )
}
