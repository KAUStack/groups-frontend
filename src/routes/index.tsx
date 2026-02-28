import { createFileRoute } from '@tanstack/react-router'
import { Hero } from '@/components/hero'
import { Search } from '@/components/search'

export const Route = createFileRoute('/')({ component: App })

function App() {
  return (
    <main className="flex-1 flex flex-col items-center px-4 py-8 max-w-5xl mx-auto w-full">
      <Hero />
      <Search />
    </main>
  )
}
