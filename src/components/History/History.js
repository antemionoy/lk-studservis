import { useMemo } from 'react'
import Pagination from '../Pagination/Pagination'
import ShortForm from '../ShortForm/ShortForm'
import Tabs from '../Tabs/Tabs'
import TabsContent from '../Tabs/TabsContent'
import Button from '../Ui/Button'
import Select from '../Ui/Select'
import Table from '../Ui/Table'
import './History.scss'
import DatePicker from '../DatePicker/DatePicker'
import useFetchApi from '../../hooks/useFetchApi'
import { api } from '../../shared/api'

const orders = [
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
    [
        { content: { title: '25.08.2022', name: 'date' } },
        { content: { title: '-4800', name: 'price' } },
        { content: { title: 'Зачисление', name: 'type' }, filter: ['enrollment, сonclusion, writtenoff'] },
        { content: { title: 'Выплата партнёру по заказу 526316', name: 'description' } }
    ],
]



const dataCustom =
[
    {
        id: 0,
        entries: [
            {
                value: '25.08.2022',
                code: 'date',
                rowId: 0
            },
            {
                value: '1575',
                code: 'price',
                rowId: 0,
            },
            {
                value: 'Зачисление',
                code: 'type',
                rowId: 0,
                filter: ''
            },
            {
                value: 'В работе',
                code: 'description',
                rowId: 0,
            },
        ]
    },
    {
        id: 1,
        entries: [
            {
                value: '25.08.2022',
                code: 'date',
                rowId: 1
            },
            {
                value: '1575',
                code: 'price',
                rowId: 1,
            },
            {
                value: 'Зачисление',
                code: 'type',
                rowId: 1,
                filter: ''
            },
            {
                value: 'В работе',
                code: 'description',
                rowId: 1,
            },
        ]
    },
    {
        id: 2,
        entries: [
            {
                value: '25.08.2022',
                code: 'date',
                rowId: 2
            },
            {
                value: '1575',
                code: 'price',
                rowId: 2,
            },
            {
                value: 'Зачисление',
                code: 'type',
                rowId: 2,
                filter: ''
            },
            {
                value: 'В работе',
                code: 'description',
                rowId: 2,
            },
        ]
    },
    {
        id: 3,
        entries: [
            {
                value: '25.08.2022',
                code: 'date',
                rowId: 3
            },
            {
                value: '1575',
                code: 'price',
                rowId: 3,
            },
            {
                value: 'Зачисление',
                code: 'type',
                rowId: 3,
                filter: ''
            },
            {
                value: 'В работе',
                code: 'description',
                rowId: 3,
            },
        ]
    },
]

// params 

// console.log(JSON.stringify(dataCustom))

const History = () => {
    const { data, loading, error } = useFetchApi(api.links.history.link)

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

    const columns = useMemo(() => [
        { content: { title: 'Дата' }, align: 'сenter' },
        { content: { title: 'Сумма' }, align: 'сenter', },
        { content: { title: 'Тип', options: typeTooltip }, align: 'сenter' },
        { content: { title: 'Описание' }, align: 'сenter' }
    ], [])

    const head = (
        <div className="history__head d-flex">
            <div className="history__main d-flex">
                <DatePicker />
                <Select
                    className='history__select'
                    options={options}
                    name='time'
                />
                <Button className='history__button' bgcolor='blue' size='medium'>
                    Выгрузить excel
                </Button>
            </div>
            <ShortForm
                className='history__search'
                icon='search'
                placeholder='Номер заказа (6 цифр)'
            />
        </div>
    )

    return (
        <section className="history">
            <div className="history__container container">
                <div className="history__section section">
                    <Tabs className='history__tabs' nav={tabs} info={info} >
                        <TabsContent className='history__content' id={0}>
                            {head}
                            <Table className='history__table' columns={columns} data={data} />
                        </TabsContent>
                        <TabsContent className='history__content' id={1}>
                            {head}
                            <Table className='history__table' columns={columns} data={data} />
                        </TabsContent>
                        <TabsContent className='history__content' id={2}>
                            {head}
                            <Table className='history__table' columns={columns} data={data} />
                        </TabsContent>
                    </Tabs>
                    <Pagination className='history__pagination' max={2} />
                </div>
            </div>
        </section>
    )
}

export default History

