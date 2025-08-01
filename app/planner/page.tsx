import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle, Sparkles, Map, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { BudgetChatbot } from "@/components/budget-chatbot"

export default function PlannerPage() {
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
        <Image src="/placeholder.svg?height=600&width=1200" alt="Trip Planner Hero" fill className="object-cover" />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Your AI-Powered Trip Planner</h1>
          <p className="text-xl text-travozom-light-beige">
            Craft your dream Indian journey with intelligent recommendations and seamless organization.
          </p>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">How It Works</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Sparkles className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Tell Us Your Dreams
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  Share your travel aspirations, interests, and preferences with our AI.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <Map className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  AI Crafts Your Itinerary
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  Our intelligent system generates a personalized itinerary, complete with destinations, activities, and
                  recommendations.
                </p>
              </CardContent>
            </Card>
            <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
              <CardHeader>
                <CheckCircle className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                  Refine & Book
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                  Review and refine your plan with our experts, then seamlessly book your entire journey.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Planning Form Section */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-darker-brown transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Start Planning Your Journey
          </h2>
          <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg p-6">
            <CardContent>
              <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium mb-2">
                    Preferred Destination(s)
                  </label>
                  <Input id="destination" placeholder="e.g., Rajasthan, Kerala, Goa" />
                </div>
                <div>
                  <label htmlFor="travel-dates" className="block text-sm font-medium mb-2">
                    Approximate Travel Dates
                  </label>
                  <Input id="travel-dates" type="text" placeholder="e.g., Nov 2025, Spring 2026" />
                </div>
                <div>
                  <label htmlFor="travelers" className="block text-sm font-medium mb-2">
                    Number of Travelers
                  </label>
                  <Input id="travelers" type="number" placeholder="2" min="1" />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget per Person (approx.)
                  </label>
                  <Select>
                    <SelectTrigger id="budget">
                      <SelectValue placeholder="Select budget" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="economy">Economy (₹1,000-₹2,500/day)</SelectItem>
                      <SelectItem value="mid-range">Mid-Range (₹2,500-₹5,000/day)</SelectItem>
                      <SelectItem value="luxury">Luxury (₹5,000+/day)</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="interests" className="block text-sm font-medium mb-2">
                    Your Interests & Preferences
                  </label>
                  <Textarea
                    id="interests"
                    placeholder="e.g., historical sites, adventure sports, local cuisine, relaxation, wildlife, cultural immersion..."
                    rows={4}
                  />
                </div>
                <div className="md:col-span-2">
                  <label htmlFor="special-requests" className="block text-sm font-medium mb-2">
                    Any Special Requests or Considerations?
                  </label>
                  <Textarea
                    id="special-requests"
                    placeholder="e.g., accessibility needs, dietary restrictions, specific hotels, family-friendly activities..."
                    rows={3}
                  />
                </div>
                <div className="md:col-span-2 text-center">
                  <Button
                    type="submit"
                    size="lg"
                    className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
                  >
                    Generate My Itinerary
                    <Sparkles className="ml-2 w-5 h-5" />
                  </Button>
                </div>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Budget Chatbot Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Need Help with Your Budget?
          </h2>
          <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige mb-8">
            Our AI Budget Assistant can help you estimate costs and optimize your spending for your dream trip.
          </p>
          <BudgetChatbot />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Design Your Perfect Journey?</h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Let our AI and expert team craft an unforgettable Indian adventure just for you.
          </p>
          <Button
            size="lg"
            className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/design-journey">
              Design My Journey
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
