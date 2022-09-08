import cn from "classnames"

const Table = ({ className, columns, data, }) => {
    const tableClass = cn(
        className,
        'table',
    )

    return (
        <table className={tableClass}>
            <tr className='table__row'>
                {columns.map((el, i) => (
                    <th align={el.align} className='table__th' key={i}>{el.name}</th>
                ))}
            </tr>
            {(data.length > 0)
                ? data.map((el, i) => (
                    <tr className='table__row' key={i}>
                        <td>{el?.date}</td>
                        <td>{el?.city}</td>
                        <td align='right'>{el.id}</td>
                        <td>{el.type}</td>
                        <td align='right'>{el.price}</td>
                        <td>{el.status}</td>
                        <td align='right'>{el.reward}</td>
                        <td align='right'>{el.label}</td>
                    </tr>
                ))
                :
                <tr className='table__row'>
                    <td colSpan={4}>
                        По вашей ссылке еще никто не зарегистрировался
                    </td>
                </tr>
            }

        </table>
    )
}

export default Table