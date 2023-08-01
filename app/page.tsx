import { Footer } from "@/components/footer"
import { Header } from "@/components/header"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <Projects />
      <Footer />
    </main>
  )
}
