import { useMemo } from 'react'
import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Button from '../Ui/Button'
import Select from '../Ui/Select'
import Table from '../Ui/Table'
import './StatsOrder.scss'

const orders = [
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5', icon: 'check' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ],
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа', filter: 'type' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ],
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа', filter: 'type' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ],
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа', filter: 'type' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ],
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа', filter: 'type' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ],
    [
        { content: { title: '25.08.2022' }, align: 'left' },
        { content: { title: 'Воронеж' }, align: 'left' },
        { content: { title: '281205' }, align: 'right' },
        { content: { title: 'Контрольная работа', filter: 'type' }, align: 'left' },
        { content: { title: '1575' }, align: 'left', },
        { content: { title: 'Выполняется автором' }, align: 'left' },
        { content: { title: '472,5' }, align: 'left' },
        { content: { title: 'default' }, align: 'left' }
    ]
]

const typeTooltip = [
    {
        name: 'Контрольная работа',
        value: 'Контрольная работа',
        tag: 'kontrolnay'
    },
    {
        name: 'Курсовая работа',
        value: 'Курсовая работа',
        tag: 'kursovay'
    },
    {
        name: 'Отчет по практике',
        value: 'Отчет по практике',
        tag: 'otchet'
    },
]

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
const StatsOrder = () => {
    const columns = useMemo(() => [
        { content: { title: 'Дата' }, align: 'left' },
        { content: { title: 'Город' }, align: 'left' },
        { content: { title: 'ID заказа' }, align: 'right' },
        { content: { title: 'Тип работы', options: typeTooltip }, align: 'left' },
        { content: { title: 'Стоимость' }, align: 'left', },
        { content: { title: 'Статус заказа' }, align: 'left' },
        { content: { title: 'Вознаграждение' }, align: 'left' },
        { content: { title: 'Метка' }, align: 'left' }
    ], [])

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