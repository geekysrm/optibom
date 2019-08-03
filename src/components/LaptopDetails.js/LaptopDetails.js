import React, { Component } from "react";
import { Badge } from "antd";

import LaptopImage from "../../assets/images/laptop-result.png";

export default class LaptopDetails extends Component {
  render() {
    const { name, id, category, options, onChange } = this.props;
    return (
      <div className="laptop-details">
        <div className="row">
          <div
            className="col-md-4"
            style={{ borderRight: "1px double #007db8" }}
          >
            <div className="laptop-image">
              <img src={LaptopImage} />
            </div>
          </div>
          <div
            className="col-md-7 mr-2 pt-3"
            style={{ borderLeft: "1px double #007db8" }}
          >
            <div className="row">
              <div className="col-md-12">
                <div className="laptop-id">
                  <p>#{id}</p>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6">
                <div className="laptop-name">
                  <p style={{ marginTop: "auto", marginBottom: "auto" }}>
                    {name}
                  </p>
                </div>
              </div>
              <div className="col-md-6 d-flex align-items-center justify-content-center">
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
                        <option value="optimizedBom">
                          Optimum Configuration
                        </option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <Badge
                  status="processing"
                  className="laptop-category-2"
                  text={category}
                  color="#8e2de2"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
