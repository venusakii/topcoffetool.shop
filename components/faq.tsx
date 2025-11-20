import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const faqs = [
  {
    question: "How do you test coffee machines?",
    answer:
      "We conduct rigorous testing over several weeks, evaluating brew quality, ease of use, maintenance requirements, build quality, and value for money. Our team includes certified baristas and coffee equipment specialists.",
  },
  {
    question: "Are your reviews sponsored?",
    answer:
      "No, all our reviews are completely independent and unbiased. We purchase machines at retail price or receive loan units with no strings attached. Our integrity is our most valuable asset.",
  },
  {
    question: "How often do you update reviews?",
    answer:
      "We continuously monitor the market and update our reviews whenever new models are released or significant changes occur. Major reviews are refreshed at least annually.",
  },
  {
    question: "What should I consider when buying a coffee machine?",
    answer:
      "Key factors include your budget, daily coffee consumption, preferred coffee types (espresso, drip, etc.), available counter space, and desired features like grinders or milk frothers.",
  },
  {
    question: "Do you offer personalized recommendations?",
    answer:
      "Yes! Use our interactive comparison tool or contact our team directly for personalized advice based on your specific needs and preferences.",
  },
]

export function FAQ() {
  return (
    <section className="bg-cream py-24">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-3xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 font-serif text-4xl font-bold text-coffee-darkest md:text-5xl">
              Frequently Asked Questions
            </h2>
            <p className="text-pretty text-lg leading-relaxed text-coffee-medium">
              Everything you need to know about our reviews and recommendations.
            </p>
          </div>

          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="rounded-xl border border-coffee-light/30 bg-white px-6 shadow-sm"
              >
                <AccordionTrigger className="text-left font-bold text-coffee-darkest hover:text-coffee-dark">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-coffee-medium leading-relaxed">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
