import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles, Users, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function DesignJourneyPage() {
  return (
    <div className="min-h-screen bg-travozom-beige dark:bg-travozom-deep-brown text-travozom-deep-brown dark:text-travozom-cream transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-travozom-beige/90 dark:bg-travozom-deep-brown/90 backdrop-blur-md border-b border-travozom-dark-beige dark:border-travozom-light-beige transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <Link href="/" className="flex items-center">
              <AnimatedLogo />
            </Link>
            <div className="hidden md:flex items-center space-x-8">
              <Link
                href="/"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Home
              </Link>
              <Link
                href="/destinations"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Destinations
              </Link>
              <Link
                href="/planner"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Trip Planner
              </Link>
              <Link
                href="/about"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                About Us
              </Link>
              <Link
                href="/meet-guides"
                className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold transition-colors"
              >
                Meet Guides
              </Link>
              <ThemeToggle />
              <Button className="bg-travozom-deep-brown hover:bg-travozom-dark-beige text-white">Book a Trip</Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <Image
          src="/placeholder.svg?height=600&width=1200"
          alt="Design Your Journey Hero"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Design Your Perfect Journey</h1>
          <p className="text-xl text-travozom-light-beige">
            Collaborate with our AI and expert team to craft a truly bespoke Indian adventure.
          </p>
        </div>
      </section>

      {/* Design Process Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Our Collaborative Design Process
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Initial AI Draft
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  Based on your preferences, our AI generates a smart first draft of your itinerary.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Expert Refinement
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  Our human travel experts review, enhance, and personalize the AI's suggestions to perfection.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Your Approval & Booking
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  You approve the final itinerary, and we handle all the bookings, ensuring a seamless experience.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-darker-brown transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Get Started with Your Custom Journey
          </h2>
          <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg p-6">
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Your Name
                  </label>
                  <Input id="name" placeholder="John Doe" />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Your Email
                  </label>
                  <Input id="email" type="email" placeholder="john.doe@example.com" />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium mb-2">
                    Phone Number (Optional)
                  </label>
                  <Input id="phone" type="tel" placeholder="+91 98765 43210" />
                </div>
                <div>
                  <label htmlFor="preferred-contact" className="block text-sm font-medium mb-2">
                    Preferred Contact Method
                  </label>
                  <Select>
                    <SelectTrigger id="preferred-contact">
                      <SelectValue placeholder="Select method" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="email">Email</SelectItem>
                      <SelectItem value="phone">Phone Call</SelectItem>
                      <SelectItem value="whatsapp">WhatsApp</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="travel-ideas" className="block text-sm font-medium mb-2">
                    Share Your Travel Ideas & Dreams
                  </label>
                  <Textarea
                    id="travel-ideas"
                    placeholder="Tell us about your ideal Indian adventure: destinations, interests, pace, special occasions, etc."
                    rows={6}
                  />
                </div>
                <div className="md:col-span-2 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Submit for Consultation
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Questions? We're Here to Help!</h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Our team of travel experts is ready to assist you every step of the way.
          </p>
          <Button
            size="lg"
            variant="outline"
            className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
            asChild
          >
            <Link href="/contact">
              Contact Us
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
