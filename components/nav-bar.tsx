import { Contact } from "./contact"
import { ModeToggle } from "./mode-toggle"
import { Logo } from "./logo"
import Link from "next/link"
import { Button } from "./ui/button"

export const NavBar = () => {
    return (
        <nav className="flex justify-between w-full">
            <Button variant='link' className="p-0" asChild>
            <Link href="/" className="flex items-center">
                    <Logo />
                </Link>
            </Button>
            <div className="flex space-x-3">
                <Contact />
                <ModeToggle />
            </div>
        </nav>
    )
}