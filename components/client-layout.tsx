"use client"

import { useState, useEffect, createContext } from "react"
import { usePathname } from "next/navigation"

// Create a context for page loading state with a more specific name
export const ClientLoadingContext = createContext({
  isLoading: false,
  setIsLoading: (loading: boolean) => {}
})

export default function ClientLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [isLoading, setIsLoading] = useState(false)
  const pathname = usePathname()
  
  // Reset loading state when pathname changes
  useEffect(() => {
    setIsLoading(false)
  }, [pathname])

  return (
    <ClientLoadingContext.Provider value={{ isLoading, setIsLoading }}>
      {/* Page transition loading indicator */}
      {isLoading && (
        <div className="fixed top-0 left-0 w-full h-1 bg-green-100 z-50">
          <div className="h-full bg-green-600 animate-progress-bar"></div>
        </div>
      )}
      {children}
    </ClientLoadingContext.Provider>
  )
} 