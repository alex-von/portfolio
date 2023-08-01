import { LinkedInLogoIcon, GitHubLogoIcon, FileTextIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Mail } from 'lucide-react';

export const Contact = () => {
    return (
        <nav className="flex w-fit">
            <Button variant="ghost" size="icon" asChild>
                <a target="_blank" href="https://www.linkedin.com/in/alex-vongseng/">
                    <LinkedInLogoIcon className="h-[1.2rem] w-[1.2rem] light:text-zinc-700"/>
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a target="_blank" href="https://github.com/alex-von">
                    <GitHubLogoIcon className="h-[1.2rem] w-[1.2rem] light:text-zinc-700"/>
                </a>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <a href="mailto:alex.vongseng@gmail.com">
                    <Mail className="h-[1.2rem] w-[1.2rem] light:text-zinc-700"/>
                </a>
            </Button>
        </nav>
    )
};