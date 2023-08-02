import { EducationHeader, UmnHeader } from "@/components/header"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import { ArrowRightIcon } from "@radix-ui/react-icons"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col">
      <EducationHeader />
      <div className="space-y-4 mx-auto my-12 w-full max-w-4xl p-4">
          <div className="flex text-xs gap-1 text-zinc-500 mb-12">
            <Link href="/" className="hover:underline">home</Link>
            <ChevronRightIcon className="w-4 h-4" />
            <Link href="/education" className="hover:underline">education</Link>
          </div>
          <div className="space-y-4 rounded-xl border p-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Univeristy of Minnesota
                    </h1>
                    <div className='flex justify-between text-xs text-zinc-500'>
                        <p>Bachelor of Applied Science</p>
                        <p>May 2024</p>
                    </div>
                    <p className='text-xs mt-4'>Information Technology Infrastructure</p>
                    <p className='text-xs'>Computer Science</p>
                    <Link href='/education/umn' className="flex gap-2 justify-end text-xs font-medium text-zinc-500 hover:underline hover:text-white transition">
                        Learn More
                        <ArrowRightIcon className='w-4 h-4' />
                    </Link>
                </div>
            </div>
            <div className="space-y-4 rounded-xl border p-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Anoka Rasmey Community College
                    </h1>
                    <div className='flex justify-between text-xs text-zinc-500'>
                        <p>Associate Degree</p>
                        <p>Aug 2022</p>
                    </div>
                </div>
            </div>
      </div>
    </main>
  )
}
