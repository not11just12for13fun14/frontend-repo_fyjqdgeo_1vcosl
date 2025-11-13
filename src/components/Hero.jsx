export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50" />
      <div className="relative max-w-6xl mx-auto px-6 py-20">
        <p className="text-sm font-medium text-blue-700">Senior Mobile App Developer</p>
        <h1 className="mt-3 text-4xl md:text-6xl font-extrabold tracking-tight text-gray-900">
          Madhur Jain
        </h1>
        <p className="mt-5 max-w-2xl text-gray-700 text-lg">
          Results-driven engineer specializing in Flutter and Native Android. I build scalable, high-quality apps across banking, e-commerce, and enterprise domains, with a passion for clean architecture and great UX.
        </p>
        <div className="mt-8 flex gap-3">
          <a href="#projects" className="px-5 py-3 rounded-md bg-blue-600 text-white hover:bg-blue-700">View Work</a>
          <a href="#blogs" className="px-5 py-3 rounded-md bg-gray-900 text-white hover:bg-black">Read Blogs</a>
        </div>
      </div>
    </section>
  )
}
