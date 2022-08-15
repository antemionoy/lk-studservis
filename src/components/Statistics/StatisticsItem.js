import cn from 'classnames'
import './StatisticsItem.scss'
const StatisticsItem = ({ title, count, percent, className }) => {

    const classItem = cn(
        className,
        'statistics-item'
    )

    return (
        <li className={classItem}>
            <p className="statistics-item__name">{title}</p>
            <div className="statistics-item__inner d-flex">
                <p className="statistics-item__count">{count}</p>
                <p className="statistics-item__percent">({percent}%)</p>
            </div>
            <div className="statistics-item__graphic">

            </div>
        </li>
    )
}

export default StatisticsItem