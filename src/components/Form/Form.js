import cn from 'classnames'
import React, { useState } from 'react'
import FormContext from '../../contexts/FormContext'
import FormProvider from '../../contexts/FormProvider'
import './Form.scss'

const Form = ({ children, className, name, method, initialValues }) => {
    const [form, setForm] = useState(initialValues);
    const [data, setData] = useState()

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        const updatedForm = {
            ...form,
            [name]: value
        };

        console.log('Form changed: ', updatedForm);
        setForm(updatedForm);
    }

    const handleSumbit = (event) =>{
        event.preventDefault()

    }

    const formClass = cn(
        'form',
        className
    )

    return (
        <FormContext.Provider value={{
            form,
            handleFormChange
        }}>
            <form action="#" className={formClass} name={name} method={method ?? 'post'} onSubmit={handleSumbit}>
                {children}
            </form>
        </FormContext.Provider>

    )
}

export default Form