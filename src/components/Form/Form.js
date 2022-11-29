import cn from 'classnames'
import React, { useState } from 'react'
import FormProvider from '../../contexts/FormProvider'
import './Form.scss'

const Form = ({ children, className, name, method }) => {
    const formClass = cn(
        'form',
        className
    )

    return (
        <FormProvider>
            <form action="#" className={formClass} name={name} method={method ?? 'post'}>
                {children}
            </form>
        </FormProvider>
    )
}

export default Form