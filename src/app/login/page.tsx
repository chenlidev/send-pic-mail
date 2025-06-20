'use client'

import { useState } from 'react'

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = () => {
        alert(`登录中：${username}`)
        // TODO: 登录逻辑
    }

    return (
        <div className="min-h-screen bg-white flex items-center justify-center px-4">
            <div className="w-full max-w-md min-h-[400px] bg-white border rounded shadow p-8">
                <h1 className="text-2xl font-bold text-center mb-6">Login</h1>

                <div className="mb-4">
                    <label className="block text-sm text-gray-700 mb-1">用户名</label>
                    <input
                        type="text"
                        value={username}
                        onChange={e => setUsername(e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-500"
                        placeholder="username"
                    />
                </div>

                <div className="mb-6">
                    <label className="block text-sm text-gray-700 mb-1">密码</label>
                    <input
                        type="password"
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        className="w-full border rounded px-3 py-2 text-sm outline-none focus:ring-1 focus:ring-gray-500"
                        placeholder="password"
                    />
                </div>

                <button
                    onClick={handleLogin}
                    className="w-full bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold py-2 rounded"
                >
                    登录
                </button>
            </div>
        </div>
    )
}
