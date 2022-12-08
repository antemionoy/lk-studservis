import './FormInput.scss';
import { useState } from 'react';
import cn from 'classnames';

const FormInput = (props) => {
    const {
        label,
        type = 'text',
        name,
        value,
        onChange
    } = props;

    const formInputClass = cn(
        className,
        'form-input'
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
        </div>

    )
}


export default FormInput