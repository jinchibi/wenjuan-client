import {FC, useState, useEffect} from "react";

type PropsType = {
    fe_id: string
    props: {
        title: string
        isVertical?: boolean
        list: Array<{
            value: string
            text: string
            checked: boolean
        }>
    }
}

const QuestionCheckbox: FC<PropsType> = ({fe_id, props}) => {
    const {title, isVertical, list} = props
    const [selectedValues, setSelectedValues] = useState<string[]>([])
    useEffect(() => {
        list.forEach(l => {
            const {checked, value} = l
            if (checked && !selectedValues.includes(value)) setSelectedValues(selectedValues.concat(value))
        })
    }, [list]);

    function toggleChange(value: string) {
        if (selectedValues.includes(value)) {
            let newSelectedValues = selectedValues.filter(v => v !== value)
            setSelectedValues(newSelectedValues)
        } else {
            setSelectedValues([...selectedValues, value])
        }
    }

    return (
        <>
            <p>{title}</p>
            <input type={"hidden"} name={fe_id} value={selectedValues.toString()}/>
            <ul>
                {
                    list.map((l, index) => {
                        const {value, text, checked} = l
                        return (
                            <li key={value}
                                style={{listStyleType: 'none', display: isVertical ? '' : 'inline-block', marginRight: '10px'}}>
                                <label>
                                    <input type={"checkbox"} checked={selectedValues.includes(value)}
                                           onChange={() => toggleChange(value)}/>
                                    {text}
                                </label>
                            </li>
                        )
                    })
                }
            </ul>
        </>
    )
}

export default QuestionCheckbox