import './DatePickerMonth.scss'
import { useMonth } from "@datepicker-react/hooks";
import DataPickerDay from './DatePickerDay';
import DatepickerContext from '../../contexts/DatePickerContext'
import Icon from '../Ui/Icon';

const DatePickerMonth = ({ year, month, firstDayOfWeek, prevMonth, nextMonth, prevYear, nextYear }) => {
    const { days, weekdayLabels, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek
    });

    const monthsRu = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
    const date = new Date(monthLabel)
    let activeMonth = monthsRu[date.getMonth()];
    let daysRu = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

    const handlerChange = (e, changeCb) => {
        e.stopPropagation()
        changeCb(1) // one for change years
    }

    return (
        <div className="datepicker-month">
            <div className="datepicker-month__top d-flex">
                <div className="datepicker-month__side d-flex">
                    <button type='button' className="datepicker-month__button d-flex" onClick={(e) => handlerChange(e, prevYear)}>
                        <Icon name='prev-icon' className='datepicker-month__icon' width='7' height='11' />
                        <Icon name='prev-icon' className='datepicker-month__icon' width='7' height='11' />
                    </button>
                    <button type='button' className="datepicker-month__button datepicker-month__control" onClick={(e) => handlerChange(e, prevMonth)}>
                        <Icon name='prev-icon' className='datepicker-month__icon' width='7' height='11' />
                    </button>
                </div>
                <p className="datepicker-month__label">
                    {`${activeMonth} ${year}`}
                </p>
                <div className="datepicker-month__side d-flex">
                    <button type='button' className="datepicker-month__button datepicker-month__control" onClick={(e) => handlerChange(e, nextMonth)}>
                        <Icon name='prev-icon' className='datepicker-month__icon datepicker-month__icon_rotate' width='7' height='11' />
                    </button>
                    <button type='button' className="datepicker-month__button d-flex" onClick={(e) => handlerChange(e, nextYear)}>
                        <Icon name='prev-icon' className='datepicker-month__icon datepicker-month__icon_rotate' width='7' height='11' />
                        <Icon name='prev-icon' className='datepicker-month__icon datepicker-month__icon_rotate' width='7' height='11' />
                    </button>
                </div>
            </div>
            <div className="datepicker-month__body">
                <div
                    className='datepicker-month__week'
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        justifyContent: "center"
                    }}
                >
                    {daysRu.map(dayLabel => (
                        <div style={{ textAlign: "center" }} key={dayLabel}>
                            {dayLabel}
                        </div>
                    ))}
                </div>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        justifyContent: "center"
                    }}
                >
                    {days.map(day => (
                        <DataPickerDay date={day.date} key={day.dayLabel} day={day.dayLabel} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default DatePickerMonth