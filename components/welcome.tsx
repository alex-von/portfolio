
export const Welcome = () => {
    const about = "Im a passionate and dedicated student at the University of Minnesota, studying Information Technology Infrastructure and Computer Science. I have a strong interest in full stack development and I'm currently honing my skills in using modern tools like React, Next.js, Tailwind CSS, Langchain, and Supabase."
    return (
        <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            Alex Vongseng
                        </h1>
                        <p className="text-sm font-medium text-zinc-500">
                            Senior @ University of Minnesota - Twin Cities
                        </p>
                    </div>
                </div>
                {/* <div>
                    <p className='lg:max-w-[75%]'>
                        {about}
                    </p>
                </div> */}
            </div>
        </div>
    )
};