import Button from '../Ui/Button'
import Calendar from '../Ui/Calendar'
import Select from '../Ui/Select'
import './StatsMain.scss'
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
import Options from '../Ui/Options';
import SwithcIcons from '../Ui/SwitchIcons';

const options = [
    {
        name: 'За все время',
        value: 'За все время'
    },
    {
        name: 'За неделю',
        value: 'За неделю'
    },
    {
        name: 'За месяц',
        value: 'За месяц'
    },
    {
        name: 'За год',
        value: 'За год'
    },
]



const StatsMain = () => {
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
            }
        ]
    }

    const optionsChart = {
        maintainAspectRatio: false,
        plugins: { legend: { display: false } },
    }

    const statsOptions = [
        {
            name: 'Заказы',
            value: 'orders'
        },
        {
            name: 'Ребилы',
            value: 'rebilly'
        },
        {
            name: 'Переходы',
            value: 'transitions'
        },
        {
            name: 'Заявки',
            value: 'applications'
        },
        {
            name: 'Спам',
            value: 'spam'
        },
        {
            name: 'CR',
            value: 'cr'
        },
        {
            name: 'EPC',
            value: 'epc'
        },
        {
            name: 'Доход',
            value: 'income'
        },
        {
            name: 'Заморожено',
            value: 'frozen'
        },
        {
            name: 'Возврат',
            value: 'return'
        },
    ]


    return (
        <section className="stats-main">
            <div className="stats-main__container container">
                <div className="stats-main__section section">
                    <div className="stats-main__head d-flex">
                        <div className="stats-main__main d-flex">
                            {/* <Calendar /> */}

                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Select
                                className='stats-main__select'
                                options={options}
                                name='time'
                            />
                            <Button className='stats-main__button' bgcolor='blue' size='medium'>
                                Выгрузить excel
                            </Button>
                        </div>

                        <div className="stats-main__right d-flex">
                            <SwithcIcons className='stats-main__switch'/>
                            <Options
                                className='stats-main__options'
                                options={statsOptions}
                            />
                        </div>

                    </div>
                    <div className="stats-main__chart" style={{ height: '360px' }}>
                        <Line data={data} options={optionsChart} height='360' />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default StatsMain