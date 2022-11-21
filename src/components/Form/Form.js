import cn from 'classnames'
import React, { useState } from 'react'
import Button from '../Ui/Button'
import './Form.scss'
import FormError from './FormError'

const Form = ({ children, className, name, buttonText, method, description }) => {
    const [submit, setSubmit] = useState(false)

    const formClass = cn(
        'form',
        className
    )

    return (
        <form action="#" className={formClass} name={name} method={method ?? 'post'}>
            {children}
        </form>
    )
}

export default Form