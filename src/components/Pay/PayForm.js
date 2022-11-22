import React from 'react'
import Form from '../Form/Form'
import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Switch from '../Ui/Switch'
import './PayForm.scss'

const PayForm = ({ method, payMethods, fields, error }) => {
    return (
        <Form className='pay-form' name='pay'>
            {fields.length > 0 && fields.map((el, i) => (
                <FormField
                    className='pay-form__field'
                    label={el.label}
                    placeholder={el.placeholder}
                    key={i}
                    type={el.type}
                />
            ))}
            <Switch
                className='pay-form__switch'
                policy
            />
            <Button
                className='pay-form__button'
                bgcolor='blue'
                size='large'
                isDisabled={error.status}>
                Вывести
            </Button>
        </Form>
    )
}

export default PayForm