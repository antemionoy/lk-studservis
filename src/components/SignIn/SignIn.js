import { Link } from 'react-router-dom'
import FormContext from '../../contexts/FormContext'
import Form from '../Form/Form'
import FormField from '../Form/FormField'
import Button from '../Ui/Button'
import './SignIn.scss'

const SignIn = () => {
    return (
        <div className="sign-in">
            <h1 className="sign-in__title title title_h2">Войти в личный кабинет партнера</h1>
            <Form className="sign-in__form" initialValues={{
                email: '',
                password: ''
            }}>
                <FormField
                    label='Email'
                    name='email'
                    type='text'
                    placeholder='Введите адрес электронной почты'
                    error='Введите корректный email'
                />
                <FormField
                    label='Пароль'
                    name='password'
                    type='password'
                    placeholder='Введите пароль'
                    error='Неверный пароль'
                />
                <Button bgcolor='blue' size='large' className='sign-in__button'>
                    Войти
                </Button>
            </Form>
            <p>Еще не зарегестрированы? <Link to='sign-up'>Регистрация</Link></p>
        </div >
    )
}

export default SignIn