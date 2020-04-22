import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
import { Button, NavItem, NavLink } from "reactstrap";
import { Link } from "react-router-dom";

export interface IHeader {
  setToggledMenu(value: boolean): void;
}

const Header = React.memo((props: IHeader) => {
  const [toggleLeftMenu, setToggleLeftMenu] = useState<boolean>(false);
  const [toggleMenu, setToggleMenu] = useState<boolean>(false);

  const onBarsClickFunc = () => {
    setToggleLeftMenu(!toggleLeftMenu);
    props.setToggledMenu(!toggleLeftMenu);
  };

  const onBarsMenuClickFunc = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid">
        <Button color="primary" onClick={onBarsClickFunc}>
          <i>
            <FaBars />
          </i>
          <span className="sr-only">Toggle Menu</span>
        </Button>
        <Button
          color="secondary"
          className="d-inline-block d-lg-none ml-auto"
          onClick={onBarsMenuClickFunc}
        >
          <i>
            <FaBars />
          </i>
        </Button>

        <div className={`collapse navbar-collapse ${toggleMenu ? "show" : ""}`}>
          <ul className="nav navbar-nav ml-auto">
            <NavItem className="nav-item">
              <NavLink tag={Link} to="/about" className="nav-link">
                About
              </NavLink>
            </NavItem>
            <NavItem className="nav-item">
              <NavLink tag={Link} to="/contact" className="nav-link">
                Contact
              </NavLink>
            </NavItem>
          </ul>
        </div>
      </div>
    </nav>
  );
});

export default Header;
