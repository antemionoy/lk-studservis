import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import './FormSelect.scss'

const FormSelect = ({ type, name, description, className, options, currentSelect }) => {
    const [showSelect, setShowSelect] = useState(true)
    const [sources, setSources] = useState([]);
    const wrapperRef = useRef(null)

    const selectClass = cn(
        className,
        'form-select',
        'form__element',
        'form__select',
        showSelect && 'form-select_show'
    )

    const handlerSource = (value) => {
        const ar = [...sources, value];
        setSources(ar)
    }

    useEffect(() => {
        const handlerClick = (e) => {
            wrapperRef.current.contains(e.target) || setShowSelect(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])

    return (
        <div className={selectClass} ref={wrapperRef}>
            <select className="form-select__hidden" name={name} value={currentSelect}>
                {options.map((el, index) => (
                    <option value={el.value ?? el.name} key={index}>{el.name}</option>
                ))}
            </select>
            <div className="form-select__box">
                {sources.length > 0 ?
                    <div className="form-select__list d-flex">
                        {sources.map((el, i) => (
                            <div className="form-select__source">
                                {el}
                                <div className="form-select__close close"></div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="form-select__current">
                        {currentSelect}
                    </div>
                }
                {showSelect &&
                    <div className='form-select__dropdown'>
                        {options.map((el, index) => (
                            <label
                                className='form-select__element d-flex'
                                key={index}
                                htmlFor={index}
                                onClick={() => handlerSource(el.name)}
                            >

                                <input type="checkbox" id={index} value={el.value ?? el.name} className="form-select__checkbox" />
                                <span className='form-select__value'>{el.name}</span>
                            </label>
                        ))}
                    </div>
                }
            </div>

        </div>
    )
}

export default FormSelect