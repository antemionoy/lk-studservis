import cn from "classnames"

const Dropdown = ({ className, options, label }) => {

    const dropdownClass = cn(
        'dropdown',
        className
    )

    return (
        <div className={dropdownClass}>
            <div className="dropdown__label">{label}</div>
            <div className="dropdown__box">
                {options?.length > 0 &&
                    options.map((el, i) => (
                        <div>{el.name}</div>
                    ))
                }
            </div>
        </div>
    )
}

export default Dropdown