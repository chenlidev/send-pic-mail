'use client'

import { useState } from 'react'

const years = Array.from({ length: 10 }, (_, i) => `${2020 + i}`)
const months = Array.from({ length: 12 }, (_, i) => String(i + 1).padStart(2, '0'))
const days = Array.from({ length: 31 }, (_, i) => String(i + 1).padStart(2, '0'))

export default function AudiencePage() {
    const [mode, setMode] = useState<'single' | 'range'>('single')
    const [start, setStart] = useState({ year: '', month: '', day: '' })
    const [end, setEnd] = useState({ year: '', month: '', day: '' })
    const [emails, setEmails] = useState<string[]>([])

    const handleDisplay = () => {
        const mockData = [
            'user1@example.com',
            'user2@example.com',
            'user3@example.com',
            'user4@example.com',
            'user5@example.com'
        ]
        setEmails(mockData)
    }

    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <div className="max-w-4xl mx-auto p-8 bg-white text-black">
                {/* 日期选择区域 */}
                <div className="flex flex-col gap-6">
                    {/* 单日 / 区间选择 */}
                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="mode"
                                checked={mode === 'single'}
                                onChange={() => setMode('single')}
                            />
                            单日选择
                        </label>

                        <div className="flex gap-2">
                            {['year', 'month', 'day'].map((field, i) => (
                                <select
                                    key={field}
                                    className="border rounded px-3 py-1"
                                    value={start[field as keyof typeof start]}
                                    onChange={e =>
                                        setStart(prev => ({ ...prev, [field]: e.target.value }))
                                    }
                                >
                                    <option value="">
                                        {field === 'year' ? '年' : field === 'month' ? '月' : '日'}
                                    </option>
                                    {(field === 'year' ? years : field === 'month' ? months : days).map(val => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            ))}
                        </div>
                    </div>

                    <div className="flex items-center gap-6">
                        <label className="flex items-center gap-2">
                            <input
                                type="radio"
                                name="mode"
                                checked={mode === 'range'}
                                onChange={() => setMode('range')}
                            />
                            日期区间
                        </label>

                        {/* 起始 ~ 结束日期 */}
                        <div className="flex flex-wrap gap-2 items-center">
                            {['year', 'month', 'day'].map(field => (
                                <select
                                    key={`start-${field}`}
                                    className="border rounded px-3 py-1"
                                    value={start[field as keyof typeof start]}
                                    onChange={e =>
                                        setStart(prev => ({ ...prev, [field]: e.target.value }))
                                    }
                                >
                                    <option value="">
                                        {field === 'year' ? '年' : field === 'month' ? '月' : '日'}
                                    </option>
                                    {(field === 'year' ? years : field === 'month' ? months : days).map(val => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            ))}
                            <span className="px-2">—</span>
                            {['year', 'month', 'day'].map(field => (
                                <select
                                    key={`end-${field}`}
                                    className="border rounded px-3 py-1"
                                    value={end[field as keyof typeof end]}
                                    onChange={e =>
                                        setEnd(prev => ({ ...prev, [field]: e.target.value }))
                                    }
                                >
                                    <option value="">
                                        {field === 'year' ? '年' : field === 'month' ? '月' : '日'}
                                    </option>
                                    {(field === 'year' ? years : field === 'month' ? months : days).map(val => (
                                        <option key={val} value={val}>
                                            {val}
                                        </option>
                                    ))}
                                </select>
                            ))}
                        </div>
                    </div>

                    {/* 操作按钮 */}
                    <div className="text-center">
                        <button
                            className="bg-pink-600 hover:bg-pink-500 text-white px-8 py-2 rounded font-medium"
                            onClick={handleDisplay}
                        >
                            选定并显示
                        </button>
                    </div>

                    {/* 邮箱列表 */}
                    <div>
            <textarea
                rows={10}
                readOnly
                className="w-full p-3 border rounded text-sm resize-none"
                value={emails.join('\n')}
            />
                    </div>

                    {/* 下载按钮 */}
                    <div className="flex flex-wrap justify-around gap-4 mt-6">
                        <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                            下载所选日期邮箱
                        </button>
                        <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                            下载全部日期邮箱
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
