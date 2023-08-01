import { Contact } from "./contact"
import { ModeToggle } from "./mode-toggle"
import { Logo } from "./logo"
import Link from "next/link"

export const NavBar = () => {
    return (
        <nav className="flex justify-between w-full">
            <Link href="/" className="flex items-center">
                <Logo />
            </Link>
            <div className="flex space-x-3">
                <Contact />
                <ModeToggle />
            </div>
        </nav>
    )
}