import React, { Component } from "react";
import { Badge } from "antd";

import LaptopImage from "../../assets/images/laptop-result.png";

export default class LaptopDetails extends Component {
  render() {
    const { name, id, category, options, onChange } = this.props;
    return (
      <div className="laptop-details">
        <div className="laptop-image">
          <img src={LaptopImage} />
        </div>

        <div className="laptop-data">
          <div className="laptop-id">
            <p>#{id}</p>
          </div>
          <div className="detail-header">
            <div className="laptop-name">
              <p style={{ marginTop: "auto", marginBottom: "auto" }}>{name}</p>
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
                    <option value="lowCostBom">Low Cost</option>
                    <option value="highSprBom">Highest SPR</option>
                    <option value="highCprBom">Highest CPR</option>
                    <option value="optimizedBom">Optimum Configuration</option>
                  </select>
                </div>
              </div>
            </div>
          </div>

          {/* <div className="laptop-category">
            <div>{category}</div>
          </div> */}
          <Badge
            status="processing"
            className="laptop-category-2"
            text={category}
            color="#8e2de2"
          />
        </div>
      </div>
    );
  }
}
