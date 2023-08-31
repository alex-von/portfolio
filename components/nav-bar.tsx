import { Contact } from "./contact"
import { ModeToggle } from "./mode-toggle"
import { Logo } from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"
import { Card } from "@/components/ui/card"

export const NavBar = () => {
    return (
        <Card className="flex justify-between w-full p-4 rounded-3xl dark:bg-accent sticky top-2 md:top-4">
            <Button variant='link' className="p-0" asChild>
            <Link href="/" className="flex items-center">
                    <Logo />
                </Link>
            </Button>
            <div className="flex space-x-3">
                <Contact />
                <ModeToggle />
            </div>
        </Card>
    )
}