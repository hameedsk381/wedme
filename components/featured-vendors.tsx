"use client"

import { useState, useEffect } from "react"
import { VendorCard } from "./vendor-card"

// Mock data for featured vendors
const mockFeaturedVendors = [
  {
    id: "1",
    name: "Elegant Gardens",
    category: "Venues",
    location: "New York",
    rating: 4.8,
    reviewCount: 124,
    imageUrl: "/placeholder.svg?height=200&width=300",
    featured: true,
    price: "$$$",
  },
  {
    id: "2",
    name: "Capture Moments",
    category: "Photographers",
    location: "Los Angeles",
    rating: 4.9,
    reviewCount: 89,
    imageUrl: "/placeholder.svg?height=200&width=300",
    featured: true,
    price: "$$",
  },
  {
    id: "3",
    name: "Delicious Catering",
    category: "Caterers",
    location: "Chicago",
    rating: 4.7,
    reviewCount: 156,
    imageUrl: "/placeholder.svg?height=200&width=300",
    featured: true,
    price: "$$",
  },
  {
    id: "4",
    name: "Floral Dreams",
    category: "Florists",
    location: "Miami",
    rating: 4.6,
    reviewCount: 78,
    imageUrl: "/placeholder.svg?height=200&width=300",
    featured: true,
    price: "$",
  },
]

export function FeaturedVendors() {
  const [savedVendors, setSavedVendors] = useState<string[]>([])

  // In a real app, this would fetch from an API or local storage
  useEffect(() => {
    // Simulate loading saved vendors from localStorage
    const saved = localStorage.getItem("savedVendors")
    if (saved) {
      setSavedVendors(JSON.parse(saved))
    }
  }, [])

  const handleSaveVendor = (id: string) => {
    setSavedVendors((prev) => {
      const newSaved = prev.includes(id) ? prev.filter((vendorId) => vendorId !== id) : [...prev, id]

      // In a real app, you would save to an API or localStorage
      localStorage.setItem("savedVendors", JSON.stringify(newSaved))
      return newSaved
    })
  }

  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight">Featured Vendors</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {mockFeaturedVendors.map((vendor) => (
            <VendorCard
              key={vendor.id}
              vendor={vendor}
              saved={savedVendors.includes(vendor.id)}
              onSave={handleSaveVendor}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

