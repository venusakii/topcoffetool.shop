import { Button } from "@/components/ui/button"
import { Coffee, Star } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-coffee-light via-cream to-coffee-lighter">
      <div className="absolute inset-0 bg-[url('/coffee-beans-texture-pattern.jpg')] opacity-5 bg-cover bg-center" />

      <div className="container relative z-10 mx-auto px-4 py-32 text-center">
        <div className="mb-8 inline-flex items-center gap-2 rounded-full bg-coffee-dark/10 px-4 py-2 backdrop-blur-sm">
          <Coffee className="h-5 w-5 text-coffee-dark" />
          <span className="text-sm font-medium text-coffee-dark">Expert Coffee Machine Reviews</span>
        </div>

        <h1 className="mb-6 text-balance font-serif text-5xl font-bold leading-tight text-coffee-darkest md:text-7xl lg:text-8xl">
          Discover Your Perfect
          <br />
          Coffee Experience
        </h1>

        <p className="mx-auto mb-8 max-w-2xl text-pretty text-lg leading-relaxed text-coffee-medium md:text-xl">
          Professional reviews, detailed comparisons, and expert buying guides to help you find the ideal coffee machine
          for your home or business.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" className="bg-coffee-dark text-cream hover:bg-coffee-darkest">
            View Top Picks
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 bg-transparent"
          >
            Compare Machines
          </Button>
        </div>

        <div className="mt-12 flex items-center justify-center gap-8 text-sm text-coffee-medium">
          <div className="flex items-center gap-2">
            <Star className="h-5 w-5 fill-coffee-accent text-coffee-accent" />
            <span className="font-semibold">150+ Reviews</span>
          </div>
          <div className="h-4 w-px bg-coffee-medium/30" />
          <div className="flex items-center gap-2">
            <Coffee className="h-5 w-5 text-coffee-accent" />
            <span className="font-semibold">Expert Tested</span>
          </div>
          <div className="h-4 w-px bg-coffee-medium/30" />
          <div className="flex items-center gap-2">
            <span className="font-semibold">Updated 2025</span>
          </div>
        </div>
      </div>
    </section>
  )
}
