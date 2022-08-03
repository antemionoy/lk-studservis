import Icon from '../Ui/Icon'
import './SignIn.scss'


const SignIn = () => {
    return (
        <div className="sign-in d-flex">
            <div className="sign-in__sidebar d-flex">
                <div className="sign-in__header">
                    <img src="@assets/images/logo.svg" alt="" className="sign-in__logo" />
                    <p className="sign-in__desc">партнерская программа</p>
                </div>
                <img src="" alt="" className="sign-in__picture" />
                <p className="sign-in__text d-flex">
                    <u>Наш чат</u> в Telegram
                    <Icon name='tg' className='sign-in__icon'  />
                </p>
            </div>
            <div className="sign-in__content d-flex">

            </div>
        </div>
    )
}

export default SignIn