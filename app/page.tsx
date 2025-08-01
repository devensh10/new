"use client"
import { useAuth } from "@/components/auth-provider"
import { LoggedInNav } from "@/components/navigation/logged-in-nav"
import { LoggedOutNav } from "@/components/navigation/logged-out-nav"
import { HomePage } from "@/components/pages/home-page"

export default function Home() {
  const { user } = useAuth()
  return (
    <>
      {user ? <LoggedInNav /> : <LoggedOutNav />}
      <HomePage />
    </>
  )
}
