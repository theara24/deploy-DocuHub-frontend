"use client"

import { useEffect } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/components/contexts/auth-context"

export default function DashboardPage() {
  const { user, isLoading, isAuthenticated } = useAuth()
  const router = useRouter()

  useEffect(() => {
    if (!isLoading) {
      if (!isAuthenticated) {
        router.push("/login")
        return
      }

      // Redirect to role-specific dashboard
      switch (user?.role) {
        case "admin":
          router.push("/admin")
          break
        case "mentor":
          router.push("/mentor")
          break
        case "student":
          router.push("/student")
          break
        case "public":
          router.push("/profile")
          break
        default:
          router.push("/login")
      }
    }
  }, [user, isLoading, isAuthenticated, router])

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
          <p className="text-muted-foreground">Loading...</p>
        </div>
      </div>
    )
  }

  return null
}
