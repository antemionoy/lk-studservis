import './SignUp.scss'
import Form from "../Form/Form"
import FormInput from "../Form/FormInput"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormSelect from '../Form/FormSelect'
import cn from 'classnames'

const SignUp = () => {
    const [step, setStep] = useState(0)

    const stepClass = cn(
        'sign-up__step',
    )

    const stepStyle = {
        transform: `translateX(${step})`
    }

    const options = [
        {
            name: 'Cайты',
            value: 'sites'
        },
        {
            name: 'Контекстная реклама',
            value: 'Контекстная реклама'
        },
        {
            name: 'Таргетинговая реклама',
            value: 'Таргетинговая реклама'
        },
        {
            name: 'Тизерные/баннерные сети',
            value: 'Тизерные/баннерные сети'
        }
    ]

    return (
        <div className="sign-up d-flex">
            <div className="sign-up__steps">
                <div className="sign-up__wrapper">
                    <div className="sign-up__step">
                        <h1 className="sign-up__title title title_center title_h2">
                            Регистрация (шаг 1)
                        </h1>
                        <p className="sign-up__descr">
                            Давайте зарабатывать вместе!
                        </p>
                    </div>
                    <div className="sign-up__step">
                        <h1 className="sign-up__title title title_center title_h2">
                            Регистрация (шаг 2)
                        </h1>
                        <p className="sign-up__descr">
                            Подтвердите регистрацию любым способом и получите 5 000 рублей*
                        </p>
                    </div>
                    <div className="sign-up__step">
                        <h1 className="sign-up__title title title_center title_h2">
                            Регистрация (шаг 3)
                        </h1>
                        <p className="sign-up__descr">
                            Аккаунт создан! Мы отправили письмо с паролем на 4152@mail.ru
                        </p>
                    </div>
                </div>
            </div>

            <Form className='sign-up__form' name='auth' buttonText='Продожить' method='post'>
                <FormInput
                    label='Имя'
                    name='name'
                    type='text'
                    placeholder='Введите ваше имя'
                    error='Введите корректный адрес'
                />
                <FormInput
                    label='Email'
                    name='email'
                    type='text'
                    placeholder='Введите адрес электронной почты'
                    error='Введите корректный email'
                />
                <FormSelect
                    options={options}
                    description='Выберите источники трафика, с которыми работаете.'
                    currentSelect='Источники трафика'
                />
            </Form>
            <p>Есть аккаунт? <Link to=''>Войти</Link></p>
        </div>
    )
}

export default SignUp