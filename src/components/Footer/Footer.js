import { Link } from 'react-router-dom'
import './Footer.scss'

const Footer = () => {
    return (
        <footer className='footer'>
            <div className="footer__container container">
                <p className="footer__copy">© 2004-2022 Студсервис. Все права защищены. 
                    <Link to={'/'} className='footer__link'>Оферта</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer