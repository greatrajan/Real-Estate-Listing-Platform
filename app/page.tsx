import { Suspense } from "react"
import PropertyListings from "@/components/property-listings"
import Header from "@/components/header"
import Footer from "@/components/footer"
import { SearchFilters } from "@/components/search-filters"
import Testimonials from "@/components/testimonials"
import FeaturedCities from "@/components/featured-cities"
import BlogPosts from "@/components/blog-posts"
import FAQ from "@/components/faq"
import Newsletter from "@/components/newsletter"
import Partners from "@/components/partners"
import PopularProperties from "@/components/popular-properties"

export default function HomePage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 py-16">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-4xl md:text-5xl font-bold mb-4">Find Your Dream Home</h1>
              <p className="text-xl mb-8">Discover the perfect property in your desired location</p>
              <SearchFilters />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-12">Featured Properties</h2>
            <Suspense fallback={<div className="text-center">Loading properties...</div>}>
              <PropertyListings />
            </Suspense>
          </div>
        </section>

        <FeaturedCities />

        <section className="py-12 bg-white">
          <div className="container mx-auto px-4">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-3xl font-bold text-center mb-8">Why Choose Us?</h2>
              <div className="grid md:grid-cols-3 gap-8">
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Verified Listings</h3>
                  <p className="text-gray-600">All our properties are verified and inspected for quality assurance.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Our customer support team is available round the clock to assist you.</p>
                </div>
                <div className="bg-white p-6 rounded-lg shadow-md text-center">
                  <div className="w-16 h-16 bg-teal-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-8 w-8 text-teal-600"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Secure Payments</h3>
                  <p className="text-gray-600">All transactions are secure and protected by advanced encryption.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <PopularProperties />

        <Testimonials />

        <BlogPosts />

        <FAQ />

        <Newsletter />

        <Partners />
      </main>
      <Footer />
    </div>
  )
}
