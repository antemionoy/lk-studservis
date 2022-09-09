import cn from 'classnames'
import { useEffect, useRef, useState } from 'react'

const Select = ({ type, name, description, className, options, currentSelect, multiple }) => {
    const [showSelect, setShowSelect] = useState(false)
    const [dataSelect, setDataSelect] = useState([]);
    const [activeOption, setActiveOption] = useState(options[0].name)
    const wrapperRef = useRef(null)

    const selectClass = cn(
        className,
        'select',
        !!showSelect && 'select_show',
        !multiple && 'select-short'
    )

    const dropdownClass = cn(
        'select__dropdown',
        !!showSelect && 'select__dropdown_show'
    )

    const changeSelect = (value, e) => {
        if (!multiple) {
            setActiveOption(value)
            return
        }

        let arraySources = [...dataSelect, value]
        if (!e.target.checked) {
            arraySources = arraySources.filter(el => {
                return el != value
            })
        }
        setDataSelect(arraySources)
    }

    const deleteSource = (e) => {
        e.stopPropagation()
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
            wrapperRef.current.contains(e.target) || setShowSelect(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])


    return (
        <div className={selectClass} ref={wrapperRef}>
            <select className="select__hidden" name={name} value={currentSelect}>
                {options.map((el, index) => (
                    <option value={el.value ?? el.name} key={index}>{el.name}</option>
                ))}
            </select>
            <div className="select__box" onClick={toggleSelect}>
                {dataSelect.length > 0
                    ?
                    <div className="select__list d-flex">
                        {dataSelect.map((el, i) => (
                            <div className="select__source" onClick={(e) => deleteSource(e)} key={i}>
                                {el}
                                <div className="select__close close"></div>
                            </div>
                        ))}
                    </div>
                    :
                    <div className="select__current">
                        {multiple ? currentSelect : activeOption}
                    </div>
                }
            </div>
            <div className={dropdownClass}>
                {options.map((el, index) => (
                    (multiple) ?
                        <label className='select__element d-flex' key={index} htmlFor={index}>
                            <input type="checkbox" id={index} value={el.value ?? el.name} onChange={(e) => changeSelect(el.name, e)} className="select__checkbox" />
                            <span className='select__value'>{el.name}</span>
                        </label>
                        :
                        <div className='select__element d-flex' key={index} htmlFor={index} onClick={(e) => changeSelect(el.name, e)}>
                            <span className='select__value'>{el.name}</span>
                        </div>
                ))}
            </div>

        </div>
    )
}

export default Select