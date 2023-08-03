import { NavBar } from "./nav-bar";
import { Welcome } from "./welcome";

export const Header = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-5xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <Welcome />
            </div>
      </header>
    ) 
};

export const PostHeader = () => {
    return (
        <header className="flex flex-col bg-secondary border-b">
            <div className="max-w-5xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1>
                            Posts
                        </h1>
                        <h2>
                            Things I wrote
                        </h2>
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
            <div className="max-w-5xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1>
                            Projects
                        </h1>
                        <h2>
                            Things I made
                        </h2>
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
            <div className="max-w-5xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1>
                            University of Minnesota - Twin Cities
                        </h1>
                        <h2>
                            Information Technology Infrastructure | Computer
                        </h2>
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
            <div className="max-w-5xl mx-auto p-4 pb-16 w-full">
                <NavBar />
                <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1>
                            Education
                        </h1>
                        <h2>
                            {"Places I've learned from"}
                        </h2>
                    </div>
                </div>
            </div>
        </div>
            </div>
      </header>
    ) 
};