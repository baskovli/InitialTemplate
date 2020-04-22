import React from "react";
import { default as ReactDatepicker } from "react-datepicker";
import ErrorMessage from "../error-message/index";
import "react-datepicker/dist/react-datepicker.css";
import "./datepicker.scss";

const DatePicker = React.memo((props: any) => {
  const {
    input: { name, onChange, value, ...restInput },
    meta,
    selected,
    ...rest
  } = props;

  return (
    <div>
      <ReactDatepicker
        {...rest}
        className="form-control"
        selected={value ? value : selected}
        dateFormat={props.dateFormat ? props.dateFormat : "dd/MM/yyyy"}
        onChange={e => {
          onChange(e); // input Onchange
          if (props.onChange) props.onChange(e); // props change
        }}
        peekNextMonth
        showMonthDropdown
        showYearDropdown
        minDate={props.minDate}
        maxDate={props.maxDate}
        dropdownMode="select"
      />
      <ErrorMessage touched={meta.touched} error={meta.error} />
    </div>
  );
});

export default DatePicker;
