import { NavBar } from "./nav-bar";
import { Welcome } from "./welcome";

export const Header = () => {
    return (
        <header className="flex flex-col bg-secondary border-b shadow">
            <div className="max-w-5xl mx-auto p-4 pb-24 w-full">
            <NavBar />
            <Welcome />
            </div>
      </header>
    ) 
};