import { PostHeader } from "@/components/header"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <PostHeader />
      <div className="md:flex mx-auto my-12 w-full max-w-4xl p-4">
          <div className="flex flex-col space-y-3 rounded-xl bg-secondary p-6 animate-pulse w-full">
              <h3 className="text-xs">Posts Coming Soon</h3>
          </div>
      </div>
    </main>
  )
}
