import cn from "classnames"
import { Link } from "react-router-dom"

const Switch = ({ className, text, policy, color }) => {
    const switchClass = cn(
        className,
        'switch',
        'd-flex'
    )

    // const switchBodyClass = cn(
    //     'switch__body',
    //     { ['button_bordered']: color },
    // )

    return (
        <div className={switchClass}>
            <label className='switch__label'>
                <input type="checkbox" className="switch__input" hidden />
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