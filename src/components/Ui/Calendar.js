import { useState } from 'react';
import { DateRangePicker, SingleDatePicker, DayPickerRangeController } from 'react-dates';
import { injectIntl, intlShape } from "react-intl";
import moment from 'moment'
import 'moment/locale/ru';
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';
import Icon from './Icon';


const Calendar = () => {
    const [state, setState] = useState({
        startDate: null,
        endDate: null,
        focusedInput: null,
        focused: null
    })

    console.log(state)

    return (
        <div>
            <DateRangePicker
                startDate={state.startDate} // momentPropTypes.momentObj or null,
                startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
                endDate={state.endDate} // momentPropTypes.momentObj or null,
                endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
                onDatesChange={({startDate, endDate }) => setState({ startDate, endDate })} // PropTypes.func.isRequired,
                focusedInput={state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
                onFocusChange={focusedInput => setState({ focusedInput })} // PropTypes.func.isRequired,
                // onFocusChange={({ focused }) => setState({ focused })}
                // 
                startDatePlaceholderText='Начало'
                endDatePlaceholderText='Конец'
                numberOfMonths={2}
                minimumNights={0}
                daySize={60}
                displayFormat="DD-MM-YYYY"
                hideKeyboardShortcutsPanel={true}
                keepOpenOnDateSelect={true}
                // customArrowIcon={<Icon name='arrow'/>}
                //locale
                // renderMonthText={month => {
                //     month.locale(intl.locale)
                //     return (
                //         moment(month).format('MMMM YYYY')
                //     )
                // }}
                // renderDayContents={day => {
                //     day.local(intl.local)
                //     return (
                //         moment(day).format('D')
                //     )
                // }}
            />
        </div>
    )
}

export default Calendar