import { ModeToggle } from '@/components/mode';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ChevronRightIcon, GitHubLogoIcon, LinkedInLogoIcon, SewingPinFilledIcon } from '@radix-ui/react-icons'

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
          <h4 className='pb-6'>Menu</h4>
          <div>
            <ul className='space-y-2 text-muted-foreground'>
              <li>
                <Button variant='ghost' className='w-full h-[50px] flex justify-between items-center text-lg'>
                  <Link href='/'>
                    About
                  </Link>
                  <ChevronRightIcon />
                </Button>
              </li>
              <li>
                <Button variant='ghost' className='w-full h-[50px] flex justify-between items-center text-lg'>
                  <Link href='/'>
                    Projects
                  </Link>
                  <ChevronRightIcon />
                </Button>
              </li>
              <li>
                <Button variant='ghost' className='w-full h-[50px] flex justify-between items-center text-lg'>
                  <Link href='/'>
                    Connect
                  </Link>
                  <ChevronRightIcon />
                </Button>
              </li>
            </ul>
          </div>
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
            </div>
        </div>
      </div>
    </main>
  );
}
