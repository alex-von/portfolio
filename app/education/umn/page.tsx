import { UmnHeader } from "@/components/header"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <UmnHeader />
      <div className="space-y-4 mx-auto my-12 w-full max-w-4xl p-4">
          <div className="flex text-xs gap-1 text-zinc-500 mb-12">
            <Link href="/" className="hover:underline">home</Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link href="/education" className="hover:underline">education</Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link href='/education/umn' className="hover:underline">university of minnesota</Link>
          </div>
          <div className="flex flex-col space-y-3 rounded-xl bg-secondary p-4 w-full">
              <h3 className="text-xs">Education coming soon</h3>
          </div>
      </div>
    </main>
  )
}
