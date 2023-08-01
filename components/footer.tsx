import Link from 'next/link'

export const Footer = () => {
    return (
        <footer className="border-t p-6 sticky">
            <div className="flex justify-between max-w-4xl mx-auto">
                <p className="text-semibold text-xs text-zinc-600">
                    Made by <Link className="underline" href="/">Alex</Link>
                </p>
                <p className="text-xs text-zinc-600">
                    © 2023 Alex Vongseng
                </p>
            </div>
        </footer>
    )
}