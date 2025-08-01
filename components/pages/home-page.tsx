"use client"

import { Badge } from "@/components/ui/badge"

import type React from "react"

import { useState } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Sparkles, MapPin, Users, ArrowRight, Star } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const testimonials = [
  {
    name: "Sarah L.",
    location: "New York, USA",
    quote:
      "Traozom made our dream trip to Rajasthan a reality! The AI-powered itinerary was spot on, and our local guide was simply incredible. Every detail was perfect.",
    rating: 5,
  },
  {
    name: "David M.",
    location: "London, UK",
    quote:
      "I've always wanted to explore Kerala's backwaters, and Traozom delivered beyond expectations. The seamless planning and authentic experiences were truly luxurious.",
    rating: 5,
  },
  {
    name: "Priya S.",
    location: "Mumbai, India",
    quote:
      "As an Indian, I was amazed by the unique insights and hidden gems Traozom uncovered in Delhi. It felt like rediscovering my own country with fresh eyes.",
    rating: 5,
  },
]

const featuredDestinations = [
  {
    name: "Rajasthan",
    image: "/placeholder.svg?height=300&width=400",
    description: "Explore majestic forts, vibrant cities, and desert landscapes.",
    link: "/destinations/rajasthan",
  },
  {
    name: "Kerala",
    image: "/placeholder.svg?height=300&width=400",
    description: "Relax in serene backwaters and lush green spice plantations.",
    link: "/destinations/kerala",
  },
  {
    name: "Goa",
    image: "/placeholder.svg?height=300&width=400",
    description: "Enjoy pristine beaches, vibrant nightlife, and Portuguese heritage.",
    link: "/destinations/goa",
  },
]

const featuredGuides = [
  {
    id: "rajesh-jaipur",
    name: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    specialties: ["Heritage Tours", "Photography"],
  },
  {
    id: "priya-kerala",
    name: "Priya Nair",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    specialties: ["Backwater Tours", "Ayurveda"],
  },
  {
    id: "vikram-himachal",
    name: "Vikram Thakur",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 203,
    specialties: ["Mountain Trekking", "Adventure Sports"],
  },
]

export function HomePage() {
  const [destination, setDestination] = useState("")
  const [dates, setDates] = useState("")
  const [travelers, setTravelers] = useState("")
  const [budget, setBudget] = useState("")
  const [interests, setInterests] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log({ destination, dates, travelers, budget, interests })
    // In a real app, you'd send this data to a backend or AI service
    alert("Your trip request has been submitted! Our AI will start crafting your journey.")
  }

  return (
    <div className="min-h-screen bg-travozom-beige dark:bg-travozom-deep-brown text-travozom-deep-brown dark:text-travozom-cream transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <Image
          src="/placeholder.svg?height=1080&width=1920"
          alt="Luxury Indian Travel"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="mb-8"
          >
            <h1 className="text-6xl md:text-7xl font-serif text-white leading-tight mb-4">
              Traozom: AI-Powered Luxury Travel
            </h1>
            <p className="text-xl md:text-2xl text-travozom-light-beige">
              Experience India like never before with personalized itineraries and expert local guides.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <Button
              size="lg"
              className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/start-planning">
                Start Your Journey
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* AI Planning Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            How Our AI Crafts Your Perfect Trip
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full">
                <CardHeader>
                  <Sparkles className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                    Personalized Itineraries
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                    Our AI analyzes your interests, budget, and travel style to create a unique, tailor-made journey.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full">
                <CardHeader>
                  <MapPin className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                    Curated Destinations
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                    Discover hidden gems and iconic landmarks, perfectly matched to your preferences.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              viewport={{ once: true }}
            >
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full">
                <CardHeader>
                  <Users className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <CardTitle className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                    Expert Local Guides
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                    Connect with verified local experts who bring India's stories and culture to life.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Quick Plan Section */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-darker-brown transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Quick Trip Planner
          </h2>
          <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg p-6">
            <CardContent>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="destination" className="block text-sm font-medium mb-2">
                    Preferred Destination(s)
                  </label>
                  <Input
                    id="destination"
                    placeholder="e.g., Rajasthan, Kerala, Goa"
                    value={destination}
                    onChange={(e) => setDestination(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="travel-dates" className="block text-sm font-medium mb-2">
                    Approximate Travel Dates
                  </label>
                  <Input
                    id="travel-dates"
                    type="text"
                    placeholder="e.g., Nov 2025, Spring 2026"
                    value={dates}
                    onChange={(e) => setDates(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="travelers" className="block text-sm font-medium mb-2">
                    Number of Travelers
                  </label>
                  <Input
                    id="travelers"
                    type="number"
                    placeholder="2"
                    min="1"
                    value={travelers}
                    onChange={(e) => setTravelers(e.target.value)}
                  />
                </div>
                <div>
                  <label htmlFor="budget" className="block text-sm font-medium mb-2">
                    Budget per Person (approx.)
                  </label>
                  <Select value={budget} onValueChange={setBudget}>
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
                    rows={3}
                    value={interests}
                    onChange={(e) => setInterests(e.target.value)}
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

      {/* Featured Destinations Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Featured Destinations
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredDestinations.map((dest, index) => (
              <motion.div
                key={dest.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={dest.image || "/placeholder.svg"}
                      alt={dest.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/60 to-transparent" />
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      {dest.name}
                    </h3>
                    <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4">{dest.description}</p>
                    <Button
                      variant="outline"
                      className="w-full border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown bg-transparent"
                      asChild
                    >
                      <Link href={dest.link}>
                        Explore
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-travozom-deep-brown text-travozom-deep-brown hover:bg-travozom-deep-brown hover:text-white dark:border-travozom-cream dark:text-travozom-cream dark:hover:bg-travozom-cream dark:hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/destinations">
                View All Destinations
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-travozom-beige dark:bg-travozom-darker-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            What Our Travelers Say
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full flex flex-col justify-between">
                  <CardContent className="p-6">
                    <div className="flex justify-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 fill-travozom-gold text-travozom-gold" />
                      ))}
                    </div>
                    <p className="text-lg italic text-travozom-dark-beige dark:text-travozom-light-beige mb-4">
                      "{testimonial.quote}"
                    </p>
                    <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                      {testimonial.location}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Guides Section */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Meet Our Expert Guides
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02 }}
              >
                <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg h-full group">
                  <div className="relative h-48 overflow-hidden rounded-t-lg">
                    <Image
                      src={guide.image || "/placeholder.svg"}
                      alt={guide.name}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/60 to-transparent" />
                    <div className="absolute bottom-4 left-4 right-4 text-white flex items-center justify-between">
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                        <span className="font-semibold">{guide.rating}</span>
                        <span className="text-sm opacity-90">({guide.reviews})</span>
                      </div>
                      <div className="text-sm font-medium">{guide.location.split(",")[0]}</div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-2xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      {guide.name}
                    </h3>
                    <div className="flex flex-wrap gap-1 mb-4">
                      {guide.specialties.map((specialty, idx) => (
                        <Badge key={idx} className="bg-travozom-gold text-travozom-deep-brown text-xs">
                          {specialty}
                        </Badge>
                      ))}
                    </div>
                    <Button
                      variant="outline"
                      className="w-full border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown bg-transparent"
                      asChild
                    >
                      <Link href={`/meet-guides/${guide.id}`}>
                        View Profile
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="mt-10"
          >
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-travozom-deep-brown text-travozom-deep-brown hover:bg-travozom-deep-brown hover:text-white dark:border-travozom-cream dark:text-travozom-cream dark:hover:bg-travozom-cream dark:hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300 bg-transparent"
              asChild
            >
              <Link href="/meet-guides">
                Meet All Guides
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Ready to Start Your Indian Adventure?</h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Let Traozom craft a personalized, luxurious journey just for you.
          </p>
          <Button
            size="lg"
            className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/start-planning">
              Plan My Trip Now
              <ArrowRight className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
