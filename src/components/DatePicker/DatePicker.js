import './DatePicker.scss'
import { useState } from 'react';
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";
import DatepickerContext from '../../contexts/DatePickerContext'
import Icon from '../Ui/Icon';
import DatePickerMonth from './DatePickerMonth';

const DatePicker = () => {

    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: START_DATE
    });

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
        goToNextMonths
    } = useDatepicker({
        startDate: state.startDate,
        endDate: state.endDate,
        focusedInput: state.focusedInput,
        onDatesChange: handleDateChange
    });

    function handleDateChange(data) {
        if (!data.focusedInput) {
            setState({ ...data, focusedInput: START_DATE });
        } else {
            setState(data);
        }
    }

    console.log(activeMonths)


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
            <div className="datepicker">
                <div className="datepicker__entry d-flex">
                    <input type="text" className='datepicker__input' value={'15.05.2016'} readOnly />
                    <Icon className="datepicker__separator" name='arrow' />
                    <input type="text" className='datepicker__input' value={'21.06.2022'} readOnly />
                </div>
                {activeMonths.map(month => (
                    <DatePickerMonth
                        key={`${month.year}-${month.month}`}
                        year={month.year}
                        month={month.month}
                        firstDayOfWeek={firstDayOfWeek}
                    />
                ))}
            </div>
        </DatepickerContext.Provider>
    )
}

export default DatePicker