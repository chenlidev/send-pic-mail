import './globals.css'
import AppLayout from '@/components/AppLayout'
import type { Metadata } from 'next'

export const metadata: Metadata = {
    title: '你的项目名',
    description: '描述'
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="zh">
        <body>
        <AppLayout>{children}</AppLayout>
        </body>
        </html>
    )
}
