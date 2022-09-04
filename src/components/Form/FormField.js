import './FormField.scss'
import cn from "classnames"
import FormSelect from './FormSelect'

const FormField = ({ type, name, placeholder, className, label, error, options, currentSelect, description, value }) => {
    const formFieldClass = cn(
        className,
        'form-field'
    )

    return (
        <div className={formFieldClass}>
            {
                !!label &&
                <label htmlFor={name} className="form-field__label">
                    {label}
                    {
                        !!error &&
                        <span className='form-field__required'>*</span>
                    }
                </label>
            }
            {
                !!description &&
                <p className="form-field__description">
                    {description}
                </p>
            }
            {
                type != 'select' ?
                    <input
                        className='form-field__element'
                        type={type}
                        name={name}
                        placeholder={placeholder}
                        // value={value ?? ''}
                    />
                    :
                    <FormSelect
                        className='form-field__element'
                        options={options}
                        currentSelect={currentSelect}
                        description={description}
                    />
            }

        </div>
    )
}

export default FormField