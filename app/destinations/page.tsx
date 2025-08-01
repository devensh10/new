import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"

const destinations = [
  {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings, Forts & Deserts",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Explore majestic palaces, ancient forts, and vibrant cities like Jaipur, Udaipur, and Jodhpur. Experience the rich history and cultural heritage of India's desert state.",
    highlights: ["Jaipur's Amber Fort", "Udaipur's Lake Pichola", "Jodhpur's Mehrangarh Fort", "Thar Desert Safaris"],
  },
  {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country: Backwaters & Beaches",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Relax in the serene backwaters, stroll along pristine beaches, and immerse yourself in Ayurvedic traditions. Kerala offers a tranquil escape amidst lush greenery.",
    highlights: ["Alleppey Houseboats", "Kochi's Chinese Fishing Nets", "Munnar Tea Plantations", "Ayurveda Retreats"],
  },
  {
    id: "goa",
    name: "Goa",
    tagline: "Beaches, Parties & Portuguese Charm",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Famous for its stunning beaches, vibrant nightlife, and rich Portuguese heritage. Goa is a perfect blend of relaxation and excitement.",
    highlights: ["Palolem Beach", "Anjuna Flea Market", "Old Goa Churches", "Spice Plantations"],
  },
  {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    tagline: "Himalayan Adventures & Serene Valleys",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Discover the majestic Himalayas, picturesque valleys, and spiritual retreats. Ideal for trekking, adventure sports, and peaceful getaways.",
    highlights: ["Manali & Solang Valley", "Shimla's Colonial Charm", "Dharamshala & McLeod Ganj", "Spiti Valley"],
  },
  {
    id: "delhi",
    name: "Delhi",
    tagline: "Historic Capital & Culinary Delights",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "A city where ancient history meets modern vibrancy. Explore iconic monuments, bustling markets, and a diverse culinary scene.",
    highlights: ["India Gate & Red Fort", "Qutub Minar", "Chandni Chowk Street Food", "Humayun's Tomb"],
  },
  {
    id: "agra",
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    image: "/placeholder.svg?height=400&width=600",
    description:
      "Witness the timeless beauty of the Taj Mahal, a UNESCO World Heritage site and one of the New Seven Wonders of the World. Explore other Mughal-era marvels.",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itmad-ud-Daulah's Tomb"],
  },
]

export default function DestinationsPage() {
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
        <Image src="/placeholder.svg?height=600&width=1200" alt="Explore Destinations" fill className="object-cover" />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">Explore India's Wonders</h1>
          <p className="text-xl text-travozom-light-beige">
            From ancient wonders to serene landscapes, discover your next adventure.
          </p>
        </div>
      </section>

      {/* Destinations Grid */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-serif text-center text-travozom-deep-brown dark:text-travozom-cream mb-10">
            Popular Destinations
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {destinations.map((destination) => (
              <Card
                key={destination.id}
                className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative h-64 overflow-hidden rounded-t-lg">
                  <Image
                    src={destination.image || "/placeholder.svg"}
                    alt={destination.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-travozom-deep-brown/60 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <h3 className="text-3xl font-serif font-bold mb-1">{destination.name}</h3>
                    <p className="text-lg text-travozom-light-beige">{destination.tagline}</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p className="text-travozom-dark-beige dark:text-travozom-light-beige mb-4 line-clamp-3">
                    {destination.description}
                  </p>
                  <div className="mb-4">
                    <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">
                      Highlights:
                    </h4>
                    <ul className="list-disc list-inside text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                      {destination.highlights.map((highlight, idx) => (
                        <li key={idx}>{highlight}</li>
                      ))}
                    </ul>
                  </div>
                  <Button
                    variant="outline"
                    className="w-full border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown bg-transparent"
                    asChild
                  >
                    <Link href={`/destinations/${destination.id}`}>
                      Learn More
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">Can't Find Your Dream Destination?</h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Our AI Trip Planner can create a custom itinerary for any destination in India.
          </p>
          <Button
            size="lg"
            className="bg-travozom-gold hover:bg-yellow-600 text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
            asChild
          >
            <Link href="/planner">
              Start Planning Now
              <MapPin className="ml-2 w-5 h-5" />
            </Link>
          </Button>
        </div>
      </section>
    </div>
  )
}
