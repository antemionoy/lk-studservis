import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'
import './FormSelect.scss'

const FormSelect = ({ type, name, description, className, options, currentSelect }) => {
    const [showSelect, setShowSelect] = useState(false)
    const [sources, setSources] = useState([]);
    const wrapperRef = useRef(null)

    const selectClass = cn(
        className,
        'form-select',
        'form__element',
        'form__select',
        showSelect && 'form-select_show'
    )

    const addSource = (value, e) => {
        let arraySources = [...sources, value]
        if (!e.target.checked) {
            arraySources = arraySources.filter(el => {
                return el != value
            })
        }
        setSources(arraySources)
    }

    const deleteSource = (e) => {
        e.stopPropagation()
        console.log(e.target)
    }

    const toggleSelect = (e) => {
        if (!showSelect) {
            setShowSelect(true)
            return
        }
        setShowSelect(false)
    }

    useEffect(() => {
        const handlerClick = (e) => {
            console.log(wrapperRef.current.contains(e.target))
            wrapperRef.current.contains(e.target) || setShowSelect(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])

    return (
        <div className={selectClass} ref={wrapperRef}>
            <select className="form-select__hidden" name={name} value={currentSelect} defaultValue>
                {options.map((el, index) => (
                    <option value={el.value ?? el.name} key={index}>{el.name}</option>
                ))}
            </select>
            <div className="form-select__box" onClick={toggleSelect}>
                {sources.length > 0 ?
                    <div className="form-select__list d-flex">
                        {sources.map((el, i) => (
                            <div className="form-select__source" onClick={(e) => deleteSource(e)} key={i}>
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
            </div>
            <div className={`form-select__dropdown ${showSelect ? 'form-select__dropdown_show' : ''}`}>
                {
                    options.map((el, index) => (
                        <label
                            className='form-select__element d-flex'
                            key={index}
                            htmlFor={index}
                        >

                            <input type="checkbox" id={index} value={el.value ?? el.name} onChange={(e) => addSource(el.name, e)} className="form-select__checkbox" />
                            <span className='form-select__value'>{el.name}</span>
                        </label>
                    ))
                }
            </div>

        </div >
    )
}

export default FormSelect