import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import styles from "@/styles/Question.module.scss"

type PropsType = {
    id: string
}
export default function Question(props: PropsType) {

    return (
        <main
            // className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
        >
            <div>{props.id}</div>
            <form method="post" action={"/api/answer"}>
                <input type={"hidden"} name={"questionId"} value={props.id}/>
                <div className={styles.componentWrapper}>
                    <QuestionInput fe_id={'c1'} props={{title: '你的姓名', placeholder: '请输入'}}/>
                </div>
                <div className={styles.componentWrapper}>
                    <QuestionRadio fe_id={'c2'} props={{
                        title: '性别',
                        options: [{value: 'man', text: '男'}, {value: 'woman', text: '女'}],
                        value: 'man',
                        isVertical: false
                    }}/>
                </div>
                <div className={styles.submitBtnContainer}>
                    {/*<input type={"submit"} value={"提交"}/>*/}
                    <button type={"submit"}>提交</button>
                </div>
            </form>
        </main>
    )
}

// 获取id
export async function getServerSideProps(context: any) {
    const {id = ''} = context.params
    return {
        props: {
            id
        }
    }
}