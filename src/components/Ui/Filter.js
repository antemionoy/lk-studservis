import cn from "classnames"

const Filter = ({ className, children }) => {
    const filterClass = cn(
        className,
        'd-flex',
        'filter'
    )

    return (
        <div className={filterClass}>
            {children}
        </div>
    )
}

export default Filter