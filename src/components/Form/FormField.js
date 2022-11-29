import './FormField.scss'
import cn from "classnames"
import FormSelect from './FormSelect'
import usePhoneMask from '../../hooks/usePhoneMask'
import { useContext, useEffect, useRef, useState } from 'react'
import FormContext from '../../contexts/FormContext'

const FormField = ({ type, name, placeholder, className, label, error, options, currentSelect, description, value, handler }) => {
    const phoneRef = useRef(null)
    const formContext = useContext(FormContext);
    
    const { form, handleFormChange } = formContext;

    useEffect(() => {
        usePhoneMask(phoneRef?.current)
    }, [])

    const formFieldClass = cn(
        className,
        'form-field'
    )

    return (
        <div className={formFieldClass}>
            {
                !!label &&
                <label htmlFor={name} className="form-field__label">
                    {label}
                    {
                        !!error &&
                        <span className='form-field__required'>*</span>
                    }
                </label>
            }
            {
                !!description &&
                <p className="form-field__description">
                    {description}
                </p>
            }
            {
                type === 'select' ?
                    <FormSelect
                        className='form-field__element'
                        options={options}
                        currentSelect={currentSelect}
                        description={description}
                    />
                    :
                    <input
                        className='form-field__element'
                        ref={type === 'tel' ? phoneRef : null}
                        type={type}
                        name={name}
                        onChange={handler}
                        placeholder={placeholder}
                    />
            }
        </div>
    )
}

export default FormField