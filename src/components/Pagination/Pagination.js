import cn from 'classnames'
import './Pagination.scss'

const Pagination = ({ className, max }) => {
    const paginationClass = cn(
        className,
        'pagination',
        'd-flex'
    )

    const elements = []
    let i = 0
    while (++i <= max) {
        elements.push(i)
    }

    return (
        <div className={paginationClass}>
            <button type="button">
                Назад
            </button>
            <ul className="pagination__list d-flex">
                {elements.map((page, index) => (
                    <li
                        key={index}
                    >
                        <button type="button" className="catalog-pagination__page">{page}</button>
                    </li>
                ))}
            </ul>
            <button type="button">
                Вперед
            </button>
        </div>
    )
}

export default Pagination