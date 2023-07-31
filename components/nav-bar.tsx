import { Contact } from "./contact"
import { ModeToggle } from "./mode-toggle"
import { Logo } from "./logo"

export const NavBar = () => {
    return (
        <nav className="flex justify-between">
            <Logo />
            <div className="flex space-x-3">
                <Contact />
                <ModeToggle />
            </div>
        </nav>
    )
}