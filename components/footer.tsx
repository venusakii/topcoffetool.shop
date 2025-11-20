import { Coffee, Facebook, Instagram, Twitter, Youtube } from "lucide-react"
import Link from "next/link"

const footerLinks = {
  reviews: [
    { name: "Espresso Machines", href: "#" },
    { name: "Drip Coffee Makers", href: "#" },
    { name: "Single Serve", href: "#" },
    { name: "Commercial", href: "#" },
  ],
  guides: [
    { name: "Buying Guide", href: "#" },
    { name: "How to Choose", href: "#" },
    { name: "Maintenance Tips", href: "#" },
    { name: "Coffee Basics", href: "#" },
  ],
  company: [
    { name: "About Us", href: "#" },
    { name: "Our Process", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Advertise", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-coffee-darkest text-cream">
      <div className="container mx-auto px-4 py-16">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
          <div className="lg:col-span-2">
            <Link href="/" className="mb-4 inline-flex items-center gap-2">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-coffee-accent">
                <Coffee className="h-6 w-6 text-coffee-darkest" />
              </div>
              <span className="font-serif text-2xl font-bold">TopCoffeeTool</span>
            </Link>
            <p className="mb-6 max-w-md text-pretty leading-relaxed text-cream/70">
              Your trusted source for expert coffee machine reviews, comparisons, and buying guides since 2020.
            </p>
            <div className="flex gap-4">
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 transition-colors hover:bg-coffee-accent hover:text-coffee-darkest"
              >
                <Facebook className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 transition-colors hover:bg-coffee-accent hover:text-coffee-darkest"
              >
                <Instagram className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 transition-colors hover:bg-coffee-accent hover:text-coffee-darkest"
              >
                <Twitter className="h-5 w-5" />
              </Link>
              <Link
                href="#"
                className="flex h-10 w-10 items-center justify-center rounded-lg bg-cream/10 transition-colors hover:bg-coffee-accent hover:text-coffee-darkest"
              >
                <Youtube className="h-5 w-5" />
              </Link>
            </div>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Reviews</h3>
            <ul className="space-y-2">
              {footerLinks.reviews.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/70 transition-colors hover:text-coffee-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Guides</h3>
            <ul className="space-y-2">
              {footerLinks.guides.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/70 transition-colors hover:text-coffee-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="mb-4 font-bold">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-cream/70 transition-colors hover:text-coffee-accent">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/10 pt-8 text-center text-sm text-cream/50">
          <p>© 2025 TopCoffeeTool.shop. All rights reserved. Independent reviews you can trust.</p>
        </div>
      </div>
    </footer>
  )
}
