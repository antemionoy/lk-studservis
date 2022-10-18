import './DatePickerMonth.scss'
import { useMonth } from "@datepicker-react/hooks";
import DataPickerDay from './DatePickerDay';
import { format, parse } from 'date-fns'
import { ru } from 'date-fns/locale'

const DatePickerMonth = ({ year, month, firstDayOfWeek }) => {
    const { days, weekdayLabels, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek
    });

    const activeMonth = new Date(monthLabel)
    // const options = { month: 'long'};
    // console.log(new Intl.DateTimeFormat('ru-RU', options).format(Xmas95));

    console.log(activeMonth)

    return (
        <div className="datapicker-hidden" style={{ display: 'flex' }}>
            <div className="datepicker-month">
                <p className="datepicker-month__label">
                    <strong>
                    {format(parse('06.08.2020', 'dd.MM.yyyy', new Date(), {locale: ru}), 'do MMMM', {locale: ru})}

                        {/* {format(monthLabel, 'MMMM yyyy', {locale})} */}
                        {monthLabel}
                    </strong>
                </p>
                <div
                    style={{
                        display: "grid",
                        gridTemplateColumns: "repeat(7, 1fr)",
                        justifyContent: "center"
                    }}
                >
                    {weekdayLabels.map(dayLabel => (
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