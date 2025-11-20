import { Star } from "lucide-react"
import Image from "next/image"

const testimonials = [
  {
    id: 1,
    name: "Michael Anderson",
    role: "Home Barista",
    image: "/professional-woman-portrait.png",
    rating: 5,
    text: "The reviews helped me find the perfect espresso machine. The detailed comparisons made my decision so much easier!",
  },
  {
    id: 2,
    name: "David Chen",
    role: "Coffee Shop Owner",
    image: "/professional-man-portrait.png",
    rating: 5,
    text: "As a business owner, I trust these reviews completely. They saved me thousands by pointing me to the right commercial equipment.",
  },
  {
    id: 3,
    name: "Jessica Williams",
    role: "Coffee Enthusiast",
    image: "/professional-woman-portrait-2.png",
    rating: 5,
    text: "Finally, honest reviews from real experts! The buying guides are incredibly helpful for beginners like me.",
  },
]

export function Testimonials() {
  return (
    <section className="bg-white py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-coffee-darkest md:text-5xl">
            Trusted by Coffee Lovers
          </h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-coffee-medium">
            Join thousands of satisfied readers who found their perfect coffee machine.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="rounded-2xl border border-coffee-light/30 bg-cream p-8 shadow-sm transition-all hover:shadow-lg"
            >
              <div className="mb-4 flex gap-1">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="h-5 w-5 fill-coffee-accent text-coffee-accent" />
                ))}
              </div>

              <p className="mb-6 text-pretty leading-relaxed text-coffee-darkest">"{testimonial.text}"</p>

              <div className="flex items-center gap-4">
                <div className="relative h-12 w-12 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <div>
                  <div className="font-bold text-coffee-darkest">{testimonial.name}</div>
                  <div className="text-sm text-coffee-medium">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
