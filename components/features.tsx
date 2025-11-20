import { Award, Shield, TrendingUp, Zap } from "lucide-react"

const features = [
  {
    icon: Award,
    title: "Expert Reviews",
    description: "Detailed analysis from certified baristas and coffee equipment specialists with years of experience.",
  },
  {
    icon: Shield,
    title: "Unbiased Testing",
    description: "Independent testing methodology ensuring honest, reliable recommendations you can trust.",
  },
  {
    icon: TrendingUp,
    title: "Latest Models",
    description: "Stay updated with the newest coffee machines and technology hitting the market in 2025.",
  },
  {
    icon: Zap,
    title: "Quick Comparisons",
    description: "Side-by-side feature analysis to help you make informed decisions in minutes.",
  },
]

export function Features() {
  return (
    <section className="bg-cream py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-coffee-darkest md:text-5xl">Why Trust Our Reviews?</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-coffee-medium">
            We combine professional expertise with rigorous testing to deliver the most comprehensive coffee machine
            reviews.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="group rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="mb-4 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-coffee-light/50 text-coffee-dark transition-colors group-hover:bg-coffee-accent group-hover:text-cream">
                <feature.icon className="h-7 w-7" />
              </div>
              <h3 className="mb-3 text-xl font-bold text-coffee-darkest">{feature.title}</h3>
              <p className="leading-relaxed text-coffee-medium">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
