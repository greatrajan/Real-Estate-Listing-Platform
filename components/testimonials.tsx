"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Quote } from "lucide-react"

export default function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Priya Sharma",
      role: "Homeowner",
      content:
        "I found my dream home through Real Estate by ZetaCoding. The process was smooth and the team was incredibly helpful throughout.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&auto=format&fit=crop",
    },
    {
      id: 2,
      name: "Rahul Verma",
      role: "Property Investor",
      content:
        "As an investor, I've worked with many real estate platforms, but ZetaCoding stands out for their professionalism and market knowledge.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=150&auto=format&fit=crop",
    },
    {
      id: 3,
      name: "Ananya Patel",
      role: "First-time Buyer",
      content:
        "Being a first-time buyer was intimidating, but the team at ZetaCoding guided me through every step. Couldn't be happier with my new apartment!",
      image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=150&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="border-none shadow-lg">
              <CardContent className="pt-6">
                <div className="mb-4 text-teal-600">
                  <Quote className="h-8 w-8" />
                </div>
                <p className="mb-6 text-gray-700">{testimonial.content}</p>
                <div className="flex items-center">
                  <img
                    src={testimonial.image || "/placeholder.svg"}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="font-semibold">{testimonial.name}</h4>
                    <p className="text-sm text-gray-600">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
