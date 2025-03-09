import { Suspense } from "react"
import { SearchBar } from "@/components/search-bar"
import { VendorCard } from "@/components/vendor-card"
import { Pagination } from "@/components/pagination"
import { VendorFilters } from "@/components/vendor-filters"

// Mock data for vendors
const mockVendors = Array.from({ length: 12 }).map((_, i) => ({
  id: `${i + 1}`,
  name: `Vendor ${i + 1}`,
  category: ["Venues", "Photographers", "Caterers", "Florists", "DJs & Musicians"][Math.floor(Math.random() * 5)],
  location: ["New York", "Los Angeles", "Chicago", "Miami", "Dallas"][Math.floor(Math.random() * 5)],
  rating: 3 + Math.random() * 2,
  reviewCount: Math.floor(Math.random() * 200) + 10,
  imageUrl: "/placeholder.svg?height=200&width=300",
  price: ["$", "$$", "$$$"][Math.floor(Math.random() * 3)],
}))

export default function VendorsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  // In a real app, you would use these params to fetch vendors from an API
  const query = searchParams.q || ""
  const category = searchParams.category || ""
  const location = searchParams.location || ""
  const page = Number(searchParams.page) || 1

  return (
    <div className="container py-8">
      <h1 className="mb-6 text-3xl font-bold tracking-tight">Wedding Vendors</h1>

      <div className="mb-6">
        <SearchBar />
      </div>

      <div className="grid gap-6 md:grid-cols-[240px_1fr]">
        <aside>
          <VendorFilters />
        </aside>

        <div>
          <Suspense fallback={<div>Loading vendors...</div>}>
            <div className="mb-4 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Showing {mockVendors.length} vendors</p>
              <div className="flex items-center gap-2">{/* View toggle would go here */}</div>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {mockVendors.map((vendor) => (
                <VendorCard key={vendor.id} vendor={vendor} />
              ))}
            </div>

            <div className="mt-8">
              <Pagination totalPages={5} currentPage={page} />
            </div>
          </Suspense>
        </div>
      </div>
    </div>
  )
}

