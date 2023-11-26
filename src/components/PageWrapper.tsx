import React, {FC} from "react"
import Head from "next/head";
import Script from "next/script";
import styles from "@/styles/Common.module.scss"

type PropsType = {
    title: string
    desc?: string
    css?: string
    js?: string
    children: React.ReactElement | React.ReactElement[]
}
const PageWrapper: FC<PropsType> = (props: PropsType) => {
    const {
        title,
        desc = '',
        css = '',
        js = '',
        children
    } = props
    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name="description" content={desc}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1"}/>
                <style>{css}</style>
                <link rel="icon" href="/favicon.ico"/>
            </Head>
            <main className={styles.container}>
                {children}
            </main>
            <Script id={"page-js"}>{js}</Script>
        </>
    )
}

export default PageWrapper