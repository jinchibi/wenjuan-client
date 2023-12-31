import {FC} from "react";
import styles from "./QuestionInput.module.scss"

type PropsType = {
    fe_id: string
    props: {
        title: string
        placeholder?: string
    }
}
const QuestionInput: FC<PropsType> = ({fe_id, props}) => {
    const {title, placeholder = ''} = props
    return (
        <>
            <p style={{marginBottom: '5px'}}>{title}</p>
            <div className={styles['input-wrapper']}>
                <input name={fe_id} placeholder={placeholder}/>
            </div>
        </>
    )
}

export default QuestionInput