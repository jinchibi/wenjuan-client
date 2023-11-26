import {FC, CSSProperties} from "react";

type PropsType = {
    text: string
    level: number
    isCenter?: boolean
}

const QuestionTitle: FC<PropsType> = ({text, level, isCenter}) => {
    let style: CSSProperties = {}
    if (isCenter) style.textAlign = 'center'
    switch (level) {
        case 1:
            style.fontSize = '24px'
            break
        case 2:
            style.fontSize = '20px'
            break
        case 3:
            style.fontSize = '16px'
    }
    return (
        <>
            <div style={style}>{text}</div>
        </>
    )
}

export default QuestionTitle