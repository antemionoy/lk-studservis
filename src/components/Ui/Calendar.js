import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { useState } from 'react';


const Calendar = () => {
    const [state, setState] = useState({
        startDate: null,
        endDate: null
    })

    return (
        <div>
            <DateRangePicker
                startDate={state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({ startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setState({ focusedInput })} // PropTypes.func.isRequired,
            />
        </div>
    )
}

export default Calendar