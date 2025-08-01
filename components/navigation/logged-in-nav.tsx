"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { useAuth } from "@/components/auth-provider"
import Image from "next/image"

export function LoggedInNav() {
  const { user, logout } = useAuth()

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-travozom-cream/80 dark:bg-travozom-darkest-brown/80 backdrop-blur-md shadow-sm transition-colors duration-300">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Image src="/travel-bot-logo.png" alt="Travel Bot Logo" width={40} height={40} className="h-10 w-auto" />
          <Image
            src="/logo.jpg"
            alt="Travozom Logo"
            width={120} // Adjust size as needed
            height={40} // Adjust size as needed
            className="h-10 w-auto"
          />
        </Link>
        <div className="flex items-center space-x-4">
          <Link
            href="/planner"
            className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors"
          >
            Planner
          </Link>
          <Link
            href="/destinations"
            className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors"
          >
            Destinations
          </Link>
          <Link
            href="/meet-guides"
            className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors"
          >
            Meet Guides
          </Link>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="relative h-9 w-9 rounded-full">
                <Avatar className="h-9 w-9">
                  <AvatarImage src={user?.image || "/placeholder-avatar.jpg"} alt="User Avatar" />
                  <AvatarFallback>{user?.name ? user.name[0] : "U"}</AvatarFallback>
                </Avatar>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56" align="end" forceMount>
              <DropdownMenuItem>
                <Link href="/profile" className="w-full">
                  Profile
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Link href="/settings" className="w-full">
                  Settings
                </Link>
              </DropdownMenuItem>
              <DropdownMenuItem onClick={logout}>Logout</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
