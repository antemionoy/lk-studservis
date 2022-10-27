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
import { useMemo, useState } from 'react';
import Table from '../Ui/Table';
import DatePicker from '../DatePicker/DatePicker'

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

const typeTooltip = [
    {
        name: 'Зачисление',
        value: 'Зачисление',
        tag: 'zachislenie'
    },
    {
        name: 'Вывод',
        value: 'Вывод',
        tag: 'vivod'
    },
    {
        name: 'Списание',
        value: 'Списание',
        tag: 'spicaniye'
    },
]

const orders = [
    [
        { content: { title: '25.08.2022' } },
        { content: { title: '-4800' } },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ],
    [
        { content: { title: '25.08.2022' }, },
        { content: { title: '4800' }, status: 'enrollment' },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ],
    [
        { content: { title: '25.08.2022' }, },
        { content: { title: '4800' }, status: 'enrollment' },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ],
    [
        { content: { title: '25.08.2022' }, },
        { content: { title: '-4800' }, status: 'сonclusion' },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ],
    [
        { content: { title: '25.08.2022' }, },
        { content: { title: '-4800' } },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ],
    [
        { content: { title: '25.08.2022' }, },
        { content: { title: '-4800' }, },
        { content: { title: 'Зачисление', filter: 'type' }, },
        { content: { title: 'Выплата партнёру по заказу 526316' }, }
    ]
]

console.log(JSON.stringify(orders))

const StatsMain = () => {
    const [viewChecked, setViewChecked] = useState(false)
    const columns = useMemo(() => [
        { content: { title: 'Дата' }, align: 'left' },
        { content: { title: 'Сумма' }, align: 'left', },
        { content: { title: 'Тип', options: typeTooltip }, align: 'left' },
        { content: { title: 'Описание' }, align: 'left' }
    ], [])

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
                            <DatePicker />

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
                            <SwithcIcons
                                className='stats-main__switch'
                                handler={setViewChecked}
                            />
                            <Options
                                className='stats-main__options'
                                options={statsOptions}
                            />
                        </div>
                    </div>
                    {!!viewChecked ?
                        <>
                            <Table className='stats-main__table' columns={columns} data={orders} />
                        </>
                        :
                        <div className="stats-main__chart" style={{ height: '360px' }}>
                            <Line data={data} options={optionsChart} height='360' />
                        </div>
                    }
                </div>
            </div>
        </section>
    )
}

export default StatsMain