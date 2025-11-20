import { Hero } from "@/components/hero"
import { Features } from "@/components/features"
import { TopReviews } from "@/components/top-reviews"
import { Comparison } from "@/components/comparison"
import { BuyingGuide } from "@/components/buying-guide"
import { Testimonials } from "@/components/testimonials"
import { FAQ } from "@/components/faq"
import { Newsletter } from "@/components/newsletter"
import { Footer } from "@/components/footer"

export default function Page() {
  return (
    <div className="min-h-screen">
      <Hero />
      <Features />
      <TopReviews />
      <Comparison />
      <BuyingGuide />
      <Testimonials />
      <FAQ />
      <Newsletter />
      <Footer />
    </div>
  )
}
