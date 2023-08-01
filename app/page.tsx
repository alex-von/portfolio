import { Connect } from "@/components/connect"
import { Header } from "@/components/header"
import { Post } from "@/components/post"
import { Projects } from "@/components/projects"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <Header />
      <div className="md:flex mx-auto mt-12 w-full max-w-4xl ">
        <Projects />
        <Post />
      </div>
      <div className="md:flex mx-auto mb-12 w-full max-w-4xl ">
        <Connect />
      </div>
    </main>
  )
}
