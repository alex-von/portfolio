import { ModeToggle } from '@/components/mode';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  GitHubLogoIcon,
  LinkedInLogoIcon,
  SewingPinFilledIcon
} from '@radix-ui/react-icons'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { RiBlueskyFill } from "react-icons/ri";

export default function Home() {
  return (
    <main className="w-full min-h-screen flex flex-col justify-center items-center px-6 pt-6 md:max-w-md md:m-auto md:min-h-[65vh]">
      {/* Location */}
      <div className="w-full h-full">
        <div className='flex justify-between items-center opacity-50'>
          <div className='flex items-center space-x-2'>
            <SewingPinFilledIcon />
            <p className='text-sm'>Minneapolis, Mn</p>
          </div>
          <ModeToggle />
        </div>
        {/* Intro Header  */}
        <div className='flex flex-col justify-end py-12'>
          <h1 className='text-2xl font-medium pb-6'>Alex Vongseng</h1>
          <p className='text-m text-muted-foreground'>Software / Network Engineer</p>
        </div>
        {/* Menu */}
        <div className='pb-6'>
          <Accordion type="single" collapsible className='border-b-0'>
            <AccordionItem value="about">
              <AccordionTrigger className='border-b-0'>About</AccordionTrigger>
              <AccordionContent className='border-0'>
                <Avatar className='aspect-square'>
                  <AvatarImage src="https://github.com/alex-von.png" alt="Alex Vongseng" />
                  <AvatarFallback>AV</AvatarFallback>
                </Avatar>
                <p className='pt-3'>
                  I am a recent graduate from the University of Minnesota, where I earned a Bachelor’s degree in Information Technology Infrastructure and a minor in Computer Science. Currently, I am a Network Automation Engineer at 3M, where I focus on monitoring, optimizing, and automating cloud network systems to drive efficiency and innovation.
                </p>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="experience">
              <AccordionTrigger>Experience</AccordionTrigger>
              <AccordionContent className='space-y-3'>
                <div className='border-l-2 border-primary pl-3'>
                  <h3 className='font-bold'>Network Automation Engineer</h3>
                  <h4 className='pb-3'>3M | Jan 2025 - Present</h4>
                  <p>
                    I am a Network Automation Engineer at 3M, where I focus on monitoring, optimizing, and automating cloud network systems to drive efficiency and innovation.
                  </p>
                </div>
                <div className='border-l-2 border-primary pl-3'>
                  <h3 className='font-bold'>IT Internship</h3>
                  <h4 className='pb-3'>3M | May 2024 - Aug 2024</h4>
                  <p>
                    I worked as an IT Intern at 3M, where I focused on data analytics, front-end development, and aws.
                  </p>
                </div>
                <div className='pt-6'>
                  <Link href='https://linkedin.com/in/alex-vongseng' target='_blank'>
                    <div className='flex items-center space-x-2 hover:underline'>
                      <LinkedInLogoIcon className='text-muted-foreground w-4 h-4' />
                      <span className=''>View LinkedIn</span>
                    </div>
                  </Link>
                </div>
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="connect">
              <AccordionTrigger>Connect</AccordionTrigger>
              <AccordionContent>
                <p>
                  Best way to reach me is through <Link className='underline hover:text-muted-foreground' href='https://linkedin.com/in/alex-vongseng' target='_blank'>LinkedIn.</Link>
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
      {/* Footer */}
      <div className='border-t border-muted-background py-3 w-full md:mt-[10vh]'>
        <div className='flex justify-between items-center '>
          <p className='text-xs text-muted-foreground'>© 2025 Alex Vongseng</p>
          <div className='flex space-x-2'>
            <Button variant='ghost' asChild>
              <Link href='https://github.com/alex-von' target='_blank'>
                <GitHubLogoIcon className='text-muted-foreground' />
              </Link>
            </Button>
            <Button variant='ghost' asChild>
              <Link href='https://linkedin.com/in/alex-vongseng' target='_blank'>
                <LinkedInLogoIcon className='text-muted-foreground' />
              </Link>
            </Button>
            <Button variant='ghost' asChild>
              <Link href='https://bsky.app/profile/alexvon.dev' target='_blank'>
                <RiBlueskyFill className='text-muted-foreground' />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </main>
  );
}
