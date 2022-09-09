import cn from "classnames"
import Dropdown from "./Dropdown"

const Table = ({ className, columns, data, }) => {
    const tableClass = cn(
        className,
        'table',
    )

    return (
        <table className={tableClass}>
            <tr className='table__row'>
                {columns.map((el, i) => (
                    <th align={el.align} className='table__th' key={i}>
                        <span className="table__title">{el.content.title}</span>
                        {columns?.options.length > 0 && <Dropdown className='table__dropdown' options={columns.options} />}
                    </th>
                ))}
            </tr>
            {(data.length > 0)
                ? data.map((el, i) => (
                    <tr className='table__row' key={i}>
                        {el.map((inner, innerKey) => (
                            <td align={inner.align} key={innerKey}>{inner.content?.title}</td>
                        ))}
                    </tr>
                ))
                :
                <tr className='table__row'>
                    <td colSpan={42}>
                        По вашей ссылке еще никто не зарегистрировался
                    </td>
                </tr>
            }

        </table>
    )
}

export default Table