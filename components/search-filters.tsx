"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover"
import { Slider } from "@/components/ui/slider"
import { AccessDeniedModal } from "./access-denied-modal"

interface SearchFiltersProps {
  initialCity?: string
}

export function SearchFilters({ initialCity }: SearchFiltersProps = {}) {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [priceRange, setPriceRange] = useState([0])
  const [selectedCity, setSelectedCity] = useState(initialCity || "")
  const [propertyType, setPropertyType] = useState("")

  const indianCities = [
    "Mumbai",
    "Delhi",
    "Bangalore",
    "Hyderabad",
    "Chennai",
    "Kolkata",
    "Pune",
    "Ahmedabad",
    "Jaipur",
    "Lucknow",
  ]

  const handleSearch = () => {
    if (selectedCity) {
      router.push(`/search/${encodeURIComponent(selectedCity)}`)
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <div className="bg-white p-6 rounded-lg shadow-lg">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Location</label>
            <Select value={selectedCity} onValueChange={setSelectedCity}>
              <SelectTrigger>
                <SelectValue placeholder="Select city">{selectedCity || "Select city"}</SelectValue>
              </SelectTrigger>
              <SelectContent>
                {indianCities.map((city) => (
                  <SelectItem key={city} value={city}>
                    {city}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Property Type</label>
            <Select value={propertyType} onValueChange={setPropertyType}>
              <SelectTrigger>
                <SelectValue placeholder="Select type">
                  {propertyType
                    ? propertyType === "all"
                      ? "All Properties"
                      : propertyType === "house"
                        ? "Houses"
                        : propertyType === "apartment"
                          ? "Apartments"
                          : propertyType === "condo"
                            ? "Condos"
                            : propertyType === "townhouse"
                              ? "Townhouses"
                              : propertyType === "land"
                                ? "Land"
                                : propertyType
                    : "Select type"}
                </SelectValue>
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Properties</SelectItem>
                <SelectItem value="house">Houses</SelectItem>
                <SelectItem value="apartment">Apartments</SelectItem>
                <SelectItem value="condo">Condos</SelectItem>
                <SelectItem value="townhouse">Townhouses</SelectItem>
                <SelectItem value="land">Land</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Price Range</label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start">
                  ₹{priceRange[0].toLocaleString()} - ₹2,00,00,000+
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-80">
                <div className="space-y-4">
                  <h4 className="font-medium">Price Range</h4>
                  <div className="px-1">
                    <Slider defaultValue={[0]} max={20000000} step={500000} onValueChange={setPriceRange} />
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-sm">₹{priceRange[0].toLocaleString()}</p>
                    <p className="text-sm">₹2,00,00,000+</p>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          </div>

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">&nbsp;</label>
            <Button className="w-full" onClick={handleSearch}>
              <Search className="h-4 w-4 mr-2" />
              Search
            </Button>
          </div>
        </div>

        <div className="flex flex-wrap gap-4 mt-4">
          <Button
            variant="outline"
            size="sm"
            className="bg-red-500 text-white hover:bg-red-600 hover:text-white"
            onClick={handleSearch}
          >
            Bachelors
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white"
            onClick={handleSearch}
          >
            Family
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-pink-500 text-white hover:bg-pink-600 hover:text-white"
            onClick={handleSearch}
          >
            Girls Only
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-purple-500 text-white hover:bg-purple-600 hover:text-white"
            onClick={handleSearch}
          >
            PG
          </Button>
          <Button
            variant="outline"
            size="sm"
            className="bg-green-500 text-white hover:bg-green-600 hover:text-white"
            onClick={handleSearch}
          >
            More Filters
          </Button>
        </div>
      </div>

      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
