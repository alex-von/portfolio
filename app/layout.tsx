import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { ThemeProvider } from "@/components/theme-provider"
import Head from 'next/head'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: "Alex Vongseng",
  description: 'Alex Vongseng is a student | aspiring software engineer studying at the University of Minnesota in Information Technology Infrastructure and Computer Science.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <Head>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <div className='flex flex-col min-h-screen max-w-7xl m-auto'>
            {children}
          </div>
        </ThemeProvider>
      </body>
    </html>
  )
}
