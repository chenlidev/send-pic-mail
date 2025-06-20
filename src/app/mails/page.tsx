'use client'

import { useState } from 'react'

const MailPage = () => {
    const [useLatestImage, setUseLatestImage] = useState(true)
    const [replyHour, setReplyHour] = useState('20')
    const [replyMinute, setReplyMinute] = useState('05')
    const [isReplyActive, setIsReplyActive] = useState(true)
    const [timeZone, setTimeZone] = useState('local')

    const handleSave = () => {
        alert('设置已保存！')
    }

    return (
        <div className="p-8 max-w-3xl mx-auto text-black">
        {/* 邮件内容设置 */}
            <div className="mb-8">
                <label className="block mb-2 text-lg font-semibold">邮件回复内容设置</label>
                <div className="bg-gray-100 rounded border h-[300px] p-4">
                    <img
                        src="/editor-placeholder.png"
                        alt="Editor placeholder"
                        className="w-full h-full object-contain"
                    />
                </div>
                <div className="text-center mt-4">
                    <button className="bg-gray-800 text-white px-6 py-2 rounded hover:bg-gray-700">
                        手动发送
                    </button>
                </div>
            </div>

            {/* 是否自动插入最近图片 */}
            <div className="mb-8 border-t pt-6">
                <label className="block mb-2 text-lg font-semibold">自动插入最近图片链接？</label>
                <div className="flex gap-8">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="useLatest"
                            checked={useLatestImage}
                            onChange={() => setUseLatestImage(true)}
                        />
                        是
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="useLatest"
                            checked={!useLatestImage}
                            onChange={() => setUseLatestImage(false)}
                        />
                        否
                    </label>
                </div>
            </div>

            {/* 自动回复时间设置 */}
            <div className="mb-8 border-t pt-6">
                <label className="block mb-2 text-lg font-semibold">自动回复时间设置</label>
                <div className="flex items-center gap-2 flex-wrap">
                    <select
                        className="border rounded px-3 py-1"
                        value={timeZone}
                        onChange={(e) => setTimeZone(e.target.value)}
                    >
                        <option value="local">本地时间</option>
                        <option value="utc">UTC</option>
                    </select>
                    <select
                        className="border rounded px-3 py-1"
                        value={replyHour}
                        onChange={(e) => setReplyHour(e.target.value)}
                    >
                        {Array.from({ length: 24 }).map((_, i) => (
                            <option key={i} value={String(i).padStart(2, '0')}>
                                {String(i).padStart(2, '0')}
                            </option>
                        ))}
                    </select>
                    <span>:</span>
                    <select
                        className="border rounded px-3 py-1"
                        value={replyMinute}
                        onChange={(e) => setReplyMinute(e.target.value)}
                    >
                        {Array.from({ length: 60 }).map((_, i) => (
                            <option key={i} value={String(i).padStart(2, '0')}>
                                {String(i).padStart(2, '0')}
                            </option>
                        ))}
                    </select>
                </div>
            </div>

            {/* 自动回复激活 */}
            <div className="mb-8 border-t pt-6">
                <label className="block mb-2 text-lg font-semibold">自动回复已激活？</label>
                <div className="flex gap-8">
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isActive"
                            checked={isReplyActive}
                            onChange={() => setIsReplyActive(true)}
                        />
                        是
                    </label>
                    <label className="flex items-center gap-2">
                        <input
                            type="radio"
                            name="isActive"
                            checked={!isReplyActive}
                            onChange={() => setIsReplyActive(false)}
                        />
                        否
                    </label>
                </div>
            </div>

            {/* 保存按钮 */}
            <div className="text-center mt-8">
                <button
                    className="bg-pink-600 hover:bg-pink-500 text-white font-semibold px-8 py-2 rounded"
                    onClick={handleSave}
                >
                    保存设置
                </button>
            </div>
        </div>
    )
}

export default MailPage
