import cn from "classnames"

const Switch = ({ className, text }) => {
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
        </div>
    )
}

export default Switch