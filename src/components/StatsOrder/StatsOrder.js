import { useMemo } from 'react'
import DatePicker from '../DatePicker/DatePicker'
import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Button from '../Ui/Button'
import Select from '../Ui/Select'
import Table from '../Ui/Table'
import './StatsOrder.scss'
import typeTooltip from '../../static/typesWokrs'
import useFetchApi from '../../hooks/useFetchApi'
import { api } from '../../shared/api'

const orders = [
    [
        { content: { title: '25.08.2022' }, name: 'date' },
        { content: { title: 'Воронеж' }, name: 'city' },
        { content: { title: '281205' }, name: 'id' },
        { content: { title: 'Контрольная работа', name: 'type' }, filter: ['works'] },
        { content: { title: '1575' }, name: 'price' },
        { content: { title: 'Выполняется автором', name: 'status' }, filter: ['status'] },
        { content: { title: '472,5', name: 'description' }, status: 'success' },
        { content: { title: 'default', name: 'label' }, filter: ['default'] }
    ],
    [
        { content: { title: '25.08.2022' }, name: 'date' },
        { content: { title: 'Воронеж' }, name: 'city' },
        { content: { title: '281205' }, name: 'id' },
        { content: { title: 'Контрольная работа', name: 'type' }, filter: ['works'] },
        { content: { title: '1575' }, name: 'price' },
        { content: { title: 'Выполняется автором', name: 'status' }, filter: ['status'] },
        { content: { title: '472,5', name: 'description' }, status: 'success' },
        { content: { title: 'default', name: 'label' }, filter: ['default'] }
    ],
    [
        { content: { title: '25.08.2022' }, name: 'date' },
        { content: { title: 'Воронеж' }, name: 'city' },
        { content: { title: '281205' }, name: 'id' },
        { content: { title: 'Контрольная работа', name: 'type' }, filter: ['works'] },
        { content: { title: '1575' }, name: 'price' },
        { content: { title: 'Выполняется автором', name: 'status' }, filter: ['status'] },
        { content: { title: '472,5', name: 'description' }, status: 'success' },
        { content: { title: 'default', name: 'label' }, filter: ['default'] }
    ],
    [
        { content: { title: '25.08.2022' }, name: 'date' },
        { content: { title: 'Воронеж' }, name: 'city' },
        { content: { title: '281205' }, name: 'id' },
        { content: { title: 'Контрольная работа', name: 'type' }, filter: ['works'] },
        { content: { title: '1575' }, name: 'price' },
        { content: { title: 'Выполняется автором', name: 'status' }, filter: ['status'] },
        { content: { title: '472,5', name: 'description' }, status: 'success' },
        { content: { title: 'default', name: 'label' }, filter: ['default'] }
    ],
    [
        { content: { title: '25.08.2022' }, name: 'date' },
        { content: { title: 'Воронеж' }, name: 'city' },
        { content: { title: '281205' }, name: 'id' },
        { content: { title: 'Контрольная работа', name: 'type' }, filter: ['works'] },
        { content: { title: '1575' }, name: 'price' },
        { content: { title: 'Выполняется автором', name: 'status' }, filter: ['status'] },
        { content: { title: '472,5', name: 'description' }, status: 'success' },
        { content: { title: 'default', name: 'label' }, filter: ['default'] }
    ],
]

// console.log(JSON.stringify(orders))

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
    const {data, loading, error} = useFetchApi(api.links.orders.link)

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
                            <DatePicker />
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
                    <Table className='stats-order__table' columns={columns} data={data} />
                    <Pagination className='stats-order__pagination' max={2} />
                </div>
            </div>
        </section>
    )
}

export default StatsOrder