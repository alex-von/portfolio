import { ArrowRightIcon } from "@radix-ui/react-icons";

export const Welcome = () => {
    return (
        <div className='mt-32'>
            <div className='flex flex-col justify-center h-full space-y-6'>
                <div className='flex items-center'>
                    <div>
                        <h1 className="font-medium text-primary">
                            Alex Vongseng
                        </h1>
                        <p className="text-xs font-medium text-zinc-500">
                            CS & IT @ University of Minnesota - Twin Cities
                        </p>
                        <a href="https://linkedin.com/in/alex-vongseng" className="hover:underline flex items-center text-sm font-medium mt-6">
                            About me
                            <ArrowRightIcon className="w-4 h-4 ml-2" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
};