import { Button } from "./ui/button"
import { ArrowRightIcon } from '@radix-ui/react-icons'

type Post = {
    title: string,
    description: string,
    url: string,
    image_url: string,
}

const PostCard = (post: Post) => {
    return (
        <div className="flex flex-col space-y-3 rounded-xl border p-6 cursor-pointer hover:bg-accent transition ease-in-out">
            <h3 className="font-medium text-sm">{post.title}</h3>
            <p className="text-xs">{post.description}</p>
        </div>
    )
}

export const Post = () => {

    const posts: Post[] = [
        {
            title: 'Notion ToDo App', 
            description: 'A simple todo app built with Next.js, Tailwind CSS, and Supabase.', 
            url: '', 
            image_url: ''
        },
        {
            title: 'shotby.alexv', 
            description: 'A photography portfolio for my photography to showcase my work and let clients book photoshoots and view their photo.', 
            url: 'https://shotbyalexv.com', 
            image_url: ''
        },
        {
            title: 'Portfolio Website', 
            description: 'A portfolio website to showcase my full-stack development skills and projects.', 
            url: '', 
            image_url: ''
        }
    ]

    return (
        <div className="flex flex-col space-y-6 mx-auto p-4 w-full">
            <div>
                <h1 className="font-medium">Posts</h1>
                <p className="text-xs text-zinc-500">Things I wrote</p>
            </div>
            {/* <div className="space-y-4">
                {posts.map((posts, index) => (
                    <PostCard key={index} {...posts} />
                ))}
            </div>
            <Button variant='secondary' className='w-full rounded-xl text-xs' asChild>
                <a target="_blank" href="">
                    More Posts
                    <ArrowRightIcon className='w-4 h-4 ml-2' />
                </a>
            </Button> */}
            <div className="flex flex-col space-y-3 rounded-xl bg-secondary p-6 animate-pulse">
                <h3 className="text-xs">Posts Coming Soon</h3>
            </div>
        </div>
    )
}