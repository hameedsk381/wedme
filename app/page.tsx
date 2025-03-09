import { HeroSection } from "@/components/hero-section"
import { FeaturedVendors } from "@/components/featured-vendors"
import { CategorySection } from "@/components/category-section"
import { Testimonials } from "@/components/testimonials"
import { CTASection } from "@/components/cta-section"

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FeaturedVendors />
      <CategorySection />
      <Testimonials />
      <CTASection />
    </>
  )
}

