import { Button } from "@/components/ui/button"
import Link from "next/link"
import { SearchBar } from "./search-bar"

export function HeroSection() {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background/80 to-background/40 backdrop-blur-sm" />
      <div
        className="relative h-[600px] bg-cover bg-center"
        style={{ backgroundImage: "https://media.istockphoto.com/id/1141906552/photo/indian-hindu-couple-holding-each-other-hands-during-their-marriage-symbolising-love-and.jpg?s=612x612&w=0&k=20&c=brG8OkGBo5-tIABHlnGtVMu9X4lAC8ebpqGA2Xire6E=" }}
      >
        <div className="container flex h-full flex-col items-center justify-center text-center">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
            Find Your Perfect Wedding Vendors
          </h1>
          <p className="mt-6 max-w-2xl text-lg text-muted-foreground sm:text-xl">
            Discover and book the best wedding professionals for your special day
          </p>
          <div className="mt-8 w-full max-w-md">
            <SearchBar />
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-4">
            <Link href="/vendors">
              <Button size="lg">Browse All Vendors</Button>
            </Link>
            <Link href="/vendor/join">
              <Button variant="outline" size="lg">
                List Your Business
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

