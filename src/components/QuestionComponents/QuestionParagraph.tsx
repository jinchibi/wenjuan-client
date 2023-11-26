import {FC, CSSProperties} from "react";

type PropsType = {
    text: string
    isCenter?: boolean
}

const QuestionParagraph: FC<PropsType> = ({text, isCenter}) => {
    // 实现换行
    let textList = text.split('\n')
    return (
        <p>
            {
                textList.map((list, index) => {
                    return <span key={index}>
                        {index > 0 && <br/>}
                        {list}
                    </span>
                })
            }
        </p>
    )
}

export default QuestionParagraph