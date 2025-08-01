"use client"

import { DialogTrigger } from "@/components/ui/dialog"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { useAuth } from "@/components/auth-provider"
import { useRouter } from "next/navigation"

interface LoginModalProps {
  children: React.ReactNode
  isOpen?: boolean
  onClose?: () => void
}

export function LoginModal({ children, isOpen: controlledIsOpen, onClose: controlledOnClose }: LoginModalProps) {
  const [uncontrolledIsOpen, setUncontrolledIsOpen] = useState(false)
  const isOpen = controlledIsOpen !== undefined ? controlledIsOpen : uncontrolledIsOpen
  const setIsOpen = controlledIsOpen !== undefined ? controlledOnClose : setUncontrolledIsOpen

  const { login } = useAuth()
  const router = useRouter()

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate a successful login
    login({ id: "1", name: "Traveler", email: "traveler@example.com", image: "/placeholder-avatar.jpg" })
    setIsOpen?.(false)
    router.push("/dashboard") // Redirect to dashboard after login
  }

  const handleSignUp = (e: React.FormEvent) => {
    e.preventDefault()
    // Simulate a successful sign-up and login
    login({ id: "1", name: "New Traveler", email: "new.traveler@example.com", image: "/placeholder-avatar.jpg" })
    setIsOpen?.(false)
    router.push("/dashboard") // Redirect to dashboard after sign-up
  }

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-[425px] bg-white dark:bg-travozom-deep-brown text-travozom-deep-brown dark:text-travozom-cream border-travozom-dark-beige dark:border-travozom-medium-brown">
        <DialogHeader>
          <DialogTitle className="text-center text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
            Welcome to Traozom
          </DialogTitle>
          <DialogDescription className="text-center text-travozom-dark-beige dark:text-travozom-light-beige">
            Sign in or create an account to start your journey.
          </DialogDescription>
        </DialogHeader>
        <Tabs defaultValue="login" className="w-full">
          <TabsList className="grid w-full grid-cols-2 bg-travozom-beige dark:bg-travozom-darker-brown">
            <TabsTrigger
              value="login"
              className="data-[state=active]:bg-travozom-gold data-[state=active]:text-travozom-deep-brown text-travozom-deep-brown dark:text-travozom-cream"
            >
              Login
            </TabsTrigger>
            <TabsTrigger
              value="signup"
              className="data-[state=active]:bg-travozom-gold data-[state=active]:text-travozom-deep-brown text-travozom-deep-brown dark:text-travozom-cream"
            >
              Sign Up
            </TabsTrigger>
          </TabsList>
          <TabsContent value="login" className="p-4">
            <form onSubmit={handleLogin} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="login-email">Email</Label>
                <Input id="login-email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="login-password">Password</Label>
                <Input id="login-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">
                Login
              </Button>
            </form>
          </TabsContent>
          <TabsContent value="signup" className="p-4">
            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid gap-2">
                <Label htmlFor="signup-name">Name</Label>
                <Input id="signup-name" type="text" placeholder="Your Name" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-email">Email</Label>
                <Input id="signup-email" type="email" placeholder="m@example.com" required />
              </div>
              <div className="grid gap-2">
                <Label htmlFor="signup-password">Password</Label>
                <Input id="signup-password" type="password" required />
              </div>
              <Button type="submit" className="w-full bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">
                Sign Up
              </Button>
            </form>
          </TabsContent>
        </Tabs>
      </DialogContent>
    </Dialog>
  )
}
