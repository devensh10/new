import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Globe, Users, Lightbulb, Award, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"

export default function AboutPage() {
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
        <Image src="/placeholder.svg?height=600&width=1200" alt="About Traozom" fill className="object-cover" />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">About Traozom</h1>
          <p className="text-xl text-travozom-light-beige">
            Your journey to authentic, luxurious Indian experiences starts here.
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-6">Our Story</h2>
            <p className="text-lg leading-relaxed mb-6">
              Traozom was born from a passion for India's rich tapestry of cultures, landscapes, and traditions. We
              believe that true luxury lies in authentic experiences, personalized journeys, and seamless execution. Our
              founders, seasoned travelers and technology enthusiasts, envisioned a platform that combines cutting-edge
              AI with human expertise to craft unforgettable Indian adventures.
            </p>
            <p className="text-lg leading-relaxed">
              From the bustling markets of Delhi to the serene backwaters of Kerala, we're dedicated to revealing
              India's soul, one bespoke itinerary at a time. We partner with local experts, luxury accommodations, and
              sustainable initiatives to ensure every trip is not just a vacation, but a transformative journey.
            </p>
          </div>
          <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
            <Image src="/placeholder.svg?height=400&width=600" alt="Indian Landscape" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-darker-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">Our Mission</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Globe className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Personalized Journeys
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  To craft unique, AI-powered itineraries that reflect your individual desires and preferences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Users className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Local Expertise
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  To connect you with verified local guides who offer authentic insights and unforgettable experiences.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Lightbulb className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Seamless Luxury
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  To ensure every aspect of your trip, from planning to execution, is effortless and exceptional.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Why Choose Traozom?
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 w-full rounded-lg overflow-hidden shadow-lg">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Traditional Indian Art"
                fill
                className="object-cover"
              />
            </div>
            <div>
              <ul className="space-y-6">
                <li className="flex items-start space-x-4">
                  <Award className="w-8 h-8 text-travozom-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      AI-Powered Personalization
                    </h3>
                    <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige">
                      Our advanced AI analyzes your preferences to create itineraries that are truly yours, adapting to
                      your interests, budget, and travel style.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Users className="w-8 h-8 text-travozom-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      Curated Local Experts
                    </h3>
                    <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige">
                      We handpick and verify local guides who are passionate about sharing their culture and knowledge,
                      ensuring authentic and enriching experiences.
                    </p>
                  </div>
                </li>
                <li className="flex items-start space-x-4">
                  <Lightbulb className="w-8 h-8 text-travozom-gold flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      Luxury & Comfort
                    </h3>
                    <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige">
                      From boutique hotels to private transport, we ensure every detail of your journey is handled with
                      the utmost care, providing unparalleled comfort and peace of mind.
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Plan Your Indian Adventure?</h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Let Traozom transform your travel dreams into a luxurious reality.
          </p>
          <Button
            size="lg"
            className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/start-planning">
              Start Planning Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
