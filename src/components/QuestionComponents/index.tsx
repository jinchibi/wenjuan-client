import QuestionRadio from "@/components/QuestionComponents/QuestionRadio";
import QuestionInput from "@/components/QuestionComponents/QuestionInput";
import QuestionTitle from "@/components/QuestionComponents/QuestionTitle";
import QuestionParagraph from "@/components/QuestionComponents/QuestionParagraph";
import QuestionInfo from "@/components/QuestionComponents/QuestionInfo";
import QuestionTextarea from "@/components/QuestionComponents/QuestionTextarea";
import QuestionCheckbox from "@/components/QuestionComponents/QuestionCheckbox";

type ComponentInfoType = {
    fe_id: string
    type: string
    isHidden: string
    props: any
}

export function getComponents(comp: ComponentInfoType) {
    const {fe_id, type, isHidden, props} = comp
    if (isHidden) return null
    // 根据类型返回不同的组件
    switch (type) {
        case "questionInput":
            return <QuestionInput fe_id={fe_id} props={props}/>
        case "questionRadio":
            return <QuestionRadio fe_id={fe_id} props={props}/>
        case "questionTitle":
            return <QuestionTitle text={props.text} level={props.level} isCenter={props.isCenter}/>
        case "questionParagraph":
            return <QuestionParagraph text={props.text} isCenter={props.isCenter}/>
        case "questionInfo":
            return <QuestionInfo title={props.title} desc={props.desc}/>
        case "questionTextarea":
            return <QuestionTextarea fe_id={fe_id} props={props}/>
        case "questionCheckbox":
            return <QuestionCheckbox fe_id={fe_id} props={props}/>
    }

    return null
}