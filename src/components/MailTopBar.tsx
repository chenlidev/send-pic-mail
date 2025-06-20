'use client'

import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

const MailTopBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { label: '自动回复设置', path: '/mails' },
        { label: '观众邮箱地址管理', path: '/mails/audience' }
    ]

    return (
        <div className="w-full border-b bg-white px-8">
            <div className="flex justify-center space-x-6 py-3">
                {navItems.map(({ label, path }) => (
                    <button
                        key={path}
                        onClick={() => router.push(path)}
                        className={clsx(
                            'relative text-sm font-medium px-4 py-2 transition-colors',
                            pathname === path
                                ? 'text-black border-b-2 border-gray-800'
                                : 'text-gray-500 hover:text-black'
                        )}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}

export default MailTopBar
