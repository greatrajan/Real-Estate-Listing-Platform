"use client"

import { useState } from "react"
import { Bath, Bed, MapPin, Maximize, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { AccessDeniedModal } from "./access-denied-modal"

export default function PopularProperties() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const formatPrice = (price: number, isForSale: boolean) => {
    return isForSale ? `₹${price.toLocaleString()}` : `₹${price.toLocaleString()}/month`
  }

  const handlePropertyClick = () => {
    setIsModalOpen(true)
  }

  const forSaleProperties = [
    {
      id: 1,
      title: "Luxury Villa in Whitefield",
      address: "Whitefield, Bangalore, KA",
      price: 15000000,
      bedrooms: 4,
      bathrooms: 4.5,
      area: 3200,
      image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&auto=format&fit=crop",
      type: "Villa",
      isForSale: true,
    },
    {
      id: 2,
      title: "Premium Apartment in Indiranagar",
      address: "Indiranagar, Bangalore, KA",
      price: 9000000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1800,
      image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?w=800&auto=format&fit=crop",
      type: "Apartment",
      isForSale: true,
    },
    {
      id: 3,
      title: "Spacious Family Home in HSR Layout",
      address: "HSR Layout, Bangalore, KA",
      price: 12500000,
      bedrooms: 4,
      bathrooms: 3,
      area: 2500,
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800&auto=format&fit=crop",
      type: "House",
      isForSale: true,
    },
  ]

  const forRentProperties = [
    {
      id: 1,
      title: "Modern 3BHK in Koramangala",
      address: "Koramangala, Bangalore, KA",
      price: 45000,
      bedrooms: 3,
      bathrooms: 3,
      area: 1600,
      image: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&auto=format&fit=crop",
      type: "Apartment",
      isForSale: false,
    },
    {
      id: 2,
      title: "Furnished 2BHK in JP Nagar",
      address: "JP Nagar, Bangalore, KA",
      price: 30000,
      bedrooms: 2,
      bathrooms: 2,
      area: 1200,
      image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?w=800&auto=format&fit=crop",
      type: "Apartment",
      isForSale: false,
    },
    {
      id: 3,
      title: "Bachelor Studio in Electronic City",
      address: "Electronic City, Bangalore, KA",
      price: 15000,
      bedrooms: 1,
      bathrooms: 1,
      area: 600,
      image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&auto=format&fit=crop",
      type: "Studio",
      isForSale: false,
    },
  ]

  return (
    <>
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Popular Properties</h2>

          <Tabs defaultValue="buy" className="w-full max-w-4xl mx-auto">
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="buy">For Sale</TabsTrigger>
              <TabsTrigger value="rent">For Rent</TabsTrigger>
            </TabsList>

            <TabsContent value="buy">
              <div className="grid md:grid-cols-3 gap-8">
                {forSaleProperties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-teal-600">For Sale</Badge>
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
                        <p className="text-lg font-bold text-teal-600">
                          {formatPrice(property.price, property.isForSale)}
                        </p>
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
            </TabsContent>

            <TabsContent value="rent">
              <div className="grid md:grid-cols-3 gap-8">
                {forRentProperties.map((property) => (
                  <Card key={property.id} className="overflow-hidden hover:shadow-lg transition-shadow duration-300">
                    <div className="relative">
                      <img
                        src={property.image || "/placeholder.svg"}
                        alt={property.title}
                        className="w-full h-64 object-cover"
                      />
                      <Badge className="absolute top-4 left-4 bg-teal-600">For Rent</Badge>
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
                        <p className="text-lg font-bold text-teal-600">
                          {formatPrice(property.price, property.isForSale)}
                        </p>
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
            </TabsContent>
          </Tabs>

          <div className="text-center mt-10">
            <Button onClick={handlePropertyClick} className="px-8">
              View All Properties
            </Button>
          </div>
        </div>
      </section>

      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
