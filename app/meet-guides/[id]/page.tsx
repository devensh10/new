import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { 
  Star, 
  MapPin, 
  Users, 
  MessageCircle, 
  Award, 
  Languages, 
  Calendar,
  Clock,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Heart,
  Phone,
  Mail,
  Globe
} from "lucide-react"
import { AnimatedLogo } from "@/components/animated-logo"
import { ThemeToggle } from "@/components/theme-toggle"
import { notFound } from "next/navigation"

const guides = {
  "rajesh-jaipur": {
    id: "rajesh-jaipur",
    name: "Rajesh Kumar",
    location: "Jaipur, Rajasthan",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 127,
    experience: "8 years",
    languages: ["Hindi", "English", "Rajasthani"],
    specialties: ["Heritage Tours", "Photography", "Local Cuisine"],
    price: "₹2,500/day",
    verified: true,
    description:
      "Born and raised in the Pink City, I know every hidden gem and royal secret. Let me show you Jaipur through the eyes of a local.",
    highlights: [
      "Expert in Rajput history and architecture",
      "Professional photography guidance",
      "Access to private palace areas",
      "Traditional cooking class arrangements",
    ],
    availability: "Available",
    responseTime: "Within 2 hours",
    phone: "+91 98765 43210",
    email: "rajesh.kumar@traozom.com",
    website: "www.rajeshguides.com",
    education: "Masters in History, University of Rajasthan",
    certifications: ["Certified Tour Guide", "Photography Expert", "Food Safety Certified"],
    reviews: [
      {
        name: "Sarah L.",
        rating: 5,
        date: "2 weeks ago",
        comment: "Rajesh made our Jaipur experience magical! His knowledge of the city's history is incredible."
      },
      {
        name: "David M.",
        rating: 5,
        date: "1 month ago",
        comment: "The photography tips he gave us were invaluable. We got amazing shots at Amber Fort!"
      },
      {
        name: "Priya S.",
        rating: 4,
        date: "3 weeks ago",
        comment: "Great guide, very knowledgeable about local culture and history."
      }
    ]
  },
  "priya-kerala": {
    id: "priya-kerala",
    name: "Priya Nair",
    location: "Kochi, Kerala",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=300&h=300&fit=crop&crop=face",
    rating: 4.8,
    reviews: 89,
    experience: "6 years",
    languages: ["Malayalam", "English", "Tamil"],
    specialties: ["Backwater Tours", "Ayurveda", "Spice Gardens"],
    price: "₹2,200/day",
    verified: true,
    description:
      "Kerala's backwaters are my playground. I'll take you on authentic houseboat journeys and introduce you to traditional Ayurvedic practices.",
    highlights: [
      "Certified Ayurveda practitioner",
      "Exclusive houseboat connections",
      "Organic spice farm tours",
      "Traditional Kerala cooking",
    ],
    availability: "Available",
    responseTime: "Within 1 hour",
    phone: "+91 98765 43211",
    email: "priya.nair@traozom.com",
    website: "www.priyakerala.com",
    education: "Bachelors in Tourism, Kerala University",
    certifications: ["Certified Ayurveda Practitioner", "Houseboat Guide", "Spice Tour Expert"],
    reviews: [
      {
        name: "John D.",
        rating: 5,
        date: "1 week ago",
        comment: "Priya's backwater tour was the highlight of our Kerala trip. So peaceful and authentic!"
      },
      {
        name: "Maria F.",
        rating: 5,
        date: "2 weeks ago",
        comment: "The Ayurveda session she arranged was life-changing. Highly recommend!"
      }
    ]
  },
  "vikram-himachal": {
    id: "vikram-himachal",
    name: "Vikram Thakur",
    location: "Manali, Himachal Pradesh",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&h=300&fit=crop&crop=face",
    rating: 4.9,
    reviews: 203,
    experience: "12 years",
    languages: ["Hindi", "English", "Pahari"],
    specialties: ["Mountain Trekking", "Adventure Sports", "Wildlife"],
    price: "₹3,200/day",
    verified: true,
    description:
      "The Himalayas are my home. From gentle nature walks to challenging treks, I'll help you experience the mountains safely and authentically.",
    highlights: [
      "Certified mountain guide",
      "Wildlife photography expert",
      "High-altitude trekking specialist",
      "Local tribal culture knowledge",
    ],
    availability: "Available",
    responseTime: "Within 6 hours",
    phone: "+91 98765 43212",
    email: "vikram.thakur@traozom.com",
    website: "www.vikramtreks.com",
    education: "Masters in Environmental Science, Himachal University",
    certifications: ["Certified Mountain Guide", "Wildlife Photography Expert", "First Aid Certified"],
    reviews: [
      {
        name: "Alex K.",
        rating: 5,
        date: "3 days ago",
        comment: "Vikram's knowledge of the mountains is incredible. Our trek was perfectly planned!"
      },
      {
        name: "Lisa P.",
        rating: 5,
        date: "1 week ago",
        comment: "Amazing wildlife photography tips. We saw snow leopards thanks to his expertise!"
      }
    ]
  }
}

export default function GuideProfilePage({ params }: { params: { id: string } }) {
  const guide = guides[params.id as keyof typeof guides]

  if (!guide) {
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

      {/* Back Button */}
      <section className="py-4 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Button variant="ghost" asChild className="text-travozom-deep-brown dark:text-travozom-cream hover:text-travozom-gold">
            <Link href="/meet-guides">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Guides
            </Link>
          </Button>
        </div>
      </section>

      {/* Guide Profile */}
      <section className="py-16 bg-travozom-cream dark:bg-travozom-deep-brown transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Guide Header */}
              <div className="bg-white dark:bg-travozom-deep-brown/50 rounded-lg shadow-lg p-6 mb-8">
                <div className="flex flex-col md:flex-row items-start md:items-center space-y-4 md:space-y-0 md:space-x-6">
                  <Image
                    src={guide.image}
                    alt={guide.name}
                    width={120}
                    height={120}
                    className="rounded-full"
                  />
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h1 className="text-3xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                        {guide.name}
                      </h1>
                      {guide.verified && (
                        <Badge className="bg-travozom-gold text-travozom-deep-brown">
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Verified
                        </Badge>
                      )}
                    </div>
                    <div className="flex items-center space-x-4 text-travozom-dark-beige dark:text-travozom-light-beige mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="w-4 h-4" />
                        <span>{guide.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                        <span>{guide.rating} ({guide.reviews} reviews)</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Users className="w-4 h-4" />
                        <span>{guide.experience} experience</span>
                      </div>
                    </div>
                    <p className="text-lg text-travozom-dark-beige dark:text-travozom-light-beige">
                      {guide.description}
                    </p>
                  </div>
                </div>
              </div>

              {/* Specialties */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream flex items-center">
                    <Award className="w-5 h-5 mr-2 text-travozom-gold" />
                    Specialties
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {guide.specialties.map((specialty, idx) => (
                      <Badge key={idx} className="bg-travozom-gold text-travozom-deep-brown">
                        {specialty}
                      </Badge>
                    ))}
                  </div>
                  <div className="space-y-3">
                    {guide.highlights.map((highlight, idx) => (
                      <div key={idx} className="flex items-start space-x-2">
                        <CheckCircle className="w-4 h-4 text-travozom-gold mt-0.5 flex-shrink-0" />
                        <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{highlight}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Languages */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg mb-8">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream flex items-center">
                    <Languages className="w-5 h-5 mr-2 text-travozom-gold" />
                    Languages
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {guide.languages.map((language, idx) => (
                      <Badge key={idx} variant="outline" className="border-travozom-gold text-travozom-gold">
                        {language}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Reviews */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                    Recent Reviews
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {guide.reviews.map((review, idx) => (
                      <div key={idx} className="border-b border-travozom-dark-beige/20 pb-4 last:border-b-0">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <span className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">
                              {review.name}
                            </span>
                            <div className="flex items-center space-x-1">
                              {[...Array(review.rating)].map((_, i) => (
                                <Star key={i} className="w-4 h-4 fill-travozom-gold text-travozom-gold" />
                              ))}
                            </div>
                          </div>
                          <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">
                            {review.date}
                          </span>
                        </div>
                        <p className="text-travozom-dark-beige dark:text-travozom-light-beige">
                          {review.comment}
                        </p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
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
                  <div className="flex items-center justify-between">
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Price</span>
                    <span className="font-semibold text-travozom-deep-brown dark:text-travozom-cream">{guide.price}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Availability</span>
                    <Badge className={guide.availability === "Available" ? "bg-green-500" : "bg-yellow-500"}>
                      {guide.availability}
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">Response Time</span>
                    <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">{guide.responseTime}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-travozom-gold" />
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{guide.phone}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-travozom-gold" />
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{guide.email}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Globe className="w-4 h-4 text-travozom-gold" />
                    <span className="text-travozom-dark-beige dark:text-travozom-light-beige">{guide.website}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Education & Certifications */}
              <Card className="bg-white dark:bg-travozom-deep-brown/50 border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-xl font-serif text-travozom-deep-brown dark:text-travozom-cream">
                    Education & Certifications
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">Education</h4>
                    <p className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">{guide.education}</p>
                  </div>
                  <div>
                    <h4 className="font-semibold text-travozom-deep-brown dark:text-travozom-cream mb-2">Certifications</h4>
                    <div className="space-y-1">
                      {guide.certifications.map((cert, idx) => (
                        <div key={idx} className="flex items-center space-x-2">
                          <CheckCircle className="w-3 h-3 text-travozom-gold" />
                          <span className="text-sm text-travozom-dark-beige dark:text-travozom-light-beige">{cert}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <div className="space-y-3">
                <Button className="w-full bg-travozom-gold hover:bg-travozom-dark-gold text-travozom-deep-brown">
                  Book This Guide
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button variant="outline" className="w-full border-travozom-gold text-travozom-gold hover:bg-travozom-gold hover:text-travozom-deep-brown">
                  <Heart className="w-4 h-4 mr-2" />
                  Save to Favorites
                </Button>
                <Button variant="outline" className="w-full border-travozom-deep-brown text-travozom-deep-brown hover:bg-travozom-deep-brown hover:text-white dark:border-travozom-cream dark:text-travozom-cream dark:hover:bg-travozom-cream dark:hover:text-travozom-deep-brown">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Send Message
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 