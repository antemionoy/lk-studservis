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
import useFetchApi from '../../hooks/useFetchApi';
import { api } from '../../shared/api'
import { useState } from 'react';
import cn from 'classnames';

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

const options = {
    maintainAspectRatio: false,
    plugins: { legend: { display: false } },
}

const Traffic = () => {
    const [state, setState] = useState()
    const [activePeriod, setActivePeriod] = useState(0)
    const { data: items, loading, error } = useFetchApi(api.links.activity.link)

    const datasets = [
        
    ]

    const data = {
        labels: ["15 Июня", "16 Июня", "17 Июня", "18 Июня", "19 Июня", "20 Июня", "21 Июня"],
        datasets: [
            {
                label: 'Заявки',
                data: [0, 5, 10, 15, 20, 30, 40],
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

    const colors = ['#321FDB', '#F8B114', '#E45353', '#2EB85C']
    let trafficSwitches = []
    let i = 0
    for (let { title, count, percent } of items) {
        trafficSwitches.push(
            {
                title,
                count,
                percent,
                total: +20,
                color: colors[i]
            }
        )
        i++
    }

    let filterButtonClass
    const changePeriodHandler = (index) => {
        filterButtonClass = cn(
            'traffic__filter-button',
            index === activePeriod ? 'traffic__filter-button_active' : ''
        )
        return () => {
            setActivePeriod(activePeriod === index ? null : index)
        }
    }

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
                                <li className='traffic__filter-item' onClick={changePeriodHandler(i)} key={i}>
                                    <button type='button' className={filterButtonClass}>
                                        {el.name}
                                    </button>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="traffic__chart">
                        <Line
                            data={data}
                            options={options}
                            height='420'
                        />
                    </div>
                    <TrafficSwitches
                        switches={trafficSwitches}
                        className='traffic__switches'
                    />
                </div>
            </div>
        </section>
    )
}

export default Traffic