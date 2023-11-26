// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type {NextApiRequest, NextApiResponse} from 'next'
import {postAnswer} from "@/services/answer";

// 生成answerInfo
function genAnswerInfo(reqBody: any) {
    const answerList: any[] = []
    Object.keys(reqBody).forEach(key => {
        if (key !== 'questionId') answerList.push({
            componentId: key,
            value: reqBody[key]
        })
    })
    return {
        questionId: reqBody.questionId || '',
        answerList
    }
}

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse
) {
    // 不是POST直接返回错误
    if (req.method !== "POST")
        res.status(200).json({errno: -1, msg: "Method 错误"})
    // 处理数据
    const answerInfo = genAnswerInfo(req.body)

    try {
        // 提交到服务端(Mock)
        const result: any = await postAnswer(answerInfo)
        console.log(1)
        console.log(result)
        if (result.errno === 0) {
            // 提交成功，跳转到成功页面
            res.redirect("/success")
        } else {
            // 提交失败，跳转到失败页面
            res.redirect('/fail')
        }
    } catch (err) {

    }
    // res.status(200).json({errno: 0})
}
