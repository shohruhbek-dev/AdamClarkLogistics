"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Mike Johnson",
    company: "Johnson Auto Group",
    text: "Adam Clark Logistics has been our go-to transport partner for over 3 years. Their reliability and competitive pricing have helped us streamline our operations significantly.",
    rating: 5,
  },
  {
    name: "Sarah Davis",
    company: "Premier Motors",
    text: "Professional service from start to finish. They always keeps us informed every step of the way, and their drivers are always courteous and professional.",
    rating: 5,
  },
  {
    name: "Robert Chen",
    company: "Elite Auto Sales",
    text: "The lowest broker fees in the industry! We've saved thousands on our monthly transport costs since switching to Adam Clark Logistics. Before working with Adam Clark Logistics I have worked with more than 10 car hauling brokers and all of them charged me too much for their broker fee, around $200-$500. ACL has a fixed and lowest broker fee. I 100% recommend them to all!",
    rating: 5,
  },
  {
    name: "Maria Rodriguez",
    company: "Individual Customer",
    text: "Shipped my car from California to New York. Excellent communication throughout the process and my car arrived in perfect condition. No hidden fees or extra charges. I will definitley use them again. Thanks",
    rating: 5,
  },
  {
    name: "David Thompson",
    company: "Thompson Dealership",
    text: "Volume discounts are amazing! The more cars we ship, the better the rates get. Highly recommend for any dealer. Thanks ACL",
    rating: 5,
  },
  {
    name: "Jennifer Wilson",
    company: "Individual Customer",
    text: "Great customer service and very affordable pricing. My first shipment was only $30 as promised!Will use them again and recommend them to my friends.",
    rating: 5,
  },
  {
    name: "Carlos Martinez",
    company: "Martinez Auto Center",
    text: "Fast, reliable, and cost-effective. Adam Clark Logistics understands the dealer business better than anyone.",
    rating: 5,
  },
  {
    name: "Lisa Anderson",
    company: "Individual Customer",
    text: "Smooth process from quote to delivery. The WhatsApp communication made everything so easy to coordinate. Personally I prefer email or WhatsApp to communicate about my businesses and I advise to all to use email, not just a text message as there are a lot of scammers in this industry.",
    rating: 5,
  },
  {
    name: "James Parker",
    company: "Parker Motors",
    text: "Been using their services for a year. Consistent quality and the best rates in the market. Truly professional team.",
    rating: 5,
  },
  {
    name: "Amanda Foster",
    company: "Individual Customer",
    text: "Exceeded my expectations! Car was delivered ahead of schedule and the price was unbeatable. Will definitely use again.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 bg-slate-50">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter sm:text-5xl">What Our Customers Say</h2>
          <p className="max-w-[900px] text-slate-600 md:text-xl/relaxed">
            Don't just take our word for it - hear from our satisfied dealers and customers
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-7xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-slate-200">
              <CardContent className="p-6">
                <div className="flex items-center space-x-1 mb-3">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>
                <Quote className="h-6 w-6 text-slate-400 mb-2" />
                <p className="text-sm text-slate-600 mb-4 italic">"{testimonial.text}"</p>
                <div>
                  <div className="font-semibold text-sm">{testimonial.name}</div>
                  <div className="text-xs text-slate-500">{testimonial.company}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
