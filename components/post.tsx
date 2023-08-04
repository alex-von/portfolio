import { Button } from "./ui/button"
import { ArrowRightIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import { getAllPublished } from "@/lib/notion"


export const AllPosts = async () => {
    const posts = await getAllPublished()

    return (
        posts.map((post) => (
            <div className="space-y-3 rounded-xl p-4 hover:bg-secondary border transition">
            <Link href={`/posts/${post.slug}`} key={post.id}>
                <h1 className="text-sm font-semibold">{post.title}</h1>
                <h2>{post.description}</h2>
            </Link>
            </div>
        ))
    )
}

export const RecentPost = async () => {
    const posts = await getAllPublished()

    return (
        <div className="flex flex-col space-y-4 mx-auto p-4 w-full">
            <Link href='/posts'>
                <h1>Posts</h1>
                <h2>Things I wrote</h2>
            </Link>
            {
                // only show 3 most recent posts
                posts.slice(0,3).map((post) => (
                    <div className="space-y-3 rounded-xl p-4 hover:bg-secondary border transition">
                    <Link href={`/posts/${post.slug}`} key={post.id}>
                        <h1 className="text-sm font-semibold">{post.title}</h1>
                        <h2>{post.description}</h2>
                    </Link>
                    </div>
                ))
            }
            <Link href='/posts' className="flex gap-2 justify-end items-center text-sm font-medium text-zinc-500 hover:underline">
                More Posts
                <ArrowRightIcon className='w-4 h-4' />
            </Link>
        </div>
    )
}