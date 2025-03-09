import Link from "next/link"
import { Button } from "@/components/ui/button"

export function CTASection() {
  return (
    <section className="py-16 bg-primary text-primary-foreground">
      <div className="container text-center">
        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Are You a Wedding Vendor?</h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg">
          Join our marketplace and connect with engaged couples looking for your services. Grow your business and book
          more weddings.
        </p>
        <div className="mt-8 flex flex-wrap justify-center gap-4">
          <Link href="/vendor/join">
            <Button size="lg" variant="secondary">
              List Your Business
            </Button>
          </Link>
          <Link href="/vendor/pricing">
            <Button size="lg" variant="outline" className="bg-primary-foreground/10 hover:bg-primary-foreground/20">
              View Pricing
            </Button>
          </Link>
        </div>
      </div>
    </section>
  )
}

