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
            <button type="button" className='pagination__button pagination__item'>
                Назад
            </button>
            <ul className="pagination__list d-flex">
                {elements.map((page, index) => (
                    <li
                        className='pagination__item'
                        key={index}
                    >
                        <button type="button" className="pagination__page">{page}</button>
                    </li>
                ))}
            </ul>
            <button type="button" className='pagination__item pagination__button'>
                Вперед
            </button>
        </div>
    )
}

export default Pagination