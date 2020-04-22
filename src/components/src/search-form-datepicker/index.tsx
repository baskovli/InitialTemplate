import React, { useState, Fragment } from "react";
import { Form, Field } from "react-final-form";
import { Form as FormBoostrap, Button, FormGroup, Label } from "reactstrap";
import { Card, DatePicker } from "components/ui";

interface ISearchFormDatepicker {
  dateFrom: any;
  dateTo: any;
  textFrom: any;
  textTo: any;
  dateFromMinDate?: any;
  dateToMaxDate?: any;
  onSubmit(data: any): any;
  inline: boolean;
  initialValues?: any;
  children?: any;
}

const SearchFormDatepicker = (props: ISearchFormDatepicker) => {
  const [dateFrom, setDateFrom] = useState(props.dateFrom);
  const [dateTo, setDateTo] = useState(props.dateTo);

  return (
    <Form
      onSubmit={props.onSubmit}
      initialValues={{
        ...props.initialValues,
        dateFrom: props.dateFrom,
        dateTo: props.dateTo
      }}
      render={({ handleSubmit, submitting, pristine }) => (
        <Fragment>
          <FormBoostrap onSubmit={handleSubmit} inline={props.inline}>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label>{props.textFrom ?? "Date from"}</Label>
              <Field
                name="dateFrom"
                className="form-control"
                selected={dateFrom}
                minDate={props.dateFromMinDate}
                maxDate={dateTo}
                onChange={(d: any) => {
                  setDateFrom(d);
                }}
                component={DatePicker}
              />
            </FormGroup>
            <FormGroup className="mb-2 mr-sm-2 mb-sm-0">
              <Label>{props.textTo ?? "Date To"}</Label>
              <Field
                name="dateTo"
                className="form-control"
                selected={dateTo}
                minDate={dateFrom}
                maxDate={props.dateToMaxDate}
                onChange={(d: any) => {
                  setDateTo(d);
                }}
                component={DatePicker}
              />
            </FormGroup>
            {props.children}
            <Button
              className={props.inline ? "" : "mt-1"}
              type="submit"
              color="success"
              disabled={submitting || pristine}
            >
              {"Search"}
            </Button>
          </FormBoostrap>
        </Fragment>
      )}
    />
  );
};

export default SearchFormDatepicker;
