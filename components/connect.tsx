import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon, FileTextIcon } from '@radix-ui/react-icons'

export const Connect = () => {
    return (
        <div className="flex flex-col space-y-4 mx-auto p-4 w-full">
            <div>
                <h1>Connect</h1>
                <h2>Where to find me</h2>
            </div>
            <div className="space-y-4 rounded-xl border p-4">
                <a className='flex gap-3 items-center text-sm font- underline' target="_blank" href="https://www.linkedin.com/in/alex-vongseng/">
                    <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    /in/alex-vongseng/
                </a>
                <a className='flex gap-3 items-center text-sm  underline' target="_blank" href="https://github.com/alex-von">
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    /alex-von
                </a>
                <a className='flex gap-3 items-center text-sm font- underline' href="mailto:alex.vongseng@gmail.com">
                    <EnvelopeClosedIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    alex.vongseng@gmail.com
                </a>
                {/* <a className='flex gap-3 items-center text-sm font- underline'>
                    <FileTextIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    View/Download Resume
                </a> */}
            </div>
        </div>
    )
}