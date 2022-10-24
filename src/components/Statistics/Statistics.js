import './Statistics.scss'
import StatisticsItem from './StatisticsItem'

const Statistics = () => {
    const StatsColors = ['rgb(50, 31, 219, 1)', 'rgb(248, 177, 20)', 'rgb(228, 83, 83)']

    const items = [
        {
            title: 'Заявки',
            count: 10,
            percent: -12.6,
            color: 'rgb(50, 31, 219, 1)',
            data: [],
            labels: []
        },
        {
            title: 'Заказы',
            count: 3976098,
            percent: -27,
            color: 'rgb(248, 177, 20)',
            data: [],
            labels: []
        },
        {
            title: 'Доходы',
            count: 119875,
            сurrency: 'rub',
            color: 'rgb(228, 83, 83)',
            data: [],
            labels: []
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
                            color={el.color}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Statistics