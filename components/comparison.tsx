import { Check, X } from "lucide-react"
import { Button } from "@/components/ui/button"

const machines = [
  {
    name: "Breville Barista Express",
    price: "$699",
    features: {
      grinder: true,
      milkFrother: true,
      programmable: true,
      waterFilter: true,
      warranty: "2 years",
    },
  },
  {
    name: "De'Longhi Magnifica",
    price: "$899",
    features: {
      grinder: true,
      milkFrother: true,
      programmable: true,
      waterFilter: true,
      warranty: "1 year",
    },
  },
  {
    name: "Technivorm Moccamaster",
    price: "$349",
    features: {
      grinder: false,
      milkFrother: false,
      programmable: false,
      waterFilter: true,
      warranty: "5 years",
    },
  },
]

export function Comparison() {
  return (
    <section className="bg-coffee-darkest py-24 text-cream">
      <div className="container mx-auto px-4">
        <div className="mb-16 text-center">
          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Compare Top Models</h2>
          <p className="mx-auto max-w-2xl text-pretty text-lg leading-relaxed text-cream/80">
            See how our top picks stack up side-by-side to find the perfect match for your needs.
          </p>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-cream/20">
                <th className="p-4 text-left text-sm font-semibold uppercase tracking-wider text-cream/60">Feature</th>
                {machines.map((machine) => (
                  <th key={machine.name} className="p-4 text-center">
                    <div className="font-bold text-cream">{machine.name}</div>
                    
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-cream/10">
                <td className="p-4 font-medium text-cream">Built-in Grinder</td>
                {machines.map((machine) => (
                  <td key={machine.name} className="p-4 text-center">
                    {machine.features.grinder ? (
                      <Check className="mx-auto h-6 w-6 text-coffee-accent" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-cream/30" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-cream/10">
                <td className="p-4 font-medium text-cream">Milk Frother</td>
                {machines.map((machine) => (
                  <td key={machine.name} className="p-4 text-center">
                    {machine.features.milkFrother ? (
                      <Check className="mx-auto h-6 w-6 text-coffee-accent" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-cream/30" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-cream/10">
                <td className="p-4 font-medium text-cream">Programmable</td>
                {machines.map((machine) => (
                  <td key={machine.name} className="p-4 text-center">
                    {machine.features.programmable ? (
                      <Check className="mx-auto h-6 w-6 text-coffee-accent" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-cream/30" />
                    )}
                  </td>
                ))}
              </tr>
              <tr className="border-b border-cream/10">
                <td className="p-4 font-medium text-cream">Water Filter</td>
                {machines.map((machine) => (
                  <td key={machine.name} className="p-4 text-center">
                    {machine.features.waterFilter ? (
                      <Check className="mx-auto h-6 w-6 text-coffee-accent" />
                    ) : (
                      <X className="mx-auto h-6 w-6 text-cream/30" />
                    )}
                  </td>
                ))}
              </tr>
              <tr>
                <td className="p-4 font-medium text-cream">Warranty</td>
                {machines.map((machine) => (
                  <td key={machine.name} className="p-4 text-center font-semibold text-cream">
                    {machine.features.warranty}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-12 text-center">
          <Button size="lg" className="bg-coffee-accent text-coffee-darkest hover:bg-coffee-accent/90">
            Full Comparison Tool
          </Button>
        </div>
      </div>
    </section>
  )
}
