import ItemsList from './components/ItemsList'

export default function Home() {
  return (
    <div>
      <h2>Dashboard</h2>
      <p>Manage items below. Add, view, and delete items from the list.</p>
      <ItemsList />
    </div>
  )
}
