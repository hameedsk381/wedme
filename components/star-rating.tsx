import { Star } from "lucide-react"

interface StarRatingProps {
  rating: number
  max?: number
}

export function StarRating({ rating, max = 5 }: StarRatingProps) {
  return (
    <div className="flex">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < Math.floor(rating)
              ? "fill-primary text-primary"
              : i < rating
                ? "fill-primary/50 text-primary"
                : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

