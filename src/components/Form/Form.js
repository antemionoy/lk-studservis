import cn from 'classnames'
import React, { useState } from 'react'
import Button from '../Ui/Button'
import './Form.scss'
import FormError from './FormError'
import FormContext from '../../contexts/FormContext'

const Form = ({ children, className, name, method }) => {
    const [submit, setSubmit] = useState(false)

    const formClass = cn(
        'form',
        className
    )

    const sendForm = () => {

    }

    const FormProvider = ({ children }) => {
        { children }
    };

    return (
        <FormProvider>
            <form action="#" className={formClass} name={name} method={method ?? 'post'}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form