import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import PageWrapper from "@/components/PageWrapper";
import styles from "@/styles/Question.module.scss"
import {getQuestionById} from "@/services/question";
import {getComponents} from "@/components/QuestionComponents";

type PropsType = {
    errno: number
    data?: {
        id: string
        title: string
        css?: string
        js?: string
        desc?: string
        isDeleted?: boolean
        isPublished?: boolean
        componentList?: Array<any>
    }
    msg?: string
}
export default function Question(props: PropsType) {
    const {errno, data, msg} = props
    // 数据错误
    if (errno !== 0) {
        return (
            <PageWrapper title={"错误"}>
                <h1>该问卷不存在</h1>
                <div>{msg}</div>
            </PageWrapper>
        )
    }
    const {
        id, title = '',
        desc, isDeleted,
        isPublished, componentList = []
    } = data || {}
    // 已经被删除
    if (isDeleted) {
        return (
            <PageWrapper title={title} desc={desc}>
                <h1>{title}</h1>
                <div>已经被删除</div>
            </PageWrapper>
        )
    }
    // 还没被发布
    if (!isPublished) {
        return (
            <PageWrapper title={title} desc={desc}>
                <h1>{title}</h1>
                <div>该问卷尚未发布</div>
            </PageWrapper>
        )
    }
    return (
        <PageWrapper title={title} desc={desc}>
            {/*<div>{props.id}</div>*/}
            <form method="post" action={"/api/answer"} style={{width: "100%"}}>
                <input type={"hidden"} name={"questionId"} value={id}/>
                {
                    componentList.map(cmp => {
                        return (
                            <div key={cmp.fe_id} className={styles.componentWrapper}>
                                {getComponents(cmp)}
                            </div>
                        )
                    })
                }
                <div className={styles.submitBtnContainer}>
                    {/*<input type={"submit"} value={"提交"}/>*/}
                    <button type={"submit"}>提交</button>
                </div>
            </form>
        </PageWrapper>
    )
}

// 获取id
export async function getServerSideProps(context: any) {
    const {id = ''} = context.params
    const data = await getQuestionById(id)
    return {
        props: data
    }
}