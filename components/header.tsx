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

export const PostHeader = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-4xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            Posts
                        </h1>
                        <p className="text-xs font-medium text-zinc-500">
                            Things I wrote
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
      </header>
    ) 
};

export const ProjectsHeader = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-4xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            Projects
                        </h1>
                        <p className="text-xs font-medium text-zinc-500">
                            Things I made
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
      </header>
    ) 
};

export const UmnHeader = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-4xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            University of Minnesota - Twin Cities
                        </h1>
                        <p className="text-xs font-medium text-zinc-500">
                            Information Technology Infrastructure | Computer
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
      </header>
    ) 
};

export const EducationHeader = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-4xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            Education
                        </h1>
                        <p className="text-xs font-medium text-zinc-500">
                            {"Places I've learned from"}
                        </p>
                    </div>
                </div>
            </div>
        </div>
            </div>
      </header>
    ) 
};