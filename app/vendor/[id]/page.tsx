import Image from "next/image"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { StarRating } from "@/components/star-rating"
import { Gallery } from "@/components/gallery"
import { InquiryForm } from "@/components/inquiry-form"
import { Reviews } from "@/components/reviews"
import { Badge } from "@/components/ui/badge"
import { MapPin, Calendar, Clock, Phone, Mail, Globe, Heart, Share2 } from "lucide-react"

// Mock data for a vendor
const mockVendor = {
  id: "1",
  name: "Elegant Gardens",
  category: "Venues",
  description:
    "A beautiful garden venue perfect for outdoor ceremonies and receptions. Our venue offers stunning natural backdrops for your wedding photos and a spacious reception area that can accommodate up to 200 guests.",
  location: {
    address: "123 Wedding Lane",
    city: "New York",
    state: "NY",
    zip: "10001",
  },
  contact: {
    phone: "(555) 123-4567",
    email: "info@elegantgardens.com",
    website: "www.elegantgardens.com",
  },
  availability: {
    days: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
    hours: "9:00 AM - 11:00 PM",
  },
  pricing: {
    startingPrice: 5000,
    priceRange: "$$$",
    packages: [
      {
        name: "Basic Package",
        price: 5000,
        description: "Venue rental for 6 hours",
      },
      {
        name: "Premium Package",
        price: 8000,
        description: "Venue rental for 8 hours, includes basic decor",
      },
      {
        name: "Deluxe Package",
        price: 12000,
        description: "Venue rental for 10 hours, includes premium decor and coordination",
      },
    ],
  },
  rating: 4.8,
  reviewCount: 124,
  images: Array(6).fill("/placeholder.svg?height=600&width=800"),
  featured: true,
}

export default function VendorProfilePage({
  params,
}: {
  params: { id: string }
}) {
  // In a real app, you would fetch the vendor data based on the ID
  // If vendor not found, return 404
  if (params.id !== "1") {
    notFound()
  }

  return (
    <div className="container py-8">
      <div className="relative h-[300px] md:h-[400px] w-full mb-8 rounded-xl overflow-hidden">
        <Image src={mockVendor.images[0] || "/placeholder.svg"} alt={mockVendor.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">{mockVendor.name}</h1>
              <div className="flex items-center mt-2">
                <Badge variant="secondary" className="mr-2">
                  {mockVendor.category}
                </Badge>
                <div className="flex items-center">
                  <StarRating rating={mockVendor.rating} />
                  <span className="ml-2 text-sm">({mockVendor.reviewCount} reviews)</span>
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="icon" className="bg-background/80 hover:bg-background/90">
                <Heart className="h-5 w-5" />
                <span className="sr-only">Save vendor</span>
              </Button>
              <Button variant="outline" size="icon" className="bg-background/80 hover:bg-background/90">
                <Share2 className="h-5 w-5" />
                <span className="sr-only">Share vendor</span>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="grid gap-8 md:grid-cols-[2fr_1fr]">
        <div>
          <Tabs defaultValue="about">
            <TabsList className="mb-6">
              <TabsTrigger value="about">About</TabsTrigger>
              <TabsTrigger value="packages">Packages & Pricing</TabsTrigger>
              <TabsTrigger value="gallery">Gallery</TabsTrigger>
              <TabsTrigger value="reviews">Reviews</TabsTrigger>
            </TabsList>

            <TabsContent value="about" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">About {mockVendor.name}</h2>
                <p className="text-muted-foreground">{mockVendor.description}</p>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Location</h3>
                <div className="flex items-start">
                  <MapPin className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                  <div>
                    <p>{mockVendor.location.address}</p>
                    <p>
                      {mockVendor.location.city}, {mockVendor.location.state} {mockVendor.location.zip}
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Availability</h3>
                <div className="space-y-2">
                  <div className="flex items-start">
                    <Calendar className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p>Available: {mockVendor.availability.days.join(", ")}</p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <Clock className="h-5 w-5 mr-2 mt-0.5 text-muted-foreground" />
                    <div>
                      <p>Hours: {mockVendor.availability.hours}</p>
                    </div>
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-3">Contact Information</h3>
                <div className="space-y-2">
                  <div className="flex items-center">
                    <Phone className="h-5 w-5 mr-2 text-muted-foreground" />
                    <p>{mockVendor.contact.phone}</p>
                  </div>
                  <div className="flex items-center">
                    <Mail className="h-5 w-5 mr-2 text-muted-foreground" />
                    <p>{mockVendor.contact.email}</p>
                  </div>
                  <div className="flex items-center">
                    <Globe className="h-5 w-5 mr-2 text-muted-foreground" />
                    <p>{mockVendor.contact.website}</p>
                  </div>
                </div>
              </div>
            </TabsContent>

            <TabsContent value="packages" className="space-y-6">
              <div>
                <h2 className="text-2xl font-semibold mb-4">Packages & Pricing</h2>
                <p className="text-muted-foreground mb-6">
                  Starting at ${mockVendor.pricing.startingPrice} • {mockVendor.pricing.priceRange}
                </p>

                <div className="space-y-4">
                  {mockVendor.pricing.packages.map((pkg) => (
                    <div key={pkg.name} className="border rounded-lg p-4">
                      <div className="flex justify-between items-start">
                        <div>
                          <h3 className="font-semibold">{pkg.name}</h3>
                          <p className="text-muted-foreground">{pkg.description}</p>
                        </div>
                        <div className="text-right">
                          <p className="font-semibold">${pkg.price}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </TabsContent>

            <TabsContent value="gallery">
              <h2 className="text-2xl font-semibold mb-4">Gallery</h2>
              <Gallery images={mockVendor.images} />
            </TabsContent>

            <TabsContent value="reviews">
              <h2 className="text-2xl font-semibold mb-4">Reviews</h2>
              <Reviews vendorId={mockVendor.id} />
            </TabsContent>
          </Tabs>
        </div>

        <div>
          <div className="sticky top-24">
            <InquiryForm vendorId={mockVendor.id} vendorName={mockVendor.name} />
          </div>
        </div>
      </div>
    </div>
  )
}

