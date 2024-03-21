import React from "react"

export function Navbar() {
  return (
    <div
      className={`
  fixed bottom-0 md:bottom-5
  w-full
    flex items-center 
    justify-center
    bg-pink-600 md:bg-transparent
  `}
    >
      <div className="flex gap-x-2 rounded-full bg-pink-600 p-2">
        <p> Wallet</p>
        <p> Bank</p>
        <p> Budgets</p>
      </div>
    </div>
  )
}
