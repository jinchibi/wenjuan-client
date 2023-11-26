import Image from 'next/image'
import {Inter} from 'next/font/google'

export default function Success() {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <h1>失败</h1>
            <div>提交失败</div>
        </main>
    )
}
