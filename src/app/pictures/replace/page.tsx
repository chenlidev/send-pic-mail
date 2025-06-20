'use client'

import { useState } from 'react'

export default function DefaultImagePage() {
    const [loading, setLoading] = useState(true)
    const [imageUrl, setImageUrl] = useState('/loading.gif') // 可替换为实际图片路径

    const handleImageLoad = () => {
        setLoading(false)
    }

    const handleReplaceImage = () => {
        alert('打开文件选择或上传逻辑')
    }

    return (
        <div className="min-h-screen bg-white px-4 py-10">
            <div className="max-w-md mx-auto bg-white p-8 border rounded shadow flex flex-col items-center">
                <div className="relative w-60 h-60 bg-gray-100 flex items-center justify-center rounded">
                    <img
                        src={imageUrl}
                        alt="默认图片"
                        onLoad={handleImageLoad}
                        className="max-w-full max-h-full object-contain"
                    />
                    {loading && (
                        <div className="absolute inset-0 flex items-center justify-center bg-white">
                            <svg
                                className="animate-spin h-8 w-8 text-gray-600"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                            >
                                <circle
                                    className="opacity-25"
                                    cx="12"
                                    cy="12"
                                    r="10"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                />
                                <path
                                    className="opacity-75"
                                    fill="currentColor"
                                    d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                                />
                            </svg>
                        </div>
                    )}
                </div>

                <button
                    onClick={handleReplaceImage}
                    className="mt-4 bg-gray-800 hover:bg-gray-700 text-white px-6 py-2 rounded"
                >
                    替换默认图片
                </button>

                <div className="mt-4 text-sm text-gray-700">当前默认图片</div>
            </div>
        </div>
    )
}
