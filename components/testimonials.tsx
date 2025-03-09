import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { StarRating } from "./star-rating"

const testimonials = [
  {
    id: "1",
    name: "Sarah & Michael",
    location: "New York",
    quote:
      "WedMe made finding our dream venue so easy! We were able to compare options and book everything in one place.",
    rating: 5,
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "2",
    name: "Jessica & David",
    location: "Los Angeles",
    quote:
      "Thanks to WedMe, we found an amazing photographer who captured our special day perfectly. The platform was so intuitive to use!",
    rating: 5,
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
  {
    id: "3",
    name: "Emily & James",
    location: "Chicago",
    quote:
      "As a busy couple, we appreciated how WedMe streamlined our wedding planning process. Highly recommend to all engaged couples!",
    rating: 4.5,
    imageUrl: "/placeholder.svg?height=100&width=100",
  },
]

export function Testimonials() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-center">What Couples Say</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="h-full">
              <CardContent className="p-6 flex flex-col h-full">
                <div className="mb-4">
                  <StarRating rating={testimonial.rating} />
                </div>
                <blockquote className="flex-1 mb-4 text-lg italic">"{testimonial.quote}"</blockquote>
                <div className="flex items-center">
                  <div className="relative h-12 w-12 overflow-hidden rounded-full">
                    <Image
                      src={testimonial.imageUrl || "/placeholder.svg"}
                      alt={testimonial.name}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}

