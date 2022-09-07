import React from 'react'
import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Switch from '../Ui/Switch'
import './PayForm.scss'

const PayForm = ({ method, payMethods, fields }) => {
    // let fields = []
    // payMethods.forEach((el, i) => {
    //     if(method == el.name){
    //         el.fields && fields.push(...el.fields)
    //     }
    // })
    return (
        <form className="pay-form">
            {fields.length > 0 && fields.map((el, i) => (
                <FormField
                    className='pay-form__field'
                    label={el.label}
                    key={i}
                    type={el.type}
                />
            ))}
            <Switch className='pay-form__switch' policy />
            <Button className='pay-form__button' bgcolor='blue' size='large'>
                Вывести
            </Button>
        </form>
    )
}

export default PayForm