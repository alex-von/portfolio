import { ModeToggle } from "@/components/mode-toggle"
import { NavBar } from "@/components/nav-bar"
import { Welcome } from "@/components/welcome"
export default function Home() {
  return (
    <main className="lg:px-24 md:px-12 p-6">
      <NavBar />
      <Welcome />
    </main>
  )
}
