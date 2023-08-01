import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, FileTextIcon } from '@radix-ui/react-icons'
import { SiJavascript, SiNextdotjs, SiPython, SiSupabase, SiTailwindcss, SiTypescript } from 'react-icons/si'

export const Skills = () => {
    return (
        <div className="flex flex-col space-y-4 mx-auto p-4 w-full">
            <div>
                <h1 className="font-medium">Skills/Education</h1>
                <p className="text-xs text-zinc-500">Here are some of my skills and education.</p>
            </div>
            <div className="space-y-4 rounded-xl border p-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Univeristy of Minnesota
                    </h1>
                    <p className='text-xs text-zinc-500'>
                        Bachelor of Science in Computer Science | May 2024
                    </p>
                </div>
            </div>
            <div className="space-y-4 rounded-xl border p-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Anoka Rasmey Community College
                    </h1>
                    <p className='text-xs text-zinc-500'>
                        General Education | August 2021
                    </p>
                </div>
            </div>
            <div className="grid grid-cols-2 space-y-4 rounded-xl border p-4">
                <div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiNextdotjs className="w-4 h-4" />
                    Next.js
                </div>
                <div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiTailwindcss className="w-4 h-4" />
                    Tailwind CSS
                </div>
                <div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiSupabase className="w-4 h-4" />
                    Supabase
                </div>
                <div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiPython className="w-4 h-4" />
                    Python
                </div>
                <div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiJavascript className="w-4 h-4" />
                    Javascript
                </div><div className='flex gap-4 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <SiTypescript className="w-4 h-4" />
                    Typescript
                </div>
            </div>
        </div>
    )
}