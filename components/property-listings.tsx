"use client"

import { useState } from "react"
import { Bath, Bed, MapPin, Maximize, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { AccessDeniedModal } from "./access-denied-modal"

// Mock property data
const properties = [
  {
    id: 1,
    title: "Modern Apartment with City View",
    address: "123 MG Road, Bengaluru, KA",
    price: 4500000,
    bedrooms: 2,
    bathrooms: 2,
    area: 1200,
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=800&auto=format&fit=crop",
    type: "Apartment",
    isForSale: true,
  },
  {
    id: 2,
    title: "Spacious Family Home",
    address: "456 Koramangala, Bengaluru, KA",
    price: 7500000,
    bedrooms: 4,
    bathrooms: 3,
    area: 2500,
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&auto=format&fit=crop",
    type: "House",
    isForSale: true,
  },
  {
    id: 3,
    title: "Downtown Loft",
    address: "789 Indiranagar, Bengaluru, KA",
    price: 22000,
    bedrooms: 1,
    bathrooms: 1,
    area: 950,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
    type: "Apartment",
    isForSale: false,
  },
  {
    id: 4,
    title: "Luxury Villa with Pool",
    address: "101 Whitefield, Bengaluru, KA",
    price: 12000000,
    bedrooms: 5,
    bathrooms: 4,
    area: 3800,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
    type: "Villa",
    isForSale: true,
  },
  {
    id: 5,
    title: "Cozy Studio in Tech Park",
    address: "202 Electronic City, Bengaluru, KA",
    price: 15000,
    bedrooms: 0,
    bathrooms: 1,
    area: 600,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
    type: "Studio",
    isForSale: false,
  },
  {
    id: 6,
    title: "Renovated Townhouse",
    address: "303 HSR Layout, Bengaluru, KA",
    price: 5250000,
    bedrooms: 3,
    bathrooms: 2.5,
    area: 1800,
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&auto=format&fit=crop",
    type: "Townhouse",
    isForSale: true,
  },
]

export default function PropertyListings() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formatPrice = (price: number, isForSale: boolean) => {
    return isForSale ? `₹${price.toLocaleString()}` : `₹${price.toLocaleString()}/month`
  }

  const handlePropertyClick = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {properties.map((property) => (
          <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div className="relative">
              <img
                src={property.image || "/placeholder.svg"}
                alt={property.title}
                className="w-full h-64 object-cover"
              />
              <Badge className="absolute top-4 left-4 bg-teal-600">
                {property.isForSale ? "For Sale" : "For Rent"}
              </Badge>
              <Button
                variant="ghost"
                size="icon"
                className="absolute top-4 right-4 bg-white/80 hover:bg-white text-rose-500 rounded-full"
                onClick={handlePropertyClick}
              >
                <Heart className="h-5 w-5" />
              </Button>
            </div>
            <CardContent className="pt-6">
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-xl font-bold line-clamp-1">{property.title}</h3>
                <p className="text-lg font-bold text-teal-600">{formatPrice(property.price, property.isForSale)}</p>
              </div>
              <div className="flex items-center text-gray-500 mb-4">
                <MapPin className="h-4 w-4 mr-1" />
                <p className="text-sm line-clamp-1">{property.address}</p>
              </div>
              <div className="flex justify-between mt-4">
                <div className="flex items-center">
                  <Bed className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-sm">
                    {property.bedrooms} {property.bedrooms === 1 ? "Bed" : "Beds"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Bath className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-sm">
                    {property.bathrooms} {property.bathrooms === 1 ? "Bath" : "Baths"}
                  </span>
                </div>
                <div className="flex items-center">
                  <Maximize className="h-5 w-5 text-gray-500 mr-1" />
                  <span className="text-sm">{property.area} sq ft</span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="border-t pt-4">
              <Button className="w-full" onClick={handlePropertyClick}>
                View Property
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
