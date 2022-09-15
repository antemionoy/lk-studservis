import { createContext } from 'react';

export default createContext({
    focusedDate: null,
    isDateFocused: () => false,
    isDateSelected: () => false,
    isDateHovered: () => false,
    isDateBlocked: () => false,
    isFirstOrLastSelectedDate: () => false,
    onDateFocus: () => { },
    onDateHover: () => { },
    onDateSelect: () => { }
});