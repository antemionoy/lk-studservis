import { useMemo } from 'react'
import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Button from '../Ui/Button'
import Select from '../Ui/Select'
import Table from '../Ui/Table'
import './StatsOrder.scss'

const orders = [
    [
        { content: 'Дата', align: 'left' },
        { content: 'Город', align: 'left' },
        { content: {text: 'ID заказа'}, align: 'right' },
        { content: {title: 'Тип работы', options: ['']}, align: 'left', filter: [''] },
        { content: 'Стоимость', align: 'left',  },
        { content: 'Статус заказа', align: 'left' },
        { content: 'Вознаграждение', align: 'left' },
        { content: 'Метка', align: 'left' }
    ],
    {
        id: '25.08.2022',
        items: ['25.08.2022', 'Воронеж', '281205'],
        city: 'Воронеж',
        id: 281205,
        type: 'Контрольная работа',
        price: 1575,
        status: 'Выполняется автором',
        reward: '472,5',
        label: 'default'
    },
    {
        date: '25.08.2022',
        city: 'Воронеж',
        id: 281205,
        type: 'Контрольная работа',
        price: 1575,
        status: 'Выполняется автором',
        reward: '472,5',
        label: 'default'
    },
    {
        date: '25.08.2022',
        city: 'Воронеж',
        id: 281205,
        type: 'Контрольная работа',
        price: 1575,
        status: 'Выполняется автором',
        reward: '472,5',
        label: 'default'
    },
    {
        date: '25.08.2022',
        city: 'Воронеж',
        id: 281205,
        type: 'Контрольная работа',
        price: 1575,
        status: 'Выполняется автором',
        reward: '472,5',
        label: 'default'
    },
    {
        date: '25.08.2022',
        city: 'Воронеж',
        id: 281205,
        type: 'Контрольная работа',
        price: 1575,
        status: 'Выполняется автором',
        reward: '472,5',
        label: 'default'
    },
]

const StatsOrder = () => {
    const columns = useMemo(() => [
        {
            name: 'Дата',
            align: 'left'
        },
        {
            name: 'Город',
            align: 'left'
        },
        {
            name: 'ID Заказа',
            align: 'right'
        },
        {
            name: 'Тип работы',
            align: 'left'
        },
        {
            name: 'Стоимость, руб.',
            align: 'right'
        },
        {
            name: 'Статус заказа',
            align: 'left'
        },
        {
            name: 'Вознаграждение, руб.',
            align: 'right'
        },
        {
            name: 'Метка',
            align: 'right'
        }
    ], [])

    const options = [
        {
            name: 'За все время',
            value: 'За все время'
        },
        {
            name: 'За все время 2',
            value: 'За все время 2'
        },
        {
            name: 'За все время 3',
            value: 'За все время 3'
        }
    ]
    return (
        <section className='stats-order'>
            <div className="stats-order__container container">
                <div className="stats-order__section section">
                    <div className="stats-order__head d-flex">
                        <div className="stats-order__main d-flex">
                            <input type="date" className="stats-order__calendar" />
                            <Select
                                className='stats-order__select'
                                options={options}
                                name='time'
                            />
                            <Button className='stats-order__button' bgcolor='blue' size='medium'>
                                Выгрузить excel
                            </Button>
                        </div>
                        <ShortForm
                            className='stats-order__search'
                            icon='search'
                            placeholder='Номер заказа (6 цифр)'
                        />
                    </div>
                    <Table className='stats-order__table' columns={columns} data={orders} />
                    <Pagination className='stats-order__pagination' max={2} />
                </div>
            </div>
        </section>
    )
}

export default StatsOrder