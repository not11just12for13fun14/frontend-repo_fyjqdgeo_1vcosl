export default function Navbar(){
  return (
    <header className="sticky top-0 z-40 backdrop-blur bg-white/70 border-b">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="/" className="font-bold text-gray-900">MJ</a>
        <nav className="flex items-center gap-6 text-sm text-gray-700">
          <a href="#experience" className="hover:text-gray-900">Experience</a>
          <a href="#skills" className="hover:text-gray-900">Skills</a>
          <a href="#blogs" className="hover:text-gray-900">Blogs</a>
          <a href="#contact" className="hover:text-gray-900">Contact</a>
        </nav>
      </div>
    </header>
  )
}
