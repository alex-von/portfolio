import { SinglePostHeader } from "@/components/header"
import { ChevronRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import gfm from "remark-gfm"
import { getSinglePost } from "@/lib/notion"

export default async function Home({ params }: { params: { slug: string } }) {
    const post = (await getSinglePost(params.slug))
    return (
        <main className="w-full min-h-screen flex flex-col">
            <SinglePostHeader post={
                {
                    title: post.metadata.title,
                    description: post.metadata.description
                }
            } />
            <div className="space-y-4 mx-auto my-12 w-full max-w-5xl p-4">
                <div className="flex items-center text-sm gap-1 text-zinc-500 mb-12">
                <Link href="/" className="hover:underline">home</Link>
                <ChevronRightIcon className="w-4 h-4" />
                <Link href="/posts" className="hover:underline">posts</Link>
                <ChevronRightIcon className="w-4 h-4" />
                <p>{post.metadata.title}</p>
                </div>
                <ReactMarkdown 
                    remarkPlugins={[gfm]} 
                    className="break-words prose-table:border prose-td:p-2 prose-td:border prose-th:border prose prose-sm prose-zinc dark:prose-invert max-w-none prose-h1:font-semibold  prose-h2:font-semibold prose-h3:font-semibold border-b pb-16"
                >
                    {post.markdown}
                </ReactMarkdown>
                <p className="text-xs p-2 bg-accent w-fit rounded-lg">Last Updated: {post.metadata.date}</p>
            </div>
        </main>
    )
}
