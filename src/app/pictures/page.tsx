'use client'

import { useState } from 'react'

const mockData = [
    {
        date: '2025/12/26 08:15',
        imageUrl: '',
        link: 'https://www.cts.ca/at24ac/nov/t67e/pmo29gd47s/',
        loading: true
    },
    {
        date: '2025/12/25 08:22',
        imageUrl: '/images/1.jpg',
        link: 'https://www.cts.ca/atlas56/56gg/pmoffgtfz/3ns/',
        loading: false
    },
    // 继续添加更多项...
]

const PicturesPage = () => {
    const [data, setData] = useState(mockData)

    const handleCopy = (link: string) => {
        navigator.clipboard.writeText(link)
        alert('已复制链接')
    }

    return (
        <div className="p-6 w-full">
            {/* 顶部按钮 */}
            <div className="text-center mb-6">
                <button className="bg-white shadow px-6 py-2 text-lg font-bold">
                    生成新链接
                </button>
            </div>

            {/* 图片列表 */}
            <div className="space-y-4">
                {data.map((item, idx) => (
                    <div
                        key={idx}
                        className="flex items-center gap-4 border-b border-white pb-2"
                    >
                        <div className="w-24 text-right text-sm text-white whitespace-nowrap">
                            {item.date}
                        </div>
                        <div className="w-16 h-16 bg-white flex items-center justify-center">
                            {item.loading ? (
                                <span className="animate-spin">⏳</span>
                            ) : (
                                <img
                                    src={item.imageUrl}
                                    alt="pic"
                                    className="object-cover w-full h-full"
                                />
                            )}
                        </div>
                        <button className="bg-white px-3 py-1 text-sm">替换图片</button>
                        <input
                            className="flex-1 px-2 py-1 text-sm"
                            readOnly
                            value={item.link}
                        />
                        <button
                            className="bg-white px-3 py-1 text-sm"
                            onClick={() => handleCopy(item.link)}
                        >
                            复制链接
                        </button>
                    </div>
                ))}
            </div>

            {/* 分页 */}
            <div className="mt-8 flex justify-center items-center gap-4">
                <button className="bg-white shadow px-4 py-1">上一页</button>
                <button className="bg-white shadow px-4 py-1">下一页</button>
                <span className="text-white text-sm">Page</span>
                <select className="px-2 py-1">
                    <option value="1">01</option>
                </select>
                <button className="bg-white shadow px-4 py-1">跳转</button>
            </div>
        </div>
    )
}

export default PicturesPage
