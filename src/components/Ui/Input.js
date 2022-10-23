import cn from "classnames"

const Input = ({ className, type, name, placeholder, handler }) => {
    const classInput = cn(
        className,
        'input'
    )

    return (
        <input
            className={classInput}
            type={type}
            name={name}
            placeholder={placeholder}
            onChange={handler}
        />
    )
}

export default Input