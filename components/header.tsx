import { NavBar } from "./nav-bar";
import { Welcome } from "./welcome";

export const Header = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-4xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <Welcome />
            </div>
      </header>
    ) 
};