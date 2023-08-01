import { GitHubLogoIcon, LinkedInLogoIcon, EnvelopeClosedIcon } from '@radix-ui/react-icons'

export const Connect = () => {
    return (
        <div className="flex flex-col space-y-6 mx-auto p-4 w-full">
            <div>
                <h1 className="font-medium">Connect</h1>
                <p className="text-xs text-zinc-500">Where to find me</p>
            </div>
            <div className="flex flex-col space-y-3 rounded-xl border p-6">
                <a className='flex gap-3 items-center text-sm font- underline' target="_blank" href="https://www.linkedin.com/in/alex-vongseng/">
                    <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    linkedin.com/in/alex-vongseng/
                </a>
                <a className='flex gap-3 items-center text-sm  underline' target="_blank" href="https://github.com/alex-von">
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    github.com/alex-von
                </a>
                <a className='flex gap-3 items-center text-sm font- underline' href="mailto:alex.vongseng@gmail.com">
                    <EnvelopeClosedIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                    alex.vongseng@gmail.com
                </a>
            </div>
        </div>
    )
}