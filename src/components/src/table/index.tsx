import React from "react";
import ReactTable from "react-table";
import "react-table/react-table.css";

const TableReact = React.memo((props: any) => {
  const filterCaseInsensitive = (
    { id, value }: { id: any; value: any },
    row: any
  ) => (row[id] ? row[id].toLowerCase().includes(value.toLowerCase()) : true);
  return <ReactTable defaultFilterMethod={filterCaseInsensitive} {...props} />;
});

export default TableReact;
