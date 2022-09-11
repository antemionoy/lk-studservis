import { useMemo } from 'react'
import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Tabs from '../Tabs/Tabs'
import TabsContent from '../Tabs/TabsContent'
import Button from '../Ui/Button'
import Select from '../Ui/Select'
import Table from '../Ui/Table'
import './History.scss'

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
        { content: { title: '472,5' }, align: 'left', status: 'important' },
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
        { content: { title: '472,5' }, align: 'left', status: 'success' },
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

const History = () => {
    const tabs = [
        {
            id: 'all',
            name: 'Все',
        },
        {
            id: 'coming',
            name: 'Приход'
        },
        {
            id: 'consumption',
            name: 'Расход'
        },
    ]

    const info = [
        {
            name: 'Приход',
            value: '30000р'
        },
        {
            name: 'Расход',
            value: '30000р'
        },
        {
            name: 'Сальдо',
            value: '0р'
        }
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
        <section className="history">
            <div className="history__container container">
                <div className="history__section section">
                    <Tabs className='history__tabs' nav={tabs} info={info} >
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
                        <TabsContent className='history__content' id={0}>
                            <Table className='stats-order__table' columns={columns} data={orders} />
                        </TabsContent>
                        <TabsContent className='history__content' id={1}>

                        </TabsContent>
                        <TabsContent className='history__content' id={2}>

                        </TabsContent>
                    </Tabs>
                    <Pagination className='stats-order__pagination' max={2} />
                </div>
            </div>
        </section>
    )
}

export default History

