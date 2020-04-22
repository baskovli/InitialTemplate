import React, { Fragment } from "react";
import "./error-message.scss";

interface IErrorMessage {
  touched: any;
  error: any;
}

const ErrorMessage = React.memo((props: IErrorMessage) => {
  return (
    <Fragment>
      {props.touched && props.error && (
        <span className="error-message">{props.error}</span>
      )}
    </Fragment>
  );
});

export default ErrorMessage;
