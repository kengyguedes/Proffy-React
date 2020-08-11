
import React, { TextareaHTMLAttributes} from 'react'
import './style.css'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement>{
    name:string,
    label:string
}

const TextArea: React.FunctionComponent<TextAreaProps> =({name,label,...rest}) =>{

    return(
        <div className="textarea-block">
        <label htmlFor={label}>{name}</label>
        <textarea id={label} {...rest} />
    </div>

    )
}

export default TextArea;