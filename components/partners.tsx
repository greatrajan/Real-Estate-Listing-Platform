export default function Partners() {
  const partners = [
    {
      name: "HDFC Bank",
      logo: "https://images.unsplash.com/photo-1614680376739-414d95ff43df?w=800&auto=format&fit=crop",
    },
    {
      name: "SBI",
      logo: "https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=800&auto=format&fit=crop",
    },
    {
      name: "ICICI Bank",
      logo: "https://images.unsplash.com/photo-1614680376408-16afefe3f873?w=800&auto=format&fit=crop",
    },
    {
      name: "LIC Housing",
      logo: "https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=800&auto=format&fit=crop",
    },
    {
      name: "Axis Bank",
      logo: "https://images.unsplash.com/photo-1614680376684-b417728a1817?w=800&auto=format&fit=crop",
    },
    {
      name: "PNB Housing",
      logo: "https://images.unsplash.com/photo-1614680376512-4e9dc8e56ba7?w=800&auto=format&fit=crop",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Our Trusted Partners</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div key={partner.name} className="flex justify-center">
              <img
                src={partner.logo || "/placeholder.svg"}
                alt={partner.name}
                className="h-16 object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
