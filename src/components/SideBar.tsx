'use client'

import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

const SideBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const navItems = [
        { label: '邮件管理', path: '/mails' },
        { label: '图片管理', path: '/pictures' }
    ]

    return (
        <aside className="w-[220px] min-h-[calc(100vh-60px)] border-r bg-white p-6 flex flex-col gap-4">
            {navItems.map(({ label, path }) => (
                <button
                    key={path}
                    onClick={() => router.push(path)}
                    className={clsx(
                        'text-left text-sm font-medium px-3 py-2 rounded-md transition-colors',
                        pathname === path
                            ? 'text-pink-600 border-l-4 border-pink-500 bg-pink-50'
                            : 'text-gray-600 hover:bg-gray-100'
                    )}
                >
                    {label}
                </button>
            ))}
        </aside>
    )
}

export default SideBar
