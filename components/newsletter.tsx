"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { AccessDeniedModal } from "./access-denied-modal"

export default function Newsletter() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const handleSubscribe = () => {
    setIsModalOpen(true)
  }

  return (
    <>
      <section className="py-16 bg-teal-600 text-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold mb-4">Subscribe to Our Newsletter</h2>
            <p className="mb-8">
              Get the latest property listings, market insights, and real estate tips delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Input type="email" placeholder="Enter your email address" className="bg-white text-gray-800 border-0" />
              <Button
                onClick={handleSubscribe}
                className="bg-white text-teal-600 hover:bg-gray-100 hover:text-teal-700"
              >
                Subscribe
              </Button>
            </div>
            <p className="mt-4 text-sm opacity-80">
              By subscribing, you agree to our Privacy Policy and consent to receive updates from our company.
            </p>
          </div>
        </div>
      </section>

      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
