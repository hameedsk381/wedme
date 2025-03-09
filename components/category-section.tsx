import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"

const categories = [
  {
    name: "Venues",
    icon: "🏰",
    description: "Find the perfect location for your ceremony and reception",
    href: "/vendors?category=venues",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Photographers",
    icon: "📸",
    description: "Capture every special moment of your big day",
    href: "/vendors?category=photographers",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Caterers",
    icon: "🍽️",
    description: "Delight your guests with amazing food and drinks",
    href: "/vendors?category=caterers",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Florists",
    icon: "💐",
    description: "Beautiful floral arrangements for your wedding",
    href: "/vendors?category=florists",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "DJs & Musicians",
    icon: "🎵",
    description: "Set the mood with the perfect music",
    href: "/vendors?category=entertainment",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
  {
    name: "Wedding Planners",
    icon: "📋",
    description: "Expert help to plan your perfect day",
    href: "/vendors?category=planners",
    imageUrl: "/placeholder.svg?height=200&width=300",
  },
]

export function CategorySection() {
  return (
    <section className="py-12 bg-muted/50">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">Browse by Category</h2>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link key={category.name} href={category.href}>
              <Card className="overflow-hidden h-full transition-all hover:shadow-md">
                <div className="relative h-40 w-full">
                  <Image
                    src={category.imageUrl || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                  <div className="absolute bottom-4 left-4 right-4">
                    <h3 className="text-xl font-semibold flex items-center">
                      <span className="mr-2">{category.icon}</span>
                      {category.name}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-1">{category.description}</p>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}

