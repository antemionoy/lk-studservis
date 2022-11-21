import { Link } from 'react-router-dom'
import Button from '../Ui/Button'
import './Footer.scss'
import { useDispatch } from 'react-redux'
import { setPopup } from '../../slices/popupSlice';

const Footer = () => {
    const dispatch = useDispatch()

    return (
        <footer className='footer'>
            <div className="footer__container container">
                <div className="footer__inner d-flex">
                    <p className="footer__copy">© 2004-2022 Студсервис. Все права защищены.
                        <Link to={'/'} className='footer__link'>Оферта</Link>
                    </p>
                    <Button
                        size='medium'
                        bgcolor='blue'
                        className='footer__button'
                        handler={() => dispatch(setPopup({
                            id: 'popup-feedback',
                            title: 'Получите консультацию'
                        }))}
                    >
                        Получить консультацию
                    </Button>
                </div>
            </div>
        </footer>
    )
}

export default Footer