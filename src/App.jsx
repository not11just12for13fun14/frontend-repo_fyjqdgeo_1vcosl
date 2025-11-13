import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Experience from './components/Experience'
import Skills from './components/Skills'
import BlogList from './components/BlogList'
import Contact from './components/Contact'

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white to-blue-50">
      <Navbar />
      <Hero />

      <main className="relative z-10">
        <Experience />
        <section id="blogs" className="max-w-6xl mx-auto px-6 py-16">
          <div className="flex items-center justify-between">
            <h2 className="text-2xl font-bold text-gray-900">Blogs</h2>
            <a href="/write" className="px-4 py-2 rounded bg-blue-600 text-white hover:bg-blue-700">Write</a>
          </div>
          <div className="mt-6">
            <BlogList />
          </div>
        </section>
        <Skills />
        <Contact />
      </main>

      <footer className="border-t py-8 text-center text-sm text-gray-600">
        © {new Date().getFullYear()} Madhur Jain. All rights reserved.
      </footer>
    </div>
  )
}

export default App
