import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../../assets/styles/sidebar.css";

export default class Sidebar extends Component {
  render() {
    return (
      <div className='sidebar'>
        <div className='sidebar-links'>
          <Link to='/'>Dashboard</Link>
          <Link to='/stock'>Stats</Link>
          <Link to='/components'>Components</Link>
        </div>
      </div>
    );
  }
}
