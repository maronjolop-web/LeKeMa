'use client'

import { useEffect, useState } from 'react'

interface Item {
  id: string
  title: string
  description: string
}

export default function ItemsList() {
  const [items, setItems] = useState<Item[]>([])
  const [loading, setLoading] = useState(true)
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    fetch('/api/items')
      .then(r => r.json())
      .then(data => { setItems(data); setLoading(false) })
      .catch(() => setLoading(false))
  }, [])

  const handleAdd = async () => {
    if (!title.trim()) return
    const res = await fetch('/api/items', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, description })
    })
    const newItem = await res.json()
    setItems([...items, newItem])
    setTitle('')
    setDescription('')
  }

  const handleDelete = async (id: string) => {
    await fetch(`/api/items?id=${id}`, { method: 'DELETE' })
    setItems(items.filter(i => i.id !== id))
  }

  if (loading) return <div>Loading...</div>

  return (
    <div>
      <h2>Items</h2>
      <div style={{ marginBottom: '20px', padding: '12px', background: '#f0f4f8', borderRadius: '6px' }}>
        <input
          type="text"
          placeholder="Title"
          value={title}
          onChange={e => setTitle(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }}
        />
        <textarea
          placeholder="Description"
          value={description}
          onChange={e => setDescription(e.target.value)}
          style={{ display: 'block', width: '100%', padding: '8px', marginBottom: '8px', boxSizing: 'border-box' }}
        />
        <button onClick={handleAdd} style={{ padding: '8px 16px', background: '#0ea5e9', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
          Add Item
        </button>
      </div>
      <section className="section">
        {items.map(item => (
          <article key={item.id} className="card">
            <h3>{item.title}</h3>
            <p>{item.description}</p>
            <button onClick={() => handleDelete(item.id)} style={{ padding: '6px 12px', background: '#ef4444', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer', marginTop: '8px' }}>
              Delete
            </button>
          </article>
        ))}
      </section>
    </div>
  )
}
