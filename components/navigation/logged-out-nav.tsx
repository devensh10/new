"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ThemeToggle } from "@/components/theme-toggle"
import { LoginModal } from "@/components/auth/login-modal"
import Image from "next/image"

export function LoggedOutNav() {
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
            href="/about"
            className="text-travozom-deep-brown dark:text-travozom-beige hover:text-travozom-gold transition-colors"
          >
            About
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
          <LoginModal>
            <Button className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-darkest-brown">Login</Button>
          </LoginModal>
          <ThemeToggle />
        </div>
      </nav>
    </header>
  )
}
