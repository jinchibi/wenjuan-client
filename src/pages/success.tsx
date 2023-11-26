import Image from 'next/image'
import {Inter} from 'next/font/google'
import PageWrapper from "@/components/PageWrapper";

export default function Success() {
    return (
        <PageWrapper title={"提交成功"}>
            <h1>提交成功</h1>
            <div>点击返回</div>
        </PageWrapper>
    )
}
