import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { NavItem, NavLink } from "reactstrap";
import Navs from "static/navs/navs";

export interface ILeftMenu {
  toggleMenu: boolean;
}
const LeftMenu = React.memo((props: ILeftMenu) => {
  return (
    <Fragment>
      <nav id="sidebar" className={props.toggleMenu ? "active" : ""}>
        <h2>
          <NavLink tag={Link} to="/" className="logo">
            MELIKIDIS
          </NavLink>
        </h2>
        <ul className="list-unstyled components mb-5">
          {Navs.map((nav: any, index: any) => (
            <NavItem key={index}>
              <NavLink tag={Link} to={nav.path}>
                <span>
                  <nav.icon />
                  {/* <FaHome /> */}
                </span>
                {nav.name}
              </NavLink>
            </NavItem>
          ))}
          {/* <li>
            <Link to="/about">
              <span>
                <FaUser />
              </span>{" "}
              About
            </Link>
          </li> */}
        </ul>
        <div className="footer">
          <p>
            Copyright &copy; <br />
            Melikidis Architecture
          </p>
        </div>
      </nav>
    </Fragment>
  );
});

export default LeftMenu;
