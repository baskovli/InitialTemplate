import React from "react";
import { Table as TableBoostrap, TableProps } from "reactstrap";

export interface ITable extends TableProps {
  columns: Array<any>;
  body: any;
}

const Table = React.memo((props: ITable) => {
  console.log({ props });
  return (
    <TableBoostrap {...props.defaultValues}>
      <thead>
        <tr>
          {props.columns !== null &&
            props.columns.map((item: any, index) => {
              return <th key={index}>{item}</th>;
            })}
        </tr>
      </thead>
      {props.body}
    </TableBoostrap>
  );
});

export default Table;
