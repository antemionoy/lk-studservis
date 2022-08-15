import './Statistics.scss'
import StatisticsItem from './StatisticsItem'

const Statistics = () => {

    const items = [
        {
            title: 'Заявки',
            count: 10,
            percent: -12.6
        },
        {
            title: 'Заказы',
            count: 3976098,
            percent: -27
        },
        {
            title: 'Доходы',
            count: 119875,
            сurrency: 'rub'
        },
    ]

    return (
        <section className="statistics">
            <div className="statistics__container container">
                <ul className="statistics__list d-grid">
                    {items.map((el, i) => (
                        el &&
                        <StatisticsItem
                            key={i}
                            className={'statistics__item'}
                            title={el.title}
                            count={el.count}
                            percent={el.percent}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Statistics