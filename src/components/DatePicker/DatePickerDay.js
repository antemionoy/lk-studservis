import React, { useRef, useContext } from "react";
import { useDay } from "@datepicker-react/hooks";
import DatepickerContext from '../../contexts/DatePickerContext'

function getColor(
  isSelected,
  isSelectedStartOrEnd,
  isWithinHoverRange,
  isDisabled
) {
  return ({
    selectedFirstOrLastColor,
    normalColor,
    selectedColor,
    rangeHoverColor,
    disabledColor
  }) => {
    if (isSelectedStartOrEnd) {
      return selectedFirstOrLastColor;
    } else if (isSelected) {
      return selectedColor;
    } else if (isWithinHoverRange) {
      return rangeHoverColor;
    } else if (isDisabled) {
      return disabledColor;
    } else {
      return normalColor;
    }
  };
}

function DataPickerDay({ day, date }) {
  const dayRef = useRef(null);
  const {
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateSelect,
    onDateFocus,
    onDateHover
  } = useContext(DatepickerContext);
  const {
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate,
    onClick,
    onKeyDown,
    onMouseEnter,
    tabIndex
  } = useDay({
    date,
    focusedDate,
    isDateFocused,
    isDateSelected,
    isDateHovered,
    isDateBlocked,
    isFirstOrLastSelectedDate,
    onDateFocus,
    onDateSelect,
    onDateHover,
    dayRef
  });

  if (!day) {
    return <div />;
  }

  const getColorFn = getColor(
    isSelected,
    isSelectedStartOrEnd,
    isWithinHoverRange,
    disabledDate
  );

  return (
    <button
      onClick={onClick}
      onKeyDown={onKeyDown}
      onMouseEnter={onMouseEnter}
      tabIndex={tabIndex}
      type="button"
      ref={dayRef}
      style={{
        padding: "8px 10px",
        border: 0,
        color: getColorFn({
          selectedFirstOrLastColor: "#FFFFFF",
          normalColor: "#001217",
          selectedColor: "#000",
          rangeHoverColor: "#FFFFFF",
          disabledColor: "#808285"
        }),
        background: getColorFn({
          selectedFirstOrLastColor: "#0D6EFD",
          normalColor: "#FFFFFF",
          selectedColor: "#EBEDEF",
          rangeHoverColor: "#EBEDEF",
          disabledColor: "#FFFFFF"
        })
      }}
    >
      {day}
    </button>
  );
}

export default DataPickerDay;
