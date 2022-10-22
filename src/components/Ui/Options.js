import cn from "classnames"
import { useEffect, useRef, useState } from "react"
import Icon from "./Icon"

const Options = ({ className, options }) => {
    const [showOptions, setShowOptions] = useState(false)
    const wrapperRef = useRef(null)

    const classOptions = cn(
        className,
        'options'
    )

    const listClass = cn(
        'options__list',
        !!showOptions && 'options__list_show'
    )

    const toggleOptions = () => {
        setShowOptions(() => !showOptions)
    }

    useEffect(() => {
        const handlerClick = (e) => {
            wrapperRef.current.contains(e.target) || setShowOptions(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])


    return (
        <div className={classOptions} ref={wrapperRef}>
            <button type="button" className="options__button" onClick={toggleOptions}>
                <Icon name='options' className='options__icon' />
            </button>
            <ul className={listClass}>
                {options?.length > 0 &&
                    options.map((el, i) => (
                        <li className="options__item">
                            <label className='options__element d-flex' key={el.tag} htmlFor={el.tag}>
                                <input type="checkbox" id={el.tag} value={el.value ?? el.name} className="options__checkbox" />
                                <span className='options__value'>{el.name}</span>
                            </label>
                        </li>
                    ))
                }
            </ul>
        </div>
    )
}

export default Options