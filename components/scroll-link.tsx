"use client"

import type React from "react"

import Link from "next/link"
import { useRouter } from "next/navigation"
import type { ReactNode } from "react"

interface ScrollLinkProps {
  href: string
  children: ReactNode
  className?: string
  onClick?: () => void
}

export default function ScrollLink({ href, children, className, onClick }: ScrollLinkProps) {
  const router = useRouter()

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()

    // If there's an onClick handler, call it
    if (onClick) {
      onClick()
    }

    // Navigate to the new page
    router.push(href)

    // Scroll to the top
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <Link href={href} className={className} onClick={handleClick}>
      {children}
    </Link>
  )
}
