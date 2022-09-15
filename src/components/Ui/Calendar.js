import { useState } from 'react';
import { useDatepicker, START_DATE } from "@datepicker-react/hooks";

const Calendar = () => {
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
        <div
            style={{
                display: "grid",
                margin: "32px 0 0",
                gridTemplateColumns: `repeat(${activeMonths.length}, 300px)`,
                gridGap: "0 64px"
            }}
        >
        </div>
    )
}

export default Calendar