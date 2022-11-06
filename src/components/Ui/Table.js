import cn from "classnames"
import Dropdown from "./Dropdown"
import Icon from "./Icon"

const Table = ({ className, columns, data }) => {
    const tableClass = cn(
        className,
        'table',
    )

    return (
        <table className={tableClass}>
            <thead>
                <tr className='table__row'>
                    {columns.map((el, i) => (
                        <th align={el.align} className='table__th' key={i}>
                            {
                                el.content.options?.length > 0 ?
                                    <Dropdown className='table__dropdown' options={el.content.options} label={el.content.title} />
                                    :
                                    <span className="table__title">{el.content.title}</span>
                            }
                        </th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {(data.length > 0)
                    ? data.map((el, i) => (
                        <tr className='table__row' key={i}>
                            {el?.entries.map((entrie, entrieKey) => (
                                <td key={entrieKey} align='center' valign='middle'>
                                    {entrie.value}
                                    {entrie.status === 'success' && <Icon className='table__icon' name='success' width='13' height='13' />}
                                    {entrie.status === 'сonclusion' && <Icon className='table__icon' name='сonclusion' width='16' height='16' />}
                                    {entrie.status === 'enrollment' && <Icon className='table__icon' name='enrollment' width='16' height='16' />}
                                </td>
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
            </tbody>

        </table>
    )
}

export default Table