"use client"

import Image from "next/image"
import Link from "next/link"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Heart } from "lucide-react"
import { StarRating } from "./star-rating"

interface VendorCardProps {
  vendor: {
    id: string
    name: string
    category: string
    location: string
    rating: number
    reviewCount: number
    imageUrl: string
    featured?: boolean
    price?: string
  }
  saved?: boolean
  onSave?: (id: string) => void
}

export function VendorCard({ vendor, saved = false, onSave }: VendorCardProps) {
  return (
    <Card className="overflow-hidden transition-all hover:shadow-md">
      <div className="relative h-48 w-full">
        <Image
          src={vendor.imageUrl || "/placeholder.svg?height=200&width=300"}
          alt={vendor.name}
          fill
          className="object-cover"
        />
        {vendor.featured && (
          <Badge className="absolute left-2 top-2" variant="secondary">
            Featured
          </Badge>
        )}
        {onSave && (
          <Button
            variant="ghost"
            size="icon"
            className="absolute right-2 top-2 bg-background/80 hover:bg-background/90"
            onClick={() => onSave(vendor.id)}
          >
            <Heart className={`h-5 w-5 ${saved ? "fill-red-500 text-red-500" : ""}`} />
            <span className="sr-only">Save vendor</span>
          </Button>
        )}
      </div>
      <CardContent className="p-4">
        <div className="flex items-start justify-between">
          <div>
            <h3 className="font-semibold">{vendor.name}</h3>
            <p className="text-sm text-muted-foreground">
              {vendor.category} • {vendor.location}
            </p>
          </div>
          {vendor.price && (
            <Badge variant="outline" className="ml-2">
              {vendor.price}
            </Badge>
          )}
        </div>
        <div className="mt-2 flex items-center">
          <StarRating rating={vendor.rating} />
          <span className="ml-2 text-sm text-muted-foreground">({vendor.reviewCount})</span>
        </div>
      </CardContent>
      <CardFooter className="p-4 pt-0">
        <Link href={`/vendor/${vendor.id}`} className="w-full">
          <Button variant="outline" className="w-full">
            View Profile
          </Button>
        </Link>
      </CardFooter>
    </Card>
  )
}

