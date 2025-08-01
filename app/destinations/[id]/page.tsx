import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Users, Star, ArrowLeft, ArrowRight } from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { notFound } from "next/navigation"

const destinations = {
  rajasthan: {
    id: "rajasthan",
    name: "Rajasthan",
    tagline: "Land of Kings, Forts & Deserts",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Rajasthan, the 'Land of Kings', is a vibrant state in northern India known for its rich history, magnificent palaces, ancient forts, and colorful culture. From the pink city of Jaipur to the blue city of Jodhpur, every corner tells a story of royal heritage.",
    highlights: ["Jaipur's Amber Fort", "Udaipur's Lake Pichola", "Jodhpur's Mehrangarh Fort", "Thar Desert Safaris"],
    bestTime: "October to March",
    duration: "7-14 days",
    difficulty: "Easy to Moderate",
    priceRange: "₹3,000 - ₹8,000 per day",
    activities: ["Palace Tours", "Desert Safaris", "Cultural Shows", "Shopping", "Photography"],
    guides: [
      {
        name: "Rajesh Kumar",
        rating: 4.9,
        reviews: 127,
        specialties: ["Heritage Tours", "Photography"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Priya Singh",
        rating: 4.8,
        reviews: 89,
        specialties: ["Cultural Tours", "Food Tours"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      }
    ]
  },
  kerala: {
    id: "kerala",
    name: "Kerala",
    tagline: "God's Own Country: Backwaters & Beaches",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Kerala, often called 'God's Own Country', is a tropical paradise in southern India. Known for its serene backwaters, pristine beaches, lush tea plantations, and traditional Ayurvedic practices.",
    highlights: ["Alleppey Houseboats", "Kochi's Chinese Fishing Nets", "Munnar Tea Plantations", "Ayurveda Retreats"],
    bestTime: "September to March",
    duration: "5-10 days",
    difficulty: "Easy",
    priceRange: "₹2,500 - ₹6,000 per day",
    activities: ["Backwater Cruises", "Tea Estate Tours", "Ayurveda Treatments", "Beach Activities", "Spice Tours"],
    guides: [
      {
        name: "Priya Nair",
        rating: 4.8,
        reviews: 89,
        specialties: ["Backwater Tours", "Ayurveda"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Vikram Menon",
        rating: 4.7,
        reviews: 156,
        specialties: ["Tea Plantations", "Wildlife Tours"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
      }
    ]
  },
  goa: {
    id: "goa",
    name: "Goa",
    tagline: "Beaches, Parties & Portuguese Charm",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Goa, India's smallest state, is famous for its stunning beaches, vibrant nightlife, and rich Portuguese heritage. A perfect blend of relaxation and excitement, offering something for every type of traveler.",
    highlights: ["Palolem Beach", "Anjuna Flea Market", "Old Goa Churches", "Spice Plantations"],
    bestTime: "November to March",
    duration: "5-8 days",
    difficulty: "Easy",
    priceRange: "₹2,000 - ₹5,000 per day",
    activities: ["Beach Activities", "Water Sports", "Church Tours", "Nightlife", "Spice Tours"],
    guides: [
      {
        name: "Maria Fernandes",
        rating: 4.9,
        reviews: 203,
        specialties: ["Beach Tours", "Cultural Heritage"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Carlos Rodrigues",
        rating: 4.7,
        reviews: 134,
        specialties: ["Adventure Sports", "Food Tours"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
      }
    ]
  },
  "himachal-pradesh": {
    id: "himachal-pradesh",
    name: "Himachal Pradesh",
    tagline: "Himalayan Adventures & Serene Valleys",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Himachal Pradesh, nestled in the western Himalayas, offers breathtaking mountain landscapes, picturesque valleys, and spiritual retreats. Perfect for adventure seekers and nature lovers.",
    highlights: ["Manali & Solang Valley", "Shimla's Colonial Charm", "Dharamshala & McLeod Ganj", "Spiti Valley"],
    bestTime: "March to June, September to November",
    duration: "7-15 days",
    difficulty: "Moderate to Difficult",
    priceRange: "₹2,500 - ₹7,000 per day",
    activities: ["Trekking", "Adventure Sports", "Temple Visits", "Photography", "Meditation Retreats"],
    guides: [
      {
        name: "Vikram Thakur",
        rating: 4.9,
        reviews: 203,
        specialties: ["Mountain Trekking", "Adventure Sports"],
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Anjali Sharma",
        rating: 4.8,
        reviews: 167,
        specialties: ["Spiritual Tours", "Photography"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      }
    ]
  },
  delhi: {
    id: "delhi",
    name: "Delhi",
    tagline: "Historic Capital & Culinary Delights",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Delhi, India's capital, is a city where ancient history meets modern vibrancy. From iconic monuments to bustling markets and diverse culinary scene, Delhi offers a complete Indian experience.",
    highlights: ["India Gate & Red Fort", "Qutub Minar", "Chandni Chowk Street Food", "Humayun's Tomb"],
    bestTime: "October to March",
    duration: "3-5 days",
    difficulty: "Easy",
    priceRange: "₹2,000 - ₹5,000 per day",
    activities: ["Historical Tours", "Food Tours", "Shopping", "Cultural Shows", "Photography"],
    guides: [
      {
        name: "Rahul Gupta",
        rating: 4.8,
        reviews: 145,
        specialties: ["Historical Tours", "Food Tours"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Meera Patel",
        rating: 4.7,
        reviews: 98,
        specialties: ["Cultural Tours", "Shopping"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      }
    ]
  },
  agra: {
    id: "agra",
    name: "Agra",
    tagline: "Home of the Taj Mahal",
    image: "/placeholder.svg?height=600&width=1200",
    description:
      "Agra, home to the iconic Taj Mahal, is a city steeped in Mughal history. Witness the timeless beauty of this UNESCO World Heritage site and explore other architectural marvels.",
    highlights: ["Taj Mahal", "Agra Fort", "Fatehpur Sikri", "Itmad-ud-Daulah's Tomb"],
    bestTime: "October to March",
    duration: "2-3 days",
    difficulty: "Easy",
    priceRange: "₹2,500 - ₹6,000 per day",
    activities: ["Monument Tours", "Photography", "Cultural Shows", "Shopping", "Food Tours"],
    guides: [
      {
        name: "Amit Kumar",
        rating: 4.9,
        reviews: 234,
        specialties: ["Historical Tours", "Photography"],
        image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face"
      },
      {
        name: "Fatima Khan",
        rating: 4.8,
        reviews: 178,
        specialties: ["Cultural Tours", "Food Tours"],
        image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face"
      }
    ]
  }
}

export default function DestinationPage({ params }: { params: { id: string } }) {
  const destination = destinations[params.id as keyof typeof destinations]

  if (!destination) {
    notFound()
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

      {/* Hero Section */}
      <section className="relative h-96 flex items-center justify-center overflow-hidden mt-16">
        <Image src={destination.image} alt={destination.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-travozom-deep-brown/70 dark:bg-black/80" />
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-serif text-white mb-4">{destination.name}</h1>
          <p className="text-xl text-travozom-light-beige">{destination.tagline}</p>
        </div>
      </section>

      {/* Back Button */}
      <section className="py-4 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold">
            <Link href="/destinations">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Destinations
            </Link>
          </Button>
        </div>
      </section>

      {/* Destination Details */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              <h2 className="text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-6">
                About {destination.name}
              </h2>
              <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige mb-8 leading-relaxed">
                {destination.description}
              </p>

              <h3 className="text-2xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Highlights
              </h3>
              <ul className="list-disc list-inside text-travozom-dark-beige dark:text-travozom-light-beige mb-8 space-y-2">
                {destination.highlights.map((highlight, idx) => (
                  <li key={idx} className="text-lg">{highlight}</li>
                ))}
              </ul>

              <h3 className="text-2xl font-serif text-travozom-deep-brown dark:text-travozom-cream mb-4">
                Popular Activities
              </h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {destination.activities.map((activity, idx) => (
                  <Badge key={idx} className="bg-travozom-gold text-travozom-deep-brown">
                    {activity}
                  </Badge>
                ))}
              </div>
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Quick Info */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                    Quick Info
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <Calendar className="w-5 h-5 text-travozom-gold" />
                    <div>
                      <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">Best Time</p>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">{destination.bestTime}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <MapPin className="w-5 h-5 text-travozom-gold" />
                    <div>
                      <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">Duration</p>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">{destination.duration}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Users className="w-5 h-5 text-travozom-gold" />
                    <div>
                      <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">Difficulty</p>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">{destination.difficulty}</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Star className="w-5 h-5 text-travozom-gold" />
                    <div>
                      <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">Price Range</p>
                      <p className="text-travozom-dark-beige dark:text-travozom-light-beige">{destination.priceRange}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Available Guides */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                    Available Guides
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {destination.guides.map((guide, idx) => (
                    <div key={idx} className="flex items-center space-x-3 p-3 rounded-lg bg-travozom-beige dark:bg-travozom-darker-brown">
                      <Image
                        src={guide.image}
                        alt={guide.name}
                        width={50}
                        height={50}
                        className="rounded-full"
                      />
                      <div className="flex-1">
                        <p className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">{guide.name}</p>
                        <div className="flex items-center space-x-1">
                          <Star className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                          <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                            {guide.rating} ({guide.reviews} reviews)
                          </span>
                        </div>
                        <div className="flex flex-wrap gap-1 mt-1">
                          {guide.specialties.map((specialty, specialtyIdx) => (
                            <Badge key={specialtyIdx} variant="outline" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-travozom-deep-brown to-travozom-dark-beige text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-serif text-white mb-6">
            Ready to Explore {destination.name}?
          </h2>
          <p className="text-xl text-travozom-light-beige mb-8">
            Let our AI create a personalized itinerary for your perfect {destination.name} adventure.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transform hover:scale-105 transition-all duration-300"
              asChild
            >
              <Link href="/start-planning">
                Start Planning
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-travozom-deep-brown px-8 py-4 text-lg font-semibold rounded-xl transition-all duration-300"
              asChild
            >
              <Link href="/meet-guides">
                Meet Our Guides
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
} 