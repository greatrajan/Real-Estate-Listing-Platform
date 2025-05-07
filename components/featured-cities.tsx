"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent } from "@/components/ui/card"
import { AccessDeniedModal } from "./access-denied-modal"

export default function FeaturedCities() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)

  const cities = [
    {
      name: "Mumbai",
      image: "https://images.unsplash.com/photo-1566552881560-0be862a7c445?w=800&auto=format&fit=crop",
      properties: 1245,
    },
    {
      name: "Delhi",
      image: "https://images.unsplash.com/photo-1587474260584-136574528ed5?w=800&auto=format&fit=crop",
      properties: 987,
    },
    {
      name: "Bangalore",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop",
      properties: 1532,
    },
    {
      name: "Hyderabad",
      image: "https://images.unsplash.com/photo-1626104252935-9a5dbd879bf6?w=800&auto=format&fit=crop",
      properties: 876,
    },
    {
      name: "Chennai",
      image: "https://images.unsplash.com/photo-1582510003544-4d00b7f74220?w=800&auto=format&fit=crop",
      properties: 743,
    },
    {
      name: "Kolkata",
      image: "https://images.unsplash.com/photo-1558431382-27e303142255?w=800&auto=format&fit=crop",
      properties: 654,
    },
  ]

  const handleCityClick = (city: string) => {
    router.push(`/search/${encodeURIComponent(city)}`)
  }

  return (
    <>
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Explore Popular Cities</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {cities.map((city) => (
              <Card
                key={city.name}
                className="overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => handleCityClick(city.name)}
              >
                <div className="relative h-40">
                  <img src={city.image || "/placeholder.svg"} alt={city.name} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                    <h3 className="text-white text-xl font-bold">{city.name}</h3>
                  </div>
                </div>
                <CardContent className="p-3">
                  <p className="text-sm text-gray-600">{city.properties} Properties</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
