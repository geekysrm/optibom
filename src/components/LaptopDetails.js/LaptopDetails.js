import React, { Component } from "react";

export default class LaptopDetails extends Component {
  render() {
    return (
      <div className='laptop-details'>
        <div className='laptop-image'>
          <img src='https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/4/b/4bu26pa-hp-pavilion-x360-14-cd0007tu-14-inch-2-in-1-laptop_1.jpg' />
        </div>
        <div className='laptop-data'>Laptop Details</div>
      </div>
    );
  }
}
