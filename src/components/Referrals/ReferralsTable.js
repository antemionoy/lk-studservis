import cn from 'classnames'
import './ReferralsTable.scss'

const ReferralsTable = ({ className, refs }) => {
    const TableClass = cn(
        className,
        'referrals-table'
    )

    return (
        <table className={TableClass}>
            <tr className='referrals-table__row'>
                <th align='left' className='referrals-table__th'>Регистрация</th>
                <th align='left' className='referrals-table__th'>Имя</th>
                <th align='left' className='referrals-table__th'>Ваш доход</th>
                <th align='left' className='referrals-table__th'>Оборот реферала</th>
            </tr>
            {
                (refs.length > 0) ? refs.map((el, i) => (
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
    )
}

export default ReferralsTable