'use client'

import { 
    SiJavascript, 
    SiNextdotjs, 
    SiPython, 
    SiTailwindcss, 
    SiTypescript, 
    SiNodedotjs ,
    SiC,
    SiGit,
    SiMysql
} from 'react-icons/si'

import { FaJava } from 'react-icons/fa'
import { Button } from '@/components/ui/button'
import { useState } from 'react'
import { ChevronDownIcon, ChevronUpIcon, ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'

export const Skills = () => {
    const [showMore, setShowMore] = useState(false)

    const moreSkills = 
        <>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiNodedotjs className="w-4 h-4" />
                    <p>Node.js</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiGit className="w-4 h-4" />
                    <p>Git</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiTypescript className="w-4 h-4" />
                    <p>Typescript</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiTailwindcss className="w-4 h-4" />
                    <p>Tailwind</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <FaJava className="w-4 h-4" />
                    <p>Java</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiC className="w-4 h-4" />
                    <p>C</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
            <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                <div className='flex items-center gap-2'>
                    <SiMysql className="w-4 h-4" />
                    <p>MySQL</p>   
                </div>
                <div className='border-b w-full'></div>
                <p className='text-zinc-500'>Basic</p>
            </li>
        </>

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
                    <div className='flex justify-between text-xs text-zinc-500'>
                        <p>Bachelor of Applied Science</p>
                        <p>May 2024</p>
                    </div>
                    <p className='text-xs mt-4'>Information Technology Infrastructure</p>
                    <p className='text-xs'>Computer Science</p>
                    <Link href='/projects' className="flex gap-2 justify-end text-xs font-medium text-zinc-500 hover:underline hover:text-white transition">
                        Learn More
                        <ArrowRightIcon className='w-4 h-4' />
                    </Link>
                </div>
            </div>
            <div className="space-y-4 rounded-xl border p-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Anoka Rasmey Community College
                    </h1>
                    <div className='flex justify-between text-xs text-zinc-500'>
                        <p>Associate Degree</p>
                        <p>Aug 2022</p>
                    </div>
                </div>
            </div>
            <ul className="rounded-xl border p-4 space-y-4">
                <div>
                    <h1 className='text-sm font-medium'>
                        Techonologies and Languages
                    </h1>
                    <p className='text-xs text-zinc-500'>
                        Things I know and have used
                    </p>
                </div>
                <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <div className='flex items-center gap-2'>
                        <SiJavascript className="w-4 h-4" />
                        <p>Javascript</p>   
                    </div>
                    <div className='border-b w-full'></div>
                    <p className='text-zinc-500'>Intermediate</p>
                </li>
                <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <div className='flex items-center gap-2'>
                        <SiPython className="w-4 h-4" />
                        <p>Python</p>   
                    </div>
                    <div className='border-b w-full'></div>
                    <p className='text-zinc-500'>Intermediate</p>
                </li>
                <li className='flex justify-between gap-2 items-center text-sm font-medium text-zinc-800 dark:text-white'>
                    <div className='flex items-center gap-2'>
                        <SiNextdotjs className="w-4 h-4" />
                        <p>Next.js</p>   
                    </div>
                    <div className='border-b w-full'></div>
                    <p className='text-zinc-500'>Basic</p>
                </li>

                { showMore ? moreSkills : null}
                
                <Button variant='ghost' className='w-full rounded-xl text-xs text-zinc-500' asChild onClick={() => setShowMore(!showMore)}>
                    { showMore ? 
                        <div className='flex gap-2'>
                            <p>Show Less</p>
                            <ChevronUpIcon className='w-4 h-4' />
                        </div> 
                        : 
                        <div className='flex gap-2' >
                            <p>Show More</p>
                            <ChevronDownIcon className='w-4 h-4' />
                        </div>
                    }
                </Button>

            </ul>
        </div>
    )
}