export default function BlogPosts() {
  const posts = [
    {
      id: 1,
      title: "Top 10 Neighborhoods in Bangalore for Families",
      excerpt: "Discover the best family-friendly areas in Bangalore with great schools and amenities.",
      date: "May 2, 2023",
      image: "https://images.unsplash.com/photo-1596176530529-78163a4f7af2?w=800&auto=format&fit=crop",
      author: "Neha Gupta",
    },
    {
      id: 2,
      title: "Investment Opportunities in Indian Real Estate 2023",
      excerpt: "Learn about the hottest investment areas in India's growing real estate market.",
      date: "April 15, 2023",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=800&auto=format&fit=crop",
      author: "Vikram Singh",
    },
    {
      id: 3,
      title: "How to Navigate Property Registration in India",
      excerpt: "A step-by-step guide to understanding the property registration process in India.",
      date: "March 28, 2023",
      image: "https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&auto=format&fit=crop",
      author: "Aditya Patel",
    },
  ]

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">Latest from Our Blog</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post) => (
            <div key={post.id} className="group cursor-pointer">
              <div className="overflow-hidden rounded-lg mb-4">
                <img
                  src={post.image || "/placeholder.svg"}
                  alt={post.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              <div>
                <p className="text-sm text-gray-500 mb-2">
                  {post.date} • By {post.author}
                </p>
                <h3 className="text-xl font-bold mb-2 group-hover:text-teal-600 transition-colors">{post.title}</h3>
                <p className="text-gray-600">{post.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-10">
          <button className="px-6 py-3 bg-teal-600 text-white rounded-lg hover:bg-teal-700 transition-colors">
            View All Articles
          </button>
        </div>
      </div>
    </section>
  )
}
