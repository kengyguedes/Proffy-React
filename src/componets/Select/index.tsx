
import React, { SelectHTMLAttributes} from 'react'
import './style.css'

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement>{
    name:string,
    label:string
    options:Array<{
        value:string,
        label:string
    }>
}

const Select: React.FunctionComponent<SelectProps> =({options,name,label,...rest}) =>{

    return(
        <div className="select-block">
        <label htmlFor={label}>{name}</label>
        <select value="" id={label} {...rest} >
            <option value="" disabled  hidden> Selecione uma Opção</option>
            {options.map(options =>{
                return <option key={options.value} value= {options.value}> {options.label}</option>
            })}

        </select>
    </div>

    )
}

export default Select;