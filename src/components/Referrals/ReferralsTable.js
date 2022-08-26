import cn from 'classnames'
import './ReferralsTable.scss'

const ReferralsTable = ({ className, refs }) => {
    const TableClass = cn(
        className,
        'referrals-table'
    )

    return (
        <table className={TableClass}>
            <tr>
                <th>Регистрация</th>
                <th>Имя</th>
                <th>Ваш доход</th>
                <th>Оборот реферала</th>
            </tr>
            {
                (refs.length > 0) ? refs.map((el, i) => (
                    <tr key={i}>
                        <td>{el.date}</td>
                        <td>{el.name}</td>
                        <td>{el.income}</td>
                        <td>{el.turnover}</td>
                    </tr>
                )) :
                    <tr>
                        <td colSpan={4}>
                            По вашей ссылке еще никто не зарегистрировался
                        </td>
                    </tr>
            }

        </table>
    )
}

export default ReferralsTable