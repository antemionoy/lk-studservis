import cn from "classnames"

const Button = ({ bgcolor, bordered, size, type, className, children, isDisabled, handler }) => {

    const buttonClass = cn(
        className,
        'button',
        { ['button_bordered']: bordered },
        { [`button_bordered-${bordered}`]: bordered },
        { [`button_size-${size}`]: size },
        { [`button_bgcolor-${bgcolor}`]: bgcolor },
        { [`button_disabled`]: isDisabled }
    )

    return (
        <button type={type ?? 'button'} className={buttonClass} onClick={handler}>
            {children}
        </button>
    )
}

export default Button