import cn from "classnames"

const Button = ({ bgcolor, bordered, size, type, className, children, onClick }) => {

    const buttonClass = cn(
        className,
        'button',
        { ['button_bordered']: bordered },
        { [`button_size-${size}`]: size },
        { [`button_bgcolor-${bgcolor}`]: bgcolor }
    )

    return (
        <button type={type ?? 'button'} className={buttonClass} onClick={onClick}>
            {children}
        </button>
    )
}

export default Button