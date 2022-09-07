import cn from 'classnames'
import React, { useState } from 'react'
import Button from '../Ui/Button'
import './Form.scss'
import FormError from './FormError'

const Form = ({ children, className, name, buttonText, method, description }) => {
    const [submit, setSubmit] = useState(false)

    const formClass = cn(
        'form',
        className
    )

    return (
        <form action="#" className={formClass} name={name} method={method ?? 'post'}>
            {children}
            {/* {React.Children.map(children || null, (element, index) => (
                <div className="form__group">
                    {
                        !!element.props.label &&
                        <label htmlFor={element.props.name} className="form__label">
                            {element.props.label}
                            {
                                !!element.props.error &&
                                <span className='form__required'>*</span>
                            }
                        </label>
                    }
                    {!!element.props.description &&
                        <p className="form__description">
                            {element.props.description}
                        </p>
                    }
                    <element.type {...element.props} key={index} />
                    {!!element.props.error && <FormError text={element.props.error} />}
                </div>
            ))} */}
            <Button type='submit' className='form__button' bgcolor='blue' size='medium'>
                {buttonText}
            </Button>
        </form>
    )
}

export default Form