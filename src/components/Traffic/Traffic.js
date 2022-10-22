import './Traffic.scss'
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2";
import Chart from 'chart.js/auto';
import TrafficSwitches from './TrafficSwitches';

const filter = [
    {
        name: 'За сегодня',
        value: 'today'
    },
    {
        name: 'За неделю',
        value: 'week'
    },
    {
        name: 'За месяц',
        value: 'month'
    },
    {
        name: 'За год',
        value: 'year'
    },
]

const Traffic = () => {
    const data = {
        labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
        datasets: [
            {
                label: 'Заявки',
                data: [0, 5, 10, 15, 20, 30, 40, 60, 80],
                fill: true,
                backgroundColor: "rgba(50, 31, 219, 0.2)",
                borderColor: "#321FDB",
                tension: 0.4
            },
            {
                label: 'Заказы',
                data: [12, 15, 20, 40, 14, 40, 4],
                fill: true,
                backgroundColor: "rgba(50, 31, 219, 0.2)",
                borderColor: "#F8B114",
                tension: 0.4
            }
        ]
    }

    const options = {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
    }

    const trafficSwitches = [
        {
            name: 'Заявки',
            count: 80,
            total: 20,
            color: '#321FDB',
        },
        {
            name: 'Заказы',
            count: 80,
            total: +20,
            color: '#F8B114',
        },
        {
            name: 'Доход',
            count: 80,
            total: 20,
            color: '#E45353',
        },
        {
            name: 'Конверсия',
            count: 80,
            total: 80,
            color: '#2EB85C',
        },
    ]


    return (
        <section className="traffic">
            <div className="traffic__container container">
                <div className="traffic__content section">
                    <div className="traffic__top d-flex">
                        <div className="traffic__info">
                            <h2 className='traffic__title title title_h2'>Активность</h2>
                            <p className='traffic__range'>15 Июня - 21 Июня </p>
                        </div>
                        <ul className="traffic__filter d-flex">
                            {filter.map((el, i) => (
                                <li className="traffic__filter-item" key={i}>
                                    <button type='button' className="traffic__filter-button">
                                        {el.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="traffic__chart">
                        <Line data={data} options={options} height='420' />
                    </div>
                    <TrafficSwitches switches={trafficSwitches} className='traffic__switches' />
                </div>
            </div>
        </section>
    )
}

export default Traffic