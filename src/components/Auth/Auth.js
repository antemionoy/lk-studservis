import './Auth.scss'
import Icon from "../Ui/Icon"
import Logo from "@/assets/images/logo.png"
import Promo from "@/assets/images/promo.png"
import SignIn from '../SignIn/SignIn'
import SignUp from '../SignUp/SignUp'

const Auth = ({ children }) => {
    return (
        <div className="auth">
            <div className="auth__grid d-flex">
                <div className="auth__sidebar d-flex">
                    <div className="auth__inner">
                        <div className="auth__header d-flex">
                            <img src={Logo} alt="" className="auth__logo" />
                            <p className="auth__desc">партнерская<br /> программа</p>
                        </div>
                        <img src={Promo} alt="" className="auth__picture" />
                        <div className="auth__bottom d-flex">
                            <p className="auth__text">
                                <u>Наш чат</u> в Telegram
                            </p>
                            <Icon name='tg' className='auth__icon' />
                        </div>
                    </div>
                </div>
                <div className="auth__main d-flex">
                    <div className="auth__content">
                        {children}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Auth