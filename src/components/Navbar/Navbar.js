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
            Home
          </Link>
          <Link
            to='/'
            className={selected === "bacd" ? "link link-selected" : "link"}
            onClick={() => this.setSelected("bacd")}
          >
            BACD
          </Link>
          <Link
            to='/'
            className={selected === "abcd" ? "link link-selected" : "link"}
            onClick={() => this.setSelected("abcd")}
          >
            ABCD
          </Link>
        </div>
      </div>
    );
  }
}
