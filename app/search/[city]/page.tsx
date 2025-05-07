import Header from "@/components/header"
import Footer from "@/components/footer"
import { SearchFilters } from "@/components/search-filters"
import SearchResults from "@/components/search-results"

export default function SearchPage({ params }: { params: { city: string } }) {
  const city = decodeURIComponent(params.city)

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <section className="bg-gradient-to-r from-teal-500 to-emerald-600 py-10">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto text-center text-white">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">Properties in {city}</h1>
              <p className="text-lg mb-8">Find your perfect home in {city}</p>
              <SearchFilters initialCity={city} />
            </div>
          </div>
        </section>

        <section className="py-12 bg-gray-50">
          <div className="container mx-auto px-4">
            <h2 className="text-2xl font-bold mb-8">Search Results for {city}</h2>
            <SearchResults city={city} />
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
