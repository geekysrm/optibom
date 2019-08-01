import React, { Component } from "react";
<<<<<<< HEAD
import {  Button } from 'antd';
=======
import { Link } from "react-router-dom";
>>>>>>> c2b4b40a6f331e3e7b440c8102360e994d82d687

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
