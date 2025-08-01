"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Calendar, 
  MapPin, 
  Users, 
  Star, 
  ArrowRight, 
  Clock,
  CheckCircle,
  XCircle,
  AlertCircle
} from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { useAuth } from "@/components/auth-provider"

export default function DashboardPage() {
  const { user } = useAuth()

  // Mock data for dashboard
  const upcomingTrips = [
    {
      id: "1",
      destination: "Rajasthan",
      dates: "Nov 15-22, 2025",
      status: "confirmed",
      travelers: 2,
      guide: "Rajesh Kumar",
      rating: 4.9
    },
    {
      id: "2", 
      destination: "Kerala",
      dates: "Dec 10-17, 2025",
      status: "pending",
      travelers: 3,
      guide: "Priya Nair",
      rating: 4.8
    }
  ]

  const pastTrips = [
    {
      id: "3",
      destination: "Goa",
      dates: "Mar 5-12, 2025",
      status: "completed",
      travelers: 2,
      guide: "Maya Fernandes",
      rating: 4.7
    }
  ]

  const getStatusBadge = (status: string) => {
    switch (status) {
      case "confirmed":
        return <Badge className="bg-green-500 text-white"><CheckCircle className="w-3 h-3 mr-1" />Confirmed</Badge>
      case "pending":
        return <Badge className="bg-yellow-500 text-travozom-deep-brown"><Clock className="w-3 h-3 mr-1" />Pending</Badge>
      case "completed":
        return <Badge className="bg-blue-500 text-white"><CheckCircle className="w-3 h-3 mr-1" />Completed</Badge>
      default:
        return <Badge className="bg-gray-500 text-white"><AlertCircle className="w-3 h-3 mr-1" />Unknown</Badge>
    }
  }

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

      {/* Dashboard Content */}
      <div className="pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Welcome Section */}
          <section className="mb-12">
            <div className="bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige rounded-lg p-8 text-white">
              <h1 className="text-4xl font-serif mb-4">
                Welcome back, {user?.name || "Traveler"}!
              </h1>
              <p className="text-xl text-travozom-light-beige">
                Your next adventure awaits. Here's what's happening with your trips.
              </p>
            </div>
          </section>

          {/* Quick Stats */}
          <section className="mb-12">
            <div className="grid md:grid-cols-4 gap-6">
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">Upcoming Trips</p>
                      <p className="text-3xl font-bold text-travozom-deep-brown dark:text-travozom-cream">{upcomingTrips.length}</p>
                    </div>
                    <Calendar className="w-8 h-8 text-travozom-gold" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">Past Trips</p>
                      <p className="text-3xl font-bold text-travozom-deep-brown dark:text-travozom-cream">{pastTrips.length}</p>
                    </div>
                    <MapPin className="w-8 h-8 text-travozom-gold" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">Total Travelers</p>
                      <p className="text-3xl font-bold text-travozom-deep-brown dark:text-travozom-cream">
                        {upcomingTrips.reduce((sum, trip) => sum + trip.travelers, 0)}
                      </p>
                    </div>
                    <Users className="w-8 h-8 text-travozom-gold" />
                  </div>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">Avg. Guide Rating</p>
                      <p className="text-3xl font-bold text-travozom-deep-brown dark:text-travozom-cream">4.8</p>
                    </div>
                    <Star className="w-8 h-8 text-travozom-gold" />
                  </div>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Upcoming Trips */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                Upcoming Trips
              </h2>
              <Button variant="outline" className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {upcomingTrips.map((trip) => (
                <Card key={trip.id} className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                        {trip.destination}
                      </h3>
                      {getStatusBadge(trip.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{trip.dates}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{trip.travelers} travelers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Guide: {trip.guide}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Rating: {trip.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown">
                        Contact Guide
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Past Trips */}
          <section className="mb-12">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                Past Trips
              </h2>
              <Button variant="outline" className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown">
                View All
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {pastTrips.map((trip) => (
                <Card key={trip.id} className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                        {trip.destination}
                      </h3>
                      {getStatusBadge(trip.status)}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center space-x-2">
                        <Calendar className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{trip.dates}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Users className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{trip.travelers} travelers</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <MapPin className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Guide: {trip.guide}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Star className="w-4 h-4 text-travozom-gold" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Rating: {trip.rating}</span>
                      </div>
                    </div>
                    <div className="mt-4 flex space-x-2">
                      <Button size="sm" className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown">
                        View Details
                      </Button>
                      <Button size="sm" variant="outline" className="border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown">
                        Write Review
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Quick Actions */}
          <section>
            <h2 className="text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-6">
              Quick Actions
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <MapPin className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                    Plan New Trip
                  </h3>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4">
                    Start planning your next adventure with our AI-powered trip planner.
                  </p>
                  <Button className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown w-full">
                    Start Planning
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Users className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                    Meet Guides
                  </h3>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4">
                    Connect with our verified local guides for authentic experiences.
                  </p>
                  <Button className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown w-full">
                    Browse Guides
                  </Button>
                </CardContent>
              </Card>
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                <CardContent className="p-6 text-center">
                  <Star className="w-12 h-12 text-travozom-gold mx-auto mb-4" />
                  <h3 className="text-xl font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                    Write Reviews
                  </h3>
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4">
                    Share your travel experiences and help other travelers.
                  </p>
                  <Button className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown w-full">
                    Write Review
                  </Button>
                </CardContent>
              </Card>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
} 