import useFetchApi from '../../hooks/useFetchApi'
import './Statistics.scss'
import StatisticsItem from './StatisticsItem'
import { api } from '../../shared/api'

const Statistics = () => {
    const StatsColors = ['rgb(50, 31, 219, 1)', 'rgb(248, 177, 20)', 'rgb(228, 83, 83)']
    const {data, loading, error} = useFetchApi(api.links.activity.link) //params 'short_stats'

    // const items = [
    //     {
    //         title: 'Заявки',
    //         count: 10,
    //         percent: -12.6,
    //         data: [0, 5, 10, 15, 20, 30, 40],
    //         labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
    //     },
    //     {
    //         title: 'Заказы',
    //         count: 3976098,
    //         percent: -27,
    //         data: [0, 5, 10, 15, 20, 30, 40],
    //         labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
    //     },
    //     {
    //         title: 'Доходы',
    //         count: 119875,
    //         сurrency: 'rub',
    //         data: [0, 5, 10, 15, 20, 30, 40],
    //         labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
    //     },
    //     {
    //         title: 'Конверсия',
    //         count: 119875,
    //         сurrency: 'rub',
    //         data: [0, 5, 10, 15, 20, 30, 40],
    //         labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
    //     },
    // ]

    // console.log(JSON.stringify(items))
    let items = []
    if(data?.length){
        items = [data[0], data[1], data[2]]
    }


    return (
        <section className="statistics">
            <div className="statistics__container container">
                <ul className="statistics__list d-grid">
                    {items && items.map((el, i) => (
                        el &&
                        <StatisticsItem
                            key={i}
                            className={'statistics__item'}
                            title={el.title}
                            count={el.count}
                            percent={el.percent}
                            color={el.color}
                            dataPoints={el.data}
                            dataLabels={el.labels}
                        />
                    ))}
                </ul>
            </div>
        </section>
    )
}

export default Statistics