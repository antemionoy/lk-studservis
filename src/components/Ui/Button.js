import cn from "classnames"

const Button = ({ bordered, size, bgcolor, type, className, children, handler }) => {

    const buttonClass = cn(
        className,
        'button',
        { ['button_bordered']: bordered },
        { [`button_size-${size}`]: size },
        { [`button_bgcolor-${bgcolor}`]: bgcolor }
    )

    return (
        <button type={type ?? 'button'} className={buttonClass} onClick={handler}>
            {children}
        </button>
    )
}

export default Button