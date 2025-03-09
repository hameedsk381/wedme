"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { StarRating } from "./star-rating"
import { Textarea } from "@/components/ui/textarea"
import { Loader2 } from "lucide-react"

// Mock data for reviews
const mockReviews = Array.from({ length: 5 }).map((_, i) => ({
  id: `review-${i + 1}`,
  author: `User ${i + 1}`,
  date: new Date(Date.now() - i * 86400000 * 30).toLocaleDateString(),
  rating: 3 + Math.random() * 2,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.",
}))

interface ReviewsProps {
  vendorId: string
}

export function Reviews({ vendorId }: ReviewsProps) {
  const [reviews, setReviews] = useState(mockReviews)
  const [newReview, setNewReview] = useState("")
  const [rating, setRating] = useState(5)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showForm, setShowForm] = useState(false)

  const handleSubmitReview = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500))

    const review = {
      id: `review-${reviews.length + 1}`,
      author: "You",
      date: new Date().toLocaleDateString(),
      rating,
      content: newReview,
    }

    setReviews([review, ...reviews])
    setNewReview("")
    setRating(5)
    setIsSubmitting(false)
    setShowForm(false)
  }

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold">Customer Reviews ({reviews.length})</h3>
        {!showForm && <Button onClick={() => setShowForm(true)}>Write a Review</Button>}
      </div>

      {showForm && (
        <div className="border rounded-lg p-4 mb-6">
          <h4 className="font-semibold mb-2">Write Your Review</h4>
          <form onSubmit={handleSubmitReview} className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-1">Rating</label>
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((star) => (
                  <button key={star} type="button" onClick={() => setRating(star)} className="focus:outline-none">
                    <svg
                      className={`h-6 w-6 ${star <= rating ? "fill-primary text-primary" : "fill-muted text-muted"}`}
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
                    </svg>
                  </button>
                ))}
              </div>
            </div>
            <div>
              <label className="block text-sm font-medium mb-1">Your Review</label>
              <Textarea
                value={newReview}
                onChange={(e) => setNewReview(e.target.value)}
                placeholder="Share your experience with this vendor..."
                className="min-h-[100px]"
                required
              />
            </div>
            <div className="flex gap-2">
              <Button type="submit" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Submitting...
                  </>
                ) : (
                  "Submit Review"
                )}
              </Button>
              <Button type="button" variant="outline" onClick={() => setShowForm(false)}>
                Cancel
              </Button>
            </div>
          </form>
        </div>
      )}

      <div className="space-y-4">
        {reviews.map((review) => (
          <div key={review.id} className="border-b pb-4 last:border-0">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">{review.author}</p>
                <p className="text-sm text-muted-foreground">{review.date}</p>
              </div>
              <StarRating rating={review.rating} />
            </div>
            <p className="mt-2">{review.content}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

