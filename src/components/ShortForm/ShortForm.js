import './ShortForm.scss'
import Button from "../Ui/Button"
import Icon from '../Ui/Icon'
import cn from 'classnames'

const ShortForm = ({ className, buttonText, text, icon, placeholder }) => {
    const formClass = cn(
        className,
        'short-form',
        'd-flex'
    )
    return (
        <form action="#" className={formClass}>
            {!!text && <p className="short-form__text">{text}</p>}
            <input className="short-form__input" type="text" placeholder={placeholder} />
            <Button className='short-form__button d-flex' bgcolor='blue' size='medium'>
                {!!buttonText && buttonText}
                {!!icon && <Icon className='short-form__icon' name={icon} />}
            </Button>
        </form>
    )
}

export default ShortForm