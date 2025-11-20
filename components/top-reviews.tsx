import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star } from "lucide-react"
import Image from "next/image"

const reviews = [
  {
    id: 1,
    name: "Breville Barista Express",
    category: "Espresso Machine",
    rating: 4.9,
    price: "$699",
    image: "/breville-espresso-machine.jpg",
    badge: "Editor's Choice",
    pros: ["Professional-grade espresso", "Built-in grinder", "Precise temperature control"],
  },
  {
    id: 2,
    name: "De'Longhi Magnifica",
    category: "Automatic",
    rating: 4.7,
    price: "$899",
    image: "/delonghi-automatic-coffee-machine.jpg",
    badge: "Best Value",
    pros: ["One-touch operation", "Milk frother", "Easy maintenance"],
  },
  {
    id: 3,
    name: "Technivorm Moccamaster",
    category: "Drip Coffee",
    rating: 4.8,
    price: "$349",
    image: "/technivorm-moccamaster-coffee-maker.jpg",
    badge: "Best Design",
    pros: ["Perfect brewing temp", "Handmade in Netherlands", "Beautiful aesthetics"],
  },
]

export function TopReviews() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <Badge className="mb-4 bg-coffee-accent text-cream">Top Rated 2025</Badge>
          <h2 className="mb-4 font-serif text-4xl font-bold text-coffee-darkest md:text-5xl">Our Expert Top Picks</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-coffee-medium">
            Handpicked by our experts after extensive testing and evaluation.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="group overflow-hidden rounded-2xl border border-coffee-light/30 bg-cream transition-all hover:shadow-2xl"
            >
              <div className="relative aspect-square overflow-hidden bg-coffee-light/20">
                <Image
                  src={review.image || "/placeholder.svg"}
                  alt={review.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <Badge className="absolute left-4 top-4 bg-coffee-dark text-cream">{review.badge}</Badge>
              </div>

              <div className="p-6">
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-coffee-accent">{review.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="h-4 w-4 fill-coffee-accent text-coffee-accent" />
                    <span className="font-bold text-coffee-darkest">{review.rating}</span>
                  </div>
                </div>

                <h3 className="mb-2 text-xl font-bold text-coffee-darkest">{review.name}</h3>
                

                <ul className="mb-6 space-y-2">
                  {review.pros.map((pro) => (
                    <li key={pro} className="flex items-start gap-2 text-sm text-coffee-medium">
                      <span className="mt-1 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-coffee-accent" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>

                <Button className="w-full bg-coffee-dark text-cream hover:bg-coffee-darkest">Read Full Review</Button>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            variant="outline"
            size="lg"
            className="border-coffee-dark text-coffee-dark hover:bg-coffee-dark/10 bg-transparent"
          >
            View All Reviews
          </Button>
        </div>
      </div>
    </section>
  )
}
