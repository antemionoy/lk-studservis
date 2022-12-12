import './Form.scss'
import cn from 'classnames'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import FormContext from '../../contexts/FormContext'
import { setUser } from '../../slices/userSlice'

const Form = ({ children, className, initialValues }) => {
    const [form, setForm] = useState(initialValues);
    const [data, setData] = useState()
    const dispatch = useDispatch()

    const handleFormChange = (event) => {
        const { name, value } = event.target;

        const updatedForm = {
            ...form,
            [name]: value
        };

        console.log('Form changed: ', updatedForm);
        setForm(updatedForm);
    }

    const handleSumbit = (event) => {
        event.preventDefault()

        const responce = fetch(
            'https://back.studuniverse.ru/sanctum/', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Referer': 'back.studuniverse.ru',

            },
            body: JSON.stringify({
                email: 'tester123@yandex.ru',
                password: 'ZCSIqWCQ'
            })
        }
        );

        responce.then((data) => {
            console.log(data)
        })

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
            <form className={formClass} name={initialValues?.name} method={initialValues?.method ?? 'post'} onSubmit={handleSumbit}>
                {children}
            </form>
        </FormContext.Provider>

    )
}

export default Form