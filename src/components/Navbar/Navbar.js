import React, { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Navbar extends Component {
  render() {
    return (
      <div className='navbar'>
        <div className='navbar-header'>Mars</div>
        <div className='navbar-links'>
          <NavLink
            exact
            to='/'
            className='link'
            activeClassName='link link-selected'
          >
            HOME
          </NavLink>
          <NavLink
            exact
            to='/build'
            className='link'
            activeClassName='link link-selected'
          >
            BUILD
          </NavLink>
          <NavLink
            exact
            to='/result'
            className='link'
            activeClassName='link link-selected'
          >
            RESULT
          </NavLink>
        </div>
      </div>
    );
  }
}
