'use client'

import { usePathname, useRouter } from 'next/navigation'
import clsx from 'clsx'

const PictureTopBar = () => {
    const router = useRouter()
    const pathname = usePathname()

    const tabs = [
        { label: '图片链接生成管理', path: '/pictures' },
        { label: '默认图片设置', path: '/pictures/replace' }
    ]

    return (
        <div className="w-full border-b bg-white px-8">
            <div className="flex justify-center space-x-6 py-3">
                {tabs.map(({ label, path }) => (
                    <button
                        key={path}
                        onClick={() => router.push(path)}
                        className={clsx(
                            'relative text-sm font-medium px-4 py-2 transition-colors',
                            pathname === path
                                ? 'text-black border-b-2 border-pink-500'
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

export default PictureTopBar
