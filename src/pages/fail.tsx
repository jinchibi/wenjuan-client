import Image from 'next/image'
import {Inter} from 'next/font/google'
import PageWrapper from "@/components/PageWrapper";

export default function Success() {
    return (
        <PageWrapper title={"提交失败"}>
            <h1>提交失败</h1>
            <button>点击返回</button>
        </PageWrapper>
    )
}
