import { Connect } from "@/components/connect"
import { Experience } from "@/components/experience"
import { Header } from "@/components/header"
import { NavBar } from "@/components/nav-bar"
import { Post } from "@/components/post"
import { Projects } from "@/components/projects"
import { Education, Skills } from "@/components/skill-education"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { DotFilledIcon } from "@radix-ui/react-icons"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col gap-2 md:gap-4 max-w-5xl p-2 md:p-4">
      <NavBar />
      <div className="flex gap-2 md:gap-4 md:p-4">
        <Card className="flex flex-col p-6 rounded-3xl w-full">
          <div className="flex justify-between items-center">
            <h1>Student</h1>
            <div className="flex items-center p-1 pr-4 rounded-full bg-green-200 bg-opacity-30">
              <DotFilledIcon className="w-6 h-6 text-green-500" />
              <p className="font-medium text-green-700">Open to work</p>
            </div>
          </div>
          <div className="flex items-center mt-8 gap-8">
            <div>
              <h1 className="text-2xl font-semibold">{"I'm Alex Vongseng"}</h1>
              <p className="text-muted-foreground pt-4">Information Technology Infrastructure & Computer Science Student @ the University of Minnesota - TC</p>
              <div>
                <Button className="mt-4">
                  Hire Me
                </Button>
                <Button variant='outline' className="mt-4 ml-4">
                  Download CV
                </Button>
              </div>
            </div>
            <div className="border-[5px] rounded-full bg-muted p-4">
              <img className="object-contain w-50 h-50 " src="/image/me.png" alt="me" />
            </div>
          </div>
          <Card className="bg-muted mt-8 rounded-3xl p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="">Projects</h1>
              <Button variant='outline' className="rounded-2xl" asChild>
                <div className="flex gap-2 items-center">
                  <p>View All</p>
                  <ArrowRight className="w-4 h-4" />
                </div>
                
              </Button>
            </div>
            <Card className="p-4 rounded-3xl hover:scale-[102%] hover:shadow-lg transition">
            <Link href="/" className="">
                <h2 className="text-lg font-medium">Personal Website</h2>
                <p className="text-muted-foreground pt-2">
                  This website was built using Next.js, TailwindCSS, and TypeScript. It is hosted on Vercel and is open source on GitHub.
                </p>
            </Link>
            </Card>
            <Card className="p-4 rounded-3xl hover:scale-[102%] hover:shadow-lg transition">
            <Link href="/" className="">
                <h2 className="text-lg font-medium">Do It</h2>
                <p className="text-muted-foreground pt-2">
                  {/* To do list app */}
                  A to-do list app built with React, TypeScript, and TailwindCSS. It is hosted on Vercel and is open source on GitHub.
                </p>
            </Link>
            </Card>
          </Card>
          <Card className="bg-muted mt-8 rounded-3xl p-4 space-y-4">
            <div className="flex justify-between items-center">
              <h1 className="">Posts</h1>
              <Button variant='outline' className="rounded-2xl" asChild>
                <div className="flex gap-2 items-center">
                  <p>View All</p>
                  <ArrowRight className="w-4 h-4" />
                </div>
              </Button>
            </div>
            <Card className="p-4 rounded-3xl hover:scale-[102%] hover:shadow-lg transition">
            <Link href="/" className="">
                <h2 className="text-lg font-medium">How I Built This Site</h2>
                <p className="text-muted-foreground pt-2">
                  {/* How I built this site */}
                  A walkthrough of how I built this site using Next.js, TailwindCSS, and TypeScript.
                </p>
            </Link>
            </Card>
            <Card className="p-4 rounded-3xl hover:scale-[102%] hover:shadow-lg transition">
            <Link href="/" className="">
                <h2 className="text-lg font-medium">Building Do It</h2>
                <p className="text-muted-foreground pt-2">
                  {/* How i built do it*/}
                  A walkthrough of how I built Do It, a to-do list app built with React, TypeScript, and TailwindCSS.
                </p>
            </Link>
            </Card>
          </Card>
        </Card>
        
      </div>
    </main>
  )
}
