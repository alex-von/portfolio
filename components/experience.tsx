import Link from 'next/link'
import { ArrowRightIcon, CircleIcon } from '@radix-ui/react-icons'

type Job = {
    title: string,
    company: string,
    date: string,
}

const Job = ({ title, company, date, }: Job) => {
    return (
        <div>
            <div className='flex items-center justify-between'>
                <div className='flex items-center space-x-4'>
                    <CircleIcon className='w-5 h-5' />
                    <p className='text-sm font-semibold'>{title}</p>
                </div>
                <p className='text-sm font-medium text-zinc-500 '>{company}</p>
            </div>
            <div className='border-l border-primary m-2.5 pl-6'>
                <p className='text-xs text-zinc-500 pb-4'>{date}</p>
                <p className='text-sm'>
                    Placeholder
                </p>
            </div>
        </div>
    )
}

export const Experience = () => {
    return (
        <div className="flex flex-col space-y-4 mx-auto p-4 w-full">
            <Link href='/posts'>
                <h1 className="font-medium">Experience</h1>
                <p className="text-xs text-zinc-500">{"Things I've Done"}</p>
            </Link>
            
            <div className="flex flex-col rounded-xl border p-4">
                <Job 
                    title='Position' 
                    company={'Company'}
                    date={'Start Date - End Date'}
                />
            </div>
            
        </div>
    )
}