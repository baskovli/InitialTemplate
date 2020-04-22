import React, { Fragment, useState } from "react";
import { 
  withRouter,
} from "react-router-dom";
import LeftMenu from "./LeftMenu";
import Header from "./Header";
export const Layout = (props: any) => {
  console.log(props);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const toggledMenuFunc = (value: boolean) => {
    console.log(value);
    setToggleMenu(value);
  };

  return (
    <Fragment>
      <div className="wrapper d-flex align-items-stretch">
        <LeftMenu toggleMenu={toggleMenu} />
        <div id="content" className="p-4 p-md-5">
          <Header setToggledMenu={toggledMenuFunc} />
          {props.children}
        </div>
      </div>
    </Fragment>
  );
};

export default withRouter(Layout);
