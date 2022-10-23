import './DatePicker.scss'
import { useEffect, useState, useRef } from 'react';
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import DatepickerContext from '../../contexts/DatePickerContext'
import Icon from '../Ui/Icon';
import DatePickerMonth from './DatePickerMonth';
import cn from 'classnames';
import todayDate from '../../helpers/todayDate';

const DatePicker = () => {
    const [showCalendar, setShowCalendar] = useState(false)
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE,
    });
    const wrapperRef = useRef(null)
    const today = todayDate()

    const startDateInput = today ?? state.startDate.toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })
    const endDateInput = state.endDate && state.endDate.toLocaleString('ru-RU', { year: 'numeric', month: '2-digit', day: '2-digit' })

    const classDatapickerHidden = cn(
        'datepicker__hidden',
        !!showCalendar && 'datepicker__hidden_show'
    )

    const {
        firstDayOfWeek,
        activeMonths,
        isDateSelected,
        isDateHovered,
        isFirstOrLastSelectedDate,
        isDateBlocked,
        isDateFocused,
        focusedDate,
        onDateHover,
        onDateSelect,
        onDateFocus,
        goToPreviousMonths,
        goToNextMonths,
        goToPreviousYear,
        goToNextYear,
    } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput,
        onDatesChange: handleDateChange,
    });

    function handleDateChange(data) {
        if (!data.focusedInput) {
            setState({ ...data, focusedInput: START_DATE });
        } else {
            setState(data);
        }
    }

    const toggleShow = (e) => {
        e.stopPropagation()
        setShowCalendar(() => !showCalendar)
    }

    useEffect(() => {
        const handlerClick = (e) => {
            wrapperRef.current.contains(e.target) || setShowCalendar(false)
        };
        document.addEventListener('click', handlerClick);
        return () => document.removeEventListener('click', handlerClick);
    }, [])


    return (
        <DatepickerContext.Provider
            value={{
                focusedDate,
                isDateFocused,
                isDateSelected,
                isDateHovered,
                isDateBlocked,
                isFirstOrLastSelectedDate,
                onDateSelect,
                onDateFocus,
                onDateHover
            }}
        >
            <div className="datepicker" ref={wrapperRef}>
                <div className="datepicker__entry d-flex" onClick={toggleShow}>
                    <input type="text" className='datepicker__input' value={startDateInput} readOnly disabled />
                    <Icon className="datepicker__separator" name='arrow' />
                    <input type="text" className='datepicker__input' value={endDateInput} readOnly disabled />
                    <Icon name='calendar' className='datepicker__icon datepicker__icon_calendar' width='14' height='14' />
                </div>
                <div className={classDatapickerHidden}>
                    {activeMonths.map(month => (
                        <DatePickerMonth
                            key={`${month.year}-${month.month}`}
                            year={month.year}
                            month={month.month}
                            firstDayOfWeek={firstDayOfWeek}
                            prevMonth={goToPreviousMonths}
                            nextMonth={goToNextMonths}
                            prevYear={goToPreviousYear}
                            nextYear={goToNextYear}
                        />
                    ))}
                </div>
            </div>
        </DatepickerContext.Provider>
    )
}

export default DatePicker