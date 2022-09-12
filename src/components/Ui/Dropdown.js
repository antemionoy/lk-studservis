import cn from "classnames"
import { useEffect, useRef, useState } from "react";

const Dropdown = ({ className, options, label }) => {
    const [showDropdown, setShowDropdown] = useState(false)
    const wrapperRef = useRef(null)

    const dropdownClass = cn(
        'dropdown',
        className
    )

    const boxClass = cn(
        'dropdown__box',
        !!showDropdown && 'dropdown__box_show'
    )

    const toggleDropdown = (e) => {
        setShowDropdown(() => !showDropdown)
    }

    useEffect(() => {
        const handlerClick = (e) => {
            wrapperRef.current.contains(e.target) || setShowDropdown(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])

    return (
        <div className={dropdownClass} ref={wrapperRef}>
            <p className="dropdown__label" onClick={toggleDropdown}>{label}</p>
            <div className={boxClass}>
                {options?.length > 0 &&
                    options.map((el, i) => (
                        <label className='dropdown__element d-flex' key={el.tag} htmlFor={el.tag}>
                            <input type="checkbox" id={el.tag} value={el.value ?? el.name} onChange={(e) => changeDropdown(el.name, e)} className="dropdown__checkbox" />
                            <span className='dropdown__value'>{el.name}</span>
                        </label>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown