"use client"

import type React from "react"

import { useState } from "react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2 } from "lucide-react"

interface PropertyFormModalProps {
  isOpen: boolean
  onClose: () => void
}

export function PropertyFormModal({ isOpen, onClose }: PropertyFormModalProps) {
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [propertyType, setPropertyType] = useState("")
  const [listingType, setListingType] = useState("")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const handleClose = () => {
    setFormSubmitted(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="sm:max-w-md md:max-w-lg">
        {!formSubmitted ? (
          <>
            <DialogHeader>
              <DialogTitle className="text-xl">List Your Property</DialogTitle>
              <DialogDescription>Fill in the details below to list your property on our platform.</DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="listingType">Listing Type</Label>
                    <Select value={listingType} onValueChange={setListingType} required>
                      <SelectTrigger id="listingType">
                        <SelectValue placeholder="Select type">
                          {listingType
                            ? listingType === "sale"
                              ? "For Sale"
                              : listingType === "rent"
                                ? "For Rent"
                                : listingType
                            : "Select type"}
                        </SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="sale">For Sale</SelectItem>
                        <SelectItem value="rent">For Rent</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="propertyType">Property Type</Label>
                    <Select value={propertyType} onValueChange={setPropertyType} required>
                      <SelectTrigger id="propertyType">
                        <SelectValue placeholder="Select type">{propertyType || "Select type"}</SelectValue>
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="House">House</SelectItem>
                        <SelectItem value="Apartment">Apartment</SelectItem>
                        <SelectItem value="Villa">Villa</SelectItem>
                        <SelectItem value="PG">PG</SelectItem>
                        <SelectItem value="Land">Land</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="title">Property Title</Label>
                  <Input id="title" placeholder="e.g. Modern 3BHK Apartment in Koramangala" required />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="price">Price (₹)</Label>
                    <Input id="price" type="number" placeholder="e.g. 25000" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="area">Area (sq ft)</Label>
                    <Input id="area" type="number" placeholder="e.g. 1200" required />
                  </div>
                </div>
                <div className="grid grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="bedrooms">Bedrooms</Label>
                    <Input id="bedrooms" type="number" placeholder="e.g. 3" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="bathrooms">Bathrooms</Label>
                    <Input id="bathrooms" type="number" placeholder="e.g. 2" required />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="city">City</Label>
                    <Input id="city" placeholder="e.g. Bangalore" required />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="address">Full Address</Label>
                  <Textarea id="address" placeholder="Enter complete property address" required />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="description">Property Description</Label>
                  <Textarea id="description" placeholder="Describe your property" required />
                </div>
              </div>
              <DialogFooter>
                <Button type="button" variant="outline" onClick={handleClose}>
                  Cancel
                </Button>
                <Button type="submit">Submit Listing</Button>
              </DialogFooter>
            </form>
          </>
        ) : (
          <div className="py-6 text-center">
            <div className="mx-auto bg-green-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <CheckCircle2 className="h-8 w-8 text-green-600" />
            </div>
            <DialogTitle className="text-xl mb-2">Listing Submitted Successfully!</DialogTitle>
            <DialogDescription className="text-base">
              Congratulations! Our team will review your property listing and get back to you shortly.
            </DialogDescription>
            <Button onClick={handleClose} className="mt-6">
              Close
            </Button>
          </div>
        )}
      </DialogContent>
    </Dialog>
  )
}
