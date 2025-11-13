import { useState } from 'react'

export default function WriteBlog(){
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [tags, setTags] = useState('')
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState('')

  const submit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage('')
    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/api/blogs`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          title,
          content,
          tags: tags.split(',').map(t => t.trim()).filter(Boolean),
          featured: false,
        })
      })
      if (!res.ok) throw new Error('Failed to publish')
      setTitle('')
      setContent('')
      setTags('')
      setMessage('Post published!')
    } catch (e) {
      setMessage(e.message)
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="max-w-3xl mx-auto px-6 py-16">
      <h2 className="text-2xl font-bold text-gray-900">Write a Blog</h2>
      <form onSubmit={submit} className="mt-6 space-y-4">
        <input value={title} onChange={e=>setTitle(e.target.value)} placeholder="Title" className="w-full border rounded p-3" required />
        <textarea value={content} onChange={e=>setContent(e.target.value)} placeholder="Content (Markdown supported)" rows={10} className="w-full border rounded p-3" required />
        <input value={tags} onChange={e=>setTags(e.target.value)} placeholder="Tags (comma separated)" className="w-full border rounded p-3" />
        <button disabled={loading} className="px-5 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 disabled:opacity-50">{loading ? 'Publishing...' : 'Publish'}</button>
        {message && <p className="text-sm text-gray-700">{message}</p>}
      </form>
    </section>
  )
}
