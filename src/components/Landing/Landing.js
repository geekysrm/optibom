import React, { Component } from "react";
import {  Button } from 'antd';

export default class Landing extends Component {
  render() {
    return (
      <div className='landing-container'>
        <div className='landing-card-wrapper'>
          <div className='landing-card'>Hello</div>
          <div className='landing-card'>Hello</div>
          <div className='landing-card'>Hello</div>
        </div>
        <div className='landing-btn'>Get Started</div>
        <Button style={{ marginLeft: 8 }}>
          Hello
      </Button>
      </div>
    );
  }
}
