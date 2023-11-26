import {FC} from "react";

type PropsType = {
    title: string
    desc?: string
}

const QuestionInfo: FC<PropsType> = ({title, desc}) => {

    return (
        <>
            <h2>{title}</h2>
            <p>{desc}</p>
        </>
    )
}
export default QuestionInfo