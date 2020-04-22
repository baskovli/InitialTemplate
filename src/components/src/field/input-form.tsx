import React, { Fragment, useState } from "react";
import { Input } from "reactstrap";
import ErrorMessage from "../error-message/index";

/*
 * Wiil replace simple input
 */
const inputForm = React.memo((props: any) => {
  const { input, meta, value, ...rest } = props;
  const onfocusFunc = (item: any) => {};
  return (
    <Fragment>
      <Input
        {...input}
        autoComplete="off"
        onFocus={onfocusFunc}
        {...rest}
        onBlur={e => {
          input.onBlur(e);
          if (props.onBlur && e.target.value) {
            props.onBlur(e.target.value);
          }
        }}
        onChange={e => {
          input.onChange(e); //final-form's onChange
          if (props.onChange) {
            //props.onChange
            props.onChange(e.target.value);
          }
        }}
      />
      {meta && <ErrorMessage touched={meta.touched} error={meta.error} />}
    </Fragment>
  );
});

export default inputForm;
