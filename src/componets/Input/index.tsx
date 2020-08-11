
import React, { InputHTMLAttributes} from 'react'
import './style.css'

interface InputProps extends InputHTMLAttributes<HTMLInputElement>{
    name:string,
    label:string
}

const Input: React.FunctionComponent<InputProps> =({name,label,...rest}) =>{

    return(
        <div className="input-block">
        <label htmlFor={label}>{name}</label>
        <input type="text" id={label} {...rest} />
    </div>

    )
}

export default Input;