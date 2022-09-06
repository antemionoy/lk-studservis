import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import Switch from '../Ui/Switch'
import './PayForm.scss'

const PayForm = ({ method }) => {
    return (
        <form className="pay-form">
            {method === 'phone' &&
                <FormField type='tel' label='Номер телефона' className='pay-form__field' />
            }
            {method === 'phone' &&
                <FormField type='tel' label='Номер телефона' className='pay-form__field' />
            }
            {method === 'phone' &&
                <FormField type='tel' label='Номер телефона' className='pay-form__field' />
            }
            {method === 'phone' &&
                <FormField type='tel' label='Номер телефона' className='pay-form__field' />
            }

            <Switch className='pay-form__switch' policy />
            <Button className='pay-form__button' bgcolor='blue' size='large'>
                Вывести
            </Button>
        </form>
    )
}

export default PayForm