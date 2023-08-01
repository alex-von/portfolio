import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="border-t p-6 sticky">
            <div className="flex justify-between max-w-4xl mx-auto items-center">
                <div className='flex gap-2 items-center'>
                    <Avatar className='aspect-square w-6 h-6'>
                        <AvatarImage src="https://github.com/alex-von.png" alt="Alex Vongseng" />
                        <AvatarFallback>AV</AvatarFallback>
                    </Avatar>
                    <p className="text-semibold text-xs text-zinc-600">
                        Made by <Link className="underline" href="/">Alex</Link>
                    </p>
                </div>
                <p className="text-xs text-zinc-600">
                    © 2023 Alex Vongseng
                </p>
            </div>
        </footer>
    )
}