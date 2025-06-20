'use client'

import { usePathname } from 'next/navigation'
import SideBar from '@/components/SideBar'
import MailTopBar from '@/components/MailTopBar'
import PictureTopBar from '@/components/PictureTopBar'

export default function AppLayout({ children }: { children: React.ReactNode }) {
    const pathname = usePathname()

    let TopBar = null
    if (pathname.startsWith('/mails')) {
        TopBar = <MailTopBar />
    } else if (pathname.startsWith('/pictures')) {
        TopBar = <PictureTopBar />
    }
    const isAuthPage = pathname === '/login'
    return (
        <>
            {TopBar}
            <div className="flex min-h-[calc(100vh-48px)]">
                {!isAuthPage && <SideBar />}
                <main className={!isAuthPage ? 'flex-1 p-6 bg-white' : 'w-full'}>
                    {children}
                </main>
            </div>
        </>
    )
}
