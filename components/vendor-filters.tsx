"use client"

import { useState } from "react"
import { useRouter, useSearchParams } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Slider } from "@/components/ui/slider"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function VendorFilters() {
  const router = useRouter()
  const searchParams = useSearchParams()

  // Get current filter values from URL
  const currentCategory = searchParams.get("category") || ""
  const currentLocation = searchParams.get("location") || ""
  const currentPriceRange = searchParams.getAll("price") || []

  // Local state for filters
  const [categories, setCategories] = useState<string[]>(currentCategory ? [currentCategory] : [])
  const [locations, setLocations] = useState<string[]>(currentLocation ? [currentLocation] : [])
  const [priceRange, setPriceRange] = useState<string[]>(currentPriceRange)
  const [rating, setRating] = useState<number[]>([0])

  const applyFilters = () => {
    const params = new URLSearchParams(searchParams)

    // Reset page when filters change
    params.delete("page")

    // Apply category filter
    if (categories.length > 0) {
      params.set("category", categories[0])
    } else {
      params.delete("category")
    }

    // Apply location filter
    if (locations.length > 0) {
      params.set("location", locations[0])
    } else {
      params.delete("location")
    }

    // Apply price filter
    params.delete("price")
    priceRange.forEach((price) => {
      params.append("price", price)
    })

    // Apply rating filter
    if (rating[0] > 0) {
      params.set("rating", rating[0].toString())
    } else {
      params.delete("rating")
    }

    router.push(`/vendors?${params.toString()}`)
  }

  const resetFilters = () => {
    setCategories([])
    setLocations([])
    setPriceRange([])
    setRating([0])
    router.push("/vendors")
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-lg font-semibold">Filters</h2>
        <Button variant="ghost" size="sm" onClick={resetFilters}>
          Reset
        </Button>
      </div>

      <Accordion type="multiple" defaultValue={["categories", "locations", "price", "rating"]}>
        <AccordionItem value="categories">
          <AccordionTrigger>Categories</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["Venues", "Photographers", "Caterers", "Florists", "DJs & Musicians"].map((category) => (
                <div key={category} className="flex items-center space-x-2">
                  <Checkbox
                    id={`category-${category}`}
                    checked={categories.includes(category.toLowerCase())}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setCategories([category.toLowerCase()])
                      } else {
                        setCategories(categories.filter((c) => c !== category.toLowerCase()))
                      }
                    }}
                  />
                  <Label htmlFor={`category-${category}`}>{category}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="locations">
          <AccordionTrigger>Locations</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["New York", "Los Angeles", "Chicago", "Miami", "Dallas"].map((location) => (
                <div key={location} className="flex items-center space-x-2">
                  <Checkbox
                    id={`location-${location}`}
                    checked={locations.includes(location.toLowerCase())}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setLocations([location.toLowerCase()])
                      } else {
                        setLocations(locations.filter((l) => l !== location.toLowerCase()))
                      }
                    }}
                  />
                  <Label htmlFor={`location-${location}`}>{location}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="price">
          <AccordionTrigger>Price Range</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              {["$", "$$", "$$$"].map((price) => (
                <div key={price} className="flex items-center space-x-2">
                  <Checkbox
                    id={`price-${price}`}
                    checked={priceRange.includes(price)}
                    onCheckedChange={(checked) => {
                      if (checked) {
                        setPriceRange([...priceRange, price])
                      } else {
                        setPriceRange(priceRange.filter((p) => p !== price))
                      }
                    }}
                  />
                  <Label htmlFor={`price-${price}`}>{price}</Label>
                </div>
              ))}
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="rating">
          <AccordionTrigger>Rating</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-4">
              <Slider defaultValue={[0]} max={5} step={1} value={rating} onValueChange={setRating} />
              <div className="flex justify-between text-xs">
                <span>Any</span>
                <span>5 Stars</span>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Button onClick={applyFilters} className="w-full">
        Apply Filters
      </Button>
    </div>
  )
}

