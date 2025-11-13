import { useEffect, useState } from 'react'

export default function BlogList() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
        const res = await fetch(`${baseUrl}/api/blogs`)
        if (!res.ok) throw new Error('Failed to load blogs')
        const data = await res.json()
        setPosts(data)
      } catch (e) {
        setError(e.message)
      } finally {
        setLoading(false)
      }
    }
    fetchPosts()
  }, [])

  if (loading) {
    return <p className="text-gray-600">Loading blogs...</p>
  }

  if (error) {
    return <p className="text-red-600">{error}</p>
  }

  if (posts.length === 0) {
    return (
      <div className="text-center text-gray-600">
        <p>No posts yet. Be the first to write one.</p>
        <a href="/write" className="inline-block mt-3 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">Write a post</a>
      </div>
    )
  }

  return (
    <div className="grid md:grid-cols-2 gap-6">
      {posts.map((p) => (
        <article key={p.id} className="bg-white border rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow">
          <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
          {p.tags && p.tags.length > 0 && (
            <div className="mt-2 flex flex-wrap gap-2">
              {p.tags.map((t) => (
                <span key={t} className="text-xs bg-gray-100 border px-2 py-1 rounded text-gray-700">#{t}</span>
              ))}
            </div>
          )}
          <p className="mt-3 text-gray-600 line-clamp-3 whitespace-pre-line">{p.content}</p>
          <div className="mt-4 flex items-center justify-between text-sm text-gray-500">
            <span>{p.created_at ? new Date(p.created_at).toLocaleString() : ''}</span>
            {p.featured ? <span className="text-amber-600 font-medium">Featured</span> : <span />}
          </div>
        </article>
      ))}
    </div>
  )
}
