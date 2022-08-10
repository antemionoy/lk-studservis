import { Link } from 'react-router-dom'
import './SignIn.scss'

const SignIn = () => {
    return (
        <div className="sign-in">
            <p className="sign-in__title">Войти в личный кабинет партнера</p>

            <form action="#" className='sign-in__form form form-auth'>
                <div className="form-auth__group">
                    <label htmlFor="" className="form-auth__label">Email</label>
                    <input type="text" className="form-auth__element form-auth__input" placeholder='Введите адрес электронной почты' />
                </div>
                <div className="form-auth__group">
                    <label htmlFor="" className="form-auth__label">Пароль</label>
                    <input type="text" className="form-auth__element form-auth__input" placeholder='Введите пароль' />
                </div>
                <button className="form__button" type='submit'>Войти</button>
            </form>
            <p>Еще не зарегестрированы? <Link to=''>Регистрация</Link></p>
        </div>
    )
}

export default SignIn