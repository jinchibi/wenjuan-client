import Image from 'next/image'
import {Inter} from 'next/font/google'

const inter = Inter({subsets: ['latin']})

export default function About(props: { info: string }) {
    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div>about</div>
            <div>{props.info}</div>
        </main>
    )
}

export async function getServerSideProps() {
    return {
        props: {
            info: 'info: 100'
        }
    }
}