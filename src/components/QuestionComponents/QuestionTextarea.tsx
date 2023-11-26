import {FC} from "react";
import styles from "./QuestionTextarea.module.scss"

type PropsType = {
    fe_id: string
    props: {
        title: string
        placeholder?: string
    }
}
const QuestionTextarea: FC<PropsType> = ({fe_id, props}) => {
    const {title, placeholder = ''} = props
    return (
        <>
            <p style={{marginBottom: '5px'}}>{title}</p>
            <div className={styles['textarea-wrapper']}>
                <textarea name={fe_id} placeholder={placeholder} rows={4}/>
            </div>
        </>
    )
}

export default QuestionTextarea