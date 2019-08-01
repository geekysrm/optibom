import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Landing extends Component {
  render() {
    return (
      <div className='landing-container data-container'>
        <div className='landing-card-wrapper'>
          <div className='landing-card'>Hello</div>
          <div className='landing-card'>Hello</div>
          <div className='landing-card'>Hello</div>
        </div>
        <div className='landing-btn'>
          <Link to='/build'>Get Started</Link>
        </div>
      </div>
    );
  }
}
