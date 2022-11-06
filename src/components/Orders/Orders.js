import Button from '../Ui/Button'
import './Orders.scss'
import '../Referrals/ReferralsTable.scss'
import { useMemo } from 'react'
import Table from '../Ui/Table'
import useFetchApi from '../../hooks/useFetchApi'
import { api } from '../../shared/api'

const Orders = () => {
    const {data, loading, error} = useFetchApi(api.links.orders.link)

    // const orders = [
    //     [
    //         { content: { title: '25.08.2022' } },
    //         { content: { title: 'Воронеж' } },
    //         { content: { title: '281205',} },
    //         { content: { title: 'Контрольная работа'}},
    //         { content: { title: '1575' }, },
    //         { content: { title: 'Выполняется автором' },  },
    //         { content: { title: '472,5'}, status: 'success' },
    //     ],
    //     [
    //         { content: { title: '25.08.2022' } },
    //         { content: { title: 'Воронеж' } },
    //         { content: { title: '281205',} },
    //         { content: { title: 'Контрольная работа'}},
    //         { content: { title: '1575' }, },
    //         { content: { title: 'Выполняется автором' },  },
    //         { content: { title: '472,5'}, },
    //     ],
    //     [
    //         { content: { title: '25.08.2022' } },
    //         { content: { title: 'Воронеж' } },
    //         { content: { title: '281205',} },
    //         { content: { title: 'Контрольная работа'}},
    //         { content: { title: '1575' }, },
    //         { content: { title: 'Выполняется автором' },  },
    //         { content: { title: '472,5'},  status: 'success' },
    //     ],
    //     [
    //         { content: { title: '25.08.2022' } },
    //         { content: { title: 'Воронеж' } },
    //         { content: { title: '281205',} },
    //         { content: { title: 'Контрольная работа'}},
    //         { content: { title: '1575' }, },
    //         { content: { title: 'Выполняется автором' },  },
    //         { content: { title: '472,5'}, status: 'success' },
    //     ],
    // ]

    // console.log(JSON.stringify(orders))

    // const orders = [
    //     {
    //         date: '25.08.2022',
    //         city: 'Воронеж',
    //         id: 281205,
    //         type: 'Контрольная работа',
    //         price: 1575,
    //         status: 'Выполняется автором',
    //         reward: '472,5',
    //     },
    //     {
    //         date: '25.08.2022',
    //         city: 'Воронеж',
    //         id: 281205,
    //         type: 'Контрольная работа',
    //         price: 1575,
    //         status: 'Выполняется автором',
    //         reward: '472,5',
    //     },
    //     {
    //         date: '25.08.2022',
    //         city: 'Воронеж',
    //         id: 281205,
    //         type: 'Контрольная работа',
    //         price: 1575,
    //         status: 'Выполняется автором',
    //         reward: '472,5',
    //     },
    //     {
    //         date: '25.08.2022',
    //         city: 'Воронеж',
    //         id: 281205,
    //         type: 'Контрольная работа',
    //         price: 1575,
    //         status: 'Выполняется автором',
    //         reward: '472,5',
    //     },
    //     {
    //         date: '25.08.2022',
    //         city: 'Воронеж',
    //         id: 281205,
    //         type: 'Контрольная работа',
    //         price: 1575,
    //         status: 'Выполняется автором',
    //         reward: '472,5',
    //     },

    // ]
    const columns = useMemo(() => [
        { content: { title: 'Дата' }, align: 'left' },
        { content: { title: 'Город' }, align: 'left', },
        { content: { title: 'ID Заказа' }, align: 'left', },
        { content: { title: 'Тип' }, align: 'left', },
        { content: { title: 'Стоимость', align: 'left' } },
        { content: { title: 'Статус', align: 'left' } },
        { content: { title: 'Вознаграждение' }, align: 'left' },
        { content: { title: 'Метка' }, align: 'left' }
    ], [])

    return (
        <section className="orders">
            <div className="orders__container container">
                <div className="orders__content section">
                    <div className="orders__head d-flex">
                        <h2 className="orders__title title title_h2">Последние заказы</h2>
                        <Button className='orders__button' size='large' bordered>
                            Все заказы
                        </Button>
                    </div>
                    <Table className='orders__table' columns={columns} data={data} />
                    {/* <table className='referrals-table'>
                        <tr className='referrals-table__row'>
                            <th align='left' className='referrals-table__th'>Дата</th>
                            <th align='left' className='referrals-table__th'>Город</th>
                            <th align='right' className='referrals-table__th'>ID Заказа</th>
                            <th align='left' className='referrals-table__th'>Тип работы</th>
                            <th align='right' className='referrals-table__th'>Стоимость, руб.</th>
                            <th align='left' className='referrals-table__th'>Статус заказа</th>
                            <th align='right' className='referrals-table__th'>Вознаграждение, руб.</th>
                        </tr>
                        {
                            (orders.length > 0) ? orders.map((el, i) => (
                                <tr className='referrals-table__row' key={i}>
                                    <td>{el.date}</td>
                                    <td>{el.city}</td>
                                    <td align='right'>{el.id}</td>
                                    <td>{el.type}</td>
                                    <td align='right'>{el.price}</td>
                                    <td>{el.status}</td>
                                    <td align='right'>{el.reward}</td>
                                </tr>
                            )) :
                                <tr className='referrals-table__row'>
                                    <td colSpan={4}>
                                        По вашей ссылке еще никто не зарегистрировался
                                    </td>
                                </tr>
                        }

                    </table> */}
                </div>
            </div>
        </section>
    )
}

export default Orders