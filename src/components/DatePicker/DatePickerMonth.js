import './DatePickerMonth.scss'
import { useMonth } from "@datepicker-react/hooks";

const DatePickerMonth = ({ year, month, firstDayOfWeek }) => {
    const { days, weekdayLabels, monthLabel } = useMonth({
        year,
        month,
        firstDayOfWeek
    });

    console.log(month)

    return (
        <div className="datepicker-month">
            <p className="datepicker-month__label">
                <strong>{monthLabel}</strong>
            </p>
        </div>
    )
}

export default DatePickerMonth