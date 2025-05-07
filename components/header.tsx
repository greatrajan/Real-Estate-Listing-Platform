"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, User, Heart, Bell } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AccessDeniedModal } from "./access-denied-modal"
import { PropertyFormModal } from "./property-form-modal"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isPropertyFormOpen, setIsPropertyFormOpen] = useState(false)

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const handleAuthClick = (type?: string) => {
    if (type === "list-property") {
      setIsPropertyFormOpen(true)
    } else {
      setIsModalOpen(true)
    }
  }

  return (
    <>
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <Link href="/" className="flex items-center">
                <span className="text-2xl font-bold text-teal-600">Real Estate</span>
                <span className="text-2xl font-bold text-gray-800">by ZetaCoding</span>
              </Link>
            </div>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-teal-600 font-medium">
                Home
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Buy
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Rent
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Sell
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="text-gray-700 hover:text-teal-600 font-medium"
              >
                Contact
              </Link>
            </nav>

            <div className="hidden md:flex items-center space-x-4">
              <Button variant="ghost" size="icon" onClick={() => handleAuthClick()}>
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon" onClick={() => handleAuthClick()}>
                <Bell className="h-5 w-5" />
              </Button>
              <Button variant="outline" onClick={() => handleAuthClick()}>
                <User className="h-5 w-5 mr-2" />
                Sign In
              </Button>
              <Button onClick={() => handleAuthClick("list-property")}>List Property</Button>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={toggleMenu}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link href="/" className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium">
                Home
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
              >
                Buy
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
              >
                Rent
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
              >
                Sell
              </Link>
              <Link
                href="#"
                onClick={() => handleAuthClick()}
                className="block px-3 py-2 text-gray-700 hover:text-teal-600 font-medium"
              >
                Contact
              </Link>
              <div className="pt-4 pb-3 border-t border-gray-200">
                <Button onClick={() => handleAuthClick()} className="w-full">
                  <User className="h-5 w-5 mr-2" />
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        )}
      </header>

      <PropertyFormModal isOpen={isPropertyFormOpen} onClose={() => setIsPropertyFormOpen(false)} />
      <AccessDeniedModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  )
}
