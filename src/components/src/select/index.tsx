import React from "react";
import { default as ReactSelect, createFilter } from "react-select";
import { FixedSizeList as List } from "react-window";

interface ISelect {
  input?: any;
  options: any;
  isMulti: boolean;
  defaultValue: any;
  value?: any;
  onChangeFunc?: (value: any) => any;
}

const Select = React.memo((props: ISelect) => {
  if (props.onChangeFunc === undefined) {
    return (
      <ReactSelect
        filterOption={createFilter({ ignoreAccents: false })} // this makes all the difference!
       // components={{ MenuList }}
        options={props.options}
        searchable

        isMulti={props.isMulti}
        defaultValue={props.defaultValue}
        {...props.input}
      />
    );
  }

  return (
    <ReactSelect
      filterOption={createFilter({ ignoreAccents: false })} // this makes all the difference!
      components={{ MenuList }}
      options={props.options}
      searchable
      isMulti={props.isMulti}
      defaultValue={props.defaultValue}
      onChange={props.onChangeFunc}
      {...props}
    />
  );
});

const MenuList = (props: any) => {
  const { children, maxHeight } = props;
  // const [value] = getValue();
  //const initialOffset = options.indexOf(value) * height;
  const height = children.length
    ? children.length < 10
      ? children.length * 36
      : isNaN(maxHeight)
      ? 0
      : maxHeight
    : 0;
  return (
    <List
      height={height}
      itemCount={children.length || 0}
      itemSize={30}
      // initialScrollOffset={initialOffset}
      width="auto"
      minWidth="300px"
    >
      {({ index, style }: { index: any; style: any }) => (
        <div style={style}>{children[index]}</div>
      )}
    </List>
  );
};

export default Select;

// const CustomSelect = ({ input, ...rest }) => (
//   <Select {...input} {...rest} searchable />
// )
