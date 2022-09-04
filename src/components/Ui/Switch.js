import cn from "classnames"
import { Link } from "react-router-dom"

const Switch = ({ className, text, policy }) => {
    const switchClass = cn(
        className,
        'switch',
        'd-flex'
    )

    return (
        <div className={switchClass}>
            <label htmlFor="switch" className='switch__label'>
                <input type="checkbox" id="switch" className="switch__input" hidden />
                <span className="switch__body"></span>
            </label>
            {!!text && <span>{text}</span>}
            {policy &&
                <p className="switch__policy">
                    Принимаю <Link to=''>Политику конфиденциальности</Link>
                </p>
            }
        </div>
    )
}

export default Switch