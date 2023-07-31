
export const Welcome = () => {
    return (
        <header className='h-[75vh] '>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div className='w-full'>
                        <h1 className="font-medium text-primary text-lg md:text-xl">
                            Alex Vongseng
                        </h1>
                        <p className="text-sm font-medium md:text-md text-zinc-500">
                            Senior @ University of Minnesota - Twin Cities
                        </p>
                    </div>
                </div>
                <div>
                    <p className='text-sm md:text-lg lg:max-w-[75%]'>
                    I'm a passionate and dedicated student at the University of Minnesota, studying Information Technology Infrastructure and Computer Science. I have a strong interest in full stack development and I'm currently honing my skills in using modern tools like React, Next.js, Tailwind CSS, Langchain, and Supabase.
                    </p>
                </div>
                <div>
                    <p className="text-sm animate-pulse font-medium text-accent-foreground border-2 p-2 w-fit rounded-xl bg-accent shadow-md">Site Currently Under Construction<span className="pl-3">🔨</span></p>
                </div>
            </div>
        </header>
    )
};