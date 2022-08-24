import './SignUp.scss'
import Form from "../Form/Form"
import FormField from "../Form/FormField"
import { useState } from 'react'
import { Link } from 'react-router-dom'
import FormSelect from '../Form/FormSelect'
import cn from 'classnames'
import Button from '../Ui/Button'

const SignUp = () => {
    let [currentStep, setCurrentStep] = useState(0)

    const stepClass = (index) => cn(
        'sign-up__step',
        {'sign-up__step_active': currentStep === index}
    )

    const options = [
        {
            name: 'Cайты',
            value: 'sites'
        },
        {
            name: 'Контекстная реклама',
            value: 'Контекстная реклама'
        },
    ]

    const handlerNext = (e) => {
        console.log(e)
        setCurrentStep(++currentStep)
    }

    const handlerPrev = (e) => {
        setCurrentStep(--currentStep)
    }

    return (
        <div className="sign-up d-flex">
            <form className="sign-up__form" action='' method=''>
                <div className="sign-up__steps">
                    <div className="sign-up__wrapper d-flex" style={{ transform: `translateX(${currentStep * -100}%)` }}>
                        <div className={stepClass(0)}>
                            <h2 className="sign-up__title title title_center title_h2">
                                Регистрация (шаг 1)
                            </h2>
                            <p className="sign-up__descr">
                                Давайте зарабатывать вместе!
                            </p>
                            <FormField
                                label='Имя'
                                name='name'
                                type='text'
                                placeholder='Введите ваше имя'
                                error='Введите корректный адрес'
                                className={'sign-up__steps'}
                            />
                            <FormField
                                label='Email'
                                name='email'
                                type='text'
                                placeholder='Введите адрес электронной почты'
                                error='Введите корректный email'
                            />
                            <FormField
                                type='select'
                                options={options}
                                description='Выберите источники трафика, с которыми работаете.'
                                currentSelect='Источники трафика'
                            />
                            <Button
                                className='sign-up__button'
                                handler={handlerNext}
                                size='large'
                                bgcolor='blue'
                            >
                                Продолжить
                            </Button>

                            <div className='sign-up__bottom'>Есть аккаунт? <Link to='/'>Войти</Link></div>
                        </div>
                        <div className={stepClass(1)}>
                            <h2 className="sign-up__title title title_center title_h2">
                                Регистрация (шаг 2)
                            </h2>
                            <p className="sign-up__descr">
                                Подтвердите регистрацию любым способом и получите <b className='sign-up__descr-bold'>5 000 рублей</b><span className='req'>*</span>
                            </p>

                            <FormField
                                name='phone'
                                type='tel'
                                placeholder='Номер телефона'
                                error='Введите корректный телефон'
                            />
                            <p>Или</p>
                            <FormField
                                name='telegram'
                                type='text'
                                placeholder='Ник в Telegram'
                                error='Введите корректный email'
                            />

                            <Button
                                className='sign-up__button'
                                handler={handlerNext}
                                size='large'
                                bgcolor='blue'
                            >
                                Продолжить
                            </Button>

                            <div className='sign-up__bottom'>
                                <button type='button' className="sign-up__back" onClick={handlerPrev}>вернуться назад</button>
                            </div>
                        </div>
                        <div className={stepClass(2)}>
                            <h2 className="sign-up__title title title_center title_h2">
                                Регистрация (шаг 3)
                            </h2>
                            <p className="sign-up__descr">
                                Аккаунт создан! Мы отправили письмо с паролем на  <b className='sign-up__descr-bold'>4152@mail.ru</b>
                            </p>

                            <FormField
                                label='Пароль из письма'
                                name='entry_password'
                                type='text'
                                placeholder='Введите пароль'
                                error='Неверный пароль'
                            />

                            <Button
                                className='sign-up__button'
                                size='large'
                                bgcolor='blue'
                            >
                                Войти
                            </Button>

                            <div className="sign-up__message">
                                Если прошло больше 5 минут, а письма нет во входящих или папке "Спам", напишите в техподдержку:
                                <b className='sign-up__descr-bold'>sservise2022@gmail.com</b>
                            </div>

                            <div className='sign-up__bottom'>
                                <button type='button' className="sign-up__back" onClick={handlerPrev}>вернуться назад</button>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    )
}

export default SignUp