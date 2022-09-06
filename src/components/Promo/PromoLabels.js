import './PromoLabels.scss'
import FormField from '../Form/FormField'
import Button from '../Ui/Button'

const PromoLabels = () => {
    const labels = [
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
        {
            date: '25.08.2022',
            name: 'Екатерина Васильева',
            income: 0,
            turnover: 0
        },
    ]

    return (
        <div className="promo-labels">
            <div className="promo-labels__grid d-grid">
                <div className="promo-labels__content">
                    <div className="promo-labels__head d-flex">
                        <p className="promo-labels__text">Добавить метку</p>
                        <FormField
                            className='promo-labels__field'
                            placeholder='Введите название метки'
                        />
                        <Button
                            className='promo-labels__button'
                            size='medium'
                            bgcolor='blue'>
                            Добавить
                        </Button>
                    </div>
                    <table className=''>
                        <tr className='referrals-table__row'>
                            <th align='left' className='referrals-table__th'>Регистрация</th>
                            <th align='left' className='referrals-table__th'>Имя</th>
                            <th align='left' className='referrals-table__th'>Ваш доход</th>
                            <th align='left' className='referrals-table__th'>Оборот реферала</th>
                        </tr>
                        {
                            (labels.length > 0) ? labels.map((el, i) => (
                                <tr className='referrals-table__row' key={i}>
                                    <td>{el.date}</td>
                                    <td>{el.name}</td>
                                    <td>{el.income}</td>
                                    <td>{el.turnover}</td>
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
                <div className="promo-labels__sidebar">
                    <h2 className="promo-labels__title title_h2">Метки для каналов</h2>
                    <div className="promo-labels__descr">
                        <p>
                            Рекомендуем использовать метки для
                            разделения каналов трафика в статистике.
                        </p>
                        <p>
                            Например, вы привлекаете трафик с
                            помощью Директа и сетки сайтов.
                        </p>
                        <p>
                            Добавьте метки: директ и сайты.
                            В ссылке, идентификатор метки —
                            ?partnerid=[id]
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default PromoLabels