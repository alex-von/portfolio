import { LinkedInLogoIcon, GitHubLogoIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <nav className="flex w-fit">
            <Button variant="ghost" size="icon" asChild>
                <a target="_blank" href="https://www.linkedin.com/in/alex-vongseng/">
                    <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a target="_blank" href="https://github.com/alex-von">
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] text-zinc-700 dark:text-white"/>
                </a>
            </Button>
        </nav>
    )
};