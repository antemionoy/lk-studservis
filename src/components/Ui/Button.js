import cn from "classnames"

const Button = (props) => {

    const buttonClass = cn(
        props.className,
        'button',
        { ['button_bordered']: props.bordered },
        { [`button_size-${props.size}`]: props.size },
        { [`button_bgcolor-${props.bgcolor}`]: props.bgcolor }
    )

    return (
        <button type={props.type ?? 'button'} className={buttonClass}>
            {props.children}
        </button>
    )
}

export default Button