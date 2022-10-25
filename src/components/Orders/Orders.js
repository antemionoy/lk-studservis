import Button from '../Ui/Button'
import './Orders.scss'
import '../Referrals/ReferralsTable.scss'

const Orders = () => {

    
    const orders = [
        {
            date: '25.08.2022',
            city: 'Воронеж',
            id: 281205,
            type: 'Контрольная работа',
            price: 1575,
            status: 'Выполняется автором',
            reward: '472,5',
        },
        {
            date: '25.08.2022',
            city: 'Воронеж',
            id: 281205,
            type: 'Контрольная работа',
            price: 1575,
            status: 'Выполняется автором',
            reward: '472,5',
        },
        {
            date: '25.08.2022',
            city: 'Воронеж',
            id: 281205,
            type: 'Контрольная работа',
            price: 1575,
            status: 'Выполняется автором',
            reward: '472,5',
        },
        {
            date: '25.08.2022',
            city: 'Воронеж',
            id: 281205,
            type: 'Контрольная работа',
            price: 1575,
            status: 'Выполняется автором',
            reward: '472,5',
        },
        {
            date: '25.08.2022',
            city: 'Воронеж',
            id: 281205,
            type: 'Контрольная работа',
            price: 1575,
            status: 'Выполняется автором',
            reward: '472,5',
        },
    ]

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
                    <table className='referrals-table'>
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

                    </table>
                </div>
            </div>
        </section>
    )
}

export default Orders