import React, { Component } from "react";
import { Menu, Icon } from "antd";
import { Link } from "react-router-dom";

export default class Navbar extends Component {
  state = {
    selected: "home"
  };

  setSelected = event => {
    this.setState({
      selected: event
    });
  };

  render() {
    const { selected } = this.state;
    return (
      <div className='navbar'>
        <div className='navbar-header'>Mars</div>
        <div className='navbar-links'>
          <Link
            to='/'
            className={selected === "home" ? "link link-selected" : "link"}
            onClick={() => this.setSelected("home")}
          >
            HOME
          </Link>
          <Link
            to='/build'
            className={selected === "build" ? "link link-selected" : "link"}
            onClick={() => this.setSelected("build")}
          >
            BUILD
          </Link>
          <Link
            to='/result'
            className={selected === "result" ? "link link-selected" : "link"}
            onClick={() => this.setSelected("result")}
          >
            RESULT
          </Link>
        </div>
      </div>
    );
  }
}
