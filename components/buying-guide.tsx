import { BookOpen, DollarSign, Home, Briefcase } from "lucide-react"

const guides = [
  {
    icon: Home,
    title: "Home Brewing Guide",
    description: "Perfect machines for daily home use, from beginner-friendly to enthusiast-grade equipment.",
    link: "Read Guide",
  },
  {
    icon: Briefcase,
    title: "Office Solutions",
    description: "High-capacity machines designed for workplace environments and heavy daily use.",
    link: "Read Guide",
  },
  {
    icon: DollarSign,
    title: "Budget Picks",
    description: "Quality coffee machines that deliver great value without breaking the bank.",
    link: "Read Guide",
  },
  {
    icon: BookOpen,
    title: "Beginner's Guide",
    description: "Everything you need to know before buying your first coffee machine.",
    link: "Read Guide",
  },
]

export function BuyingGuide() {
  return (
    <section className="bg-gradient-to-br from-cream via-coffee-lighter to-coffee-light py-24">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold text-coffee-darkest md:text-5xl">Expert Buying Guides</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-coffee-medium">
            Navigate your purchase with confidence using our comprehensive guides tailored to your needs.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          {guides.map((guide) => (
            <div
              key={guide.title}
              className="group flex gap-6 rounded-2xl bg-white p-8 shadow-sm transition-all hover:shadow-xl"
            >
              <div className="flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-xl bg-coffee-dark text-cream transition-transform group-hover:scale-110">
                <guide.icon className="h-8 w-8" />
              </div>
              <div>
                <h3 className="mb-2 text-xl font-bold text-coffee-darkest">{guide.title}</h3>
                <p className="mb-4 leading-relaxed text-coffee-medium">{guide.description}</p>
                <span className="font-semibold text-coffee-accent transition-colors group-hover:text-coffee-dark">
                  {guide.link} →
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
