import React, { Fragment, useState } from "react";
import { Input as InputBoostrap } from "reactstrap";
import ErrorMessage from "../error-message/index";

const Input = React.memo((props: any) => {
  const { input, meta, value, ...rest } = props;
  return (
    <Fragment>
      <InputBoostrap
        {...rest}
        {...input}
        autoComplete="off"
        onBlur={(e: any) => {
          input.onBlur(e);
          if (props.onBlur && e.target.value) {
            props.onBlur(e.target.value);
          }
        }}
        onChange={e => {
          input.onChange(e); //final-form's onChange
          if (props.onChange) {
            props.onChange(e.target.value);
          }
        }}
      />
      {meta && <ErrorMessage touched={meta.touched} error={meta.error} />}
    </Fragment>
  );
});

export default Input;
