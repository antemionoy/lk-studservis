import cn from "classnames"

const FormInput = ({ type, name, placeholder, className }) => {
    const inputClass = cn(
        className,
        'form__element',
        'form__input',
    )

    return (
        <input
            type={type}
            name={name}
            className={inputClass}
            placeholder={placeholder}
        />
    )
}

export default FormInput