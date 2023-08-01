import { Button } from "./ui/button";
import { GitHubLogoIcon } from '@radix-ui/react-icons';
import { SiNextdotjs, SiTailwindcss, SiTypescript } from 'react-icons/si';


type Project = {
    title: string,
    description: string,
    technologies: string[],
    url: string,
    github_url: string,
    image_url: string,
    timeframe: string
}

const projects = [
    {
      title: 'Notion ToDo App',
      description: 'A simple todo app built with Next.js, Tailwind CSS, and Supabase.',
      technologies: ['NextJS', 'Tailwind CSS', 'Supabase'],
      url: '',
      github_url: 'https://github.com/user/alex-von',
      image_url: '',
      timeframe: 'June 2023',
    },
    // Add more projects as needed...
    {
      title: 'shotby.alexv',
      description: 'A photography portfolio for my photography to showcase my work and let clients book photoshoots and view their photo.',
      technologies: ['NextJS', 'Tailwind CSS', 'React', 'TypeScript', 'Supabase', 'Stripe'],
      url: 'https://shotbyalexv.com',
      github_url: 'https://github.com/alex-von',
      image_url: '',
      timeframe: 'July 2023',
    },
    {
      title: 'Portfolio Website',
      description: 'A portfolio website to showcase my full-stack development skills and projects.',
      technologies: ['NextJS', 'Tailwind CSS', 'React', 'TypeScript', 'Supabase'],
      url: '',
      github_url: 'https://github.com/alex-von', 
      image_url: '',
      timeframe: 'August 2023',
    },
  ];

const ProjectCard = (project: Project) => {
    return (
        <div className="flex flex-col space-y-3 rounded-xl border p-6 cursor-pointer">
            <div>
                <div className="flex justify-between pb-3">
                    <h3 className="font-medium text-sm">{project.title}</h3>
                    <div className="flex space-x-2">
                        <SiNextdotjs className='w-4 h-4'></SiNextdotjs>
                        <SiTailwindcss className='w-4 h-4'></SiTailwindcss>
                        <SiTypescript className='w-4 h-4'></SiTypescript>
                    </div>
                </div>
                <p className="text-xs">{project.description}</p>
            </div>
            <div>
            <Button variant='secondary' className='w-full rounded-xl text-xs' asChild>
                <a target="_blank" href="https://github.com/alex-von">
                    <GitHubLogoIcon className='w-4 h-4 mr-2' />
                    View on GitHub
                </a>
            </Button>
            </div>
        </div>
    )
}

export const Projects = () => {
    return (
        <div className="flex flex-col space-y-6 mx-auto p-4 w-full">
            <div>
                <h1 className="font-medium">Projects</h1>
                <p className="text-xs text-zinc-500">Things I built</p>
            </div>
            <div className="space-y-4">
                {projects.map((project, index) => (
                    <ProjectCard key={index} {...project} />
                ))}
            </div>
            <Button variant='secondary' className='w-full rounded-xl text-xs' asChild>
                <a target="_blank" href="">
                    More Projects
                </a>
            </Button>
        </div>
    )
}