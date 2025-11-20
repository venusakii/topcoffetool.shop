"use client"

import type React from "react"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Mail } from "lucide-react"
import { useState } from "react"

export function Newsletter() {
  const [email, setEmail] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle newsletter subscription
    console.log("Newsletter subscription:", email)
  }

  return (
    <section className="bg-coffee-dark py-24 text-cream">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-coffee-accent text-coffee-darkest">
            <Mail className="h-8 w-8" />
          </div>

          <h2 className="mb-4 font-serif text-4xl font-bold md:text-5xl">Stay Updated</h2>
          <p className="mb-8 text-pretty text-lg leading-relaxed text-cream/80">
            Get the latest reviews, buying guides, and exclusive coffee tips delivered to your inbox weekly.
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-4 sm:flex-row">
            <Input
              type="email"
              placeholder="Enter your email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 border-cream/20 bg-cream/10 text-cream placeholder:text-cream/50"
              required
            />
            <Button type="submit" size="lg" className="bg-coffee-accent text-coffee-darkest hover:bg-coffee-accent/90">
              Subscribe
            </Button>
          </form>

          <p className="mt-4 text-sm text-cream/60">No spam, unsubscribe anytime. We respect your privacy.</p>
        </div>
      </div>
    </section>
  )
}
