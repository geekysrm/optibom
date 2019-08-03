import React, { Component } from "react";
import { NavLink, Link } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <nav className="navbar fixed-top navbar-expand-sm p-0">
        <Link className="navbar-brand ml-3 p-0" to="/">
          <span className="m-auto">OptiBOM</span>
        </Link>

        <ul className="navbar-nav ml-auto h-100">
          <li className="nav-item">
            <NavLink
              exact
              to="/"
              className="nav-link link"
              activeClassName="link link-selected active"
            >
              HOME
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink
              exact
              to="/build"
              className="nav-link link"
              activeClassName="link link-selected active"
            >
              BUILD
            </NavLink>
          </li>
          <li className="nav-item" style={{ marginRight: "1.1em" }}>
            <NavLink
              exact
              to="/result"
              className="nav-link link"
              activeClassName="link link-selected active"
            >
              RESULT
            </NavLink>
          </li>
        </ul>
      </nav>
    );
  }
}
