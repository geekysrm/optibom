import React, { Component } from "react";

export default class LaptopDetails extends Component {
  render() {
    const { name, id, category, options, onChange } = this.props;
    return (
      <div className="laptop-details">
        <div className="laptop-image">
          <img src="https://azcd.harveynorman.com.au/media/catalog/product/cache/21/image/992x558/9df78eab33525d08d6e5fb8d27136e95/4/b/4bu26pa-hp-pavilion-x360-14-cd0007tu-14-inch-2-in-1-laptop_1.jpg" />
        </div>

        <div className="laptop-data">
          <div className="detail-header">
            <div className="laptop-name">
              <p className="lead">Laptop Name: {name}</p>
            </div>
            <div className="laptop-id">
              <p className="lead">ID: {id}</p>
            </div>
          </div>

          <div className="laptop-category">
            <p className="lead">Category: {category}</p>
          </div>

          <div className="form-group detail-dropdown">
            <div className="selectContainer">
              <div className="input-group">
                <span className="input-group-addon">
                  <i className="glyphicon glyphicon-list" />
                </span>
                <select
                  name="state"
                  className="form-control selectpicker"
                  onChange={onChange}
                >
                  <option value=" ">Please select result type</option>
                  <option value="lowcost">Low Cost</option>
                  <option value="highspr">Highest SPR</option>
                  <option value="highcpr">Highest CPR</option>
                  <option value="optimum">Optimum Configuration</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
