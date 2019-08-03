import React, { Component } from "react";
import { Empty } from "antd";

export default class ComponentDetails extends Component {
  state = {
    cost: "",
    cpr: "",
    spr: "",
  };

  render() {
    console.log(this.props.detail && this.props.list);

    if (this.props.detail && this.props.list)
      return (
        <div className="row">
          <div className="col-md-6">
            <div className="row">
              <div className="form-group row">
                <label
                  className="col-sm-2 col-form-label"
                  style={{ fontWeight: "700" }}
                >
                  Supplier
                </label>
                <div className="col-sm-10">
                  <input
                    style={{ paddingLeft: "70px" }}
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    value={this.props.detail.supplier || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-sm-2 col-form-label"
                  style={{ fontWeight: "700" }}
                >
                  Cost
                </label>
                <div className="col-sm-10">
                  <input
                    style={{ paddingLeft: "70px" }}
                    type="text"
                    readOnly
                    className="form-control-plaintext"
                    value={`₹ ${this.props.detail.cost}` || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-sm-2 col-form-label"
                  style={{ fontWeight: "700" }}
                >
                  CPR
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    style={{ paddingLeft: "70px" }}
                    readOnly
                    className="form-control-plaintext"
                    value={this.props.detail.cpr || ""}
                  />
                </div>
              </div>
              <div className="form-group row">
                <label
                  className="col-sm-2 col-form-label"
                  style={{ fontWeight: "700" }}
                >
                  SPR
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    style={{ paddingLeft: "70px" }}
                    readOnly
                    className="form-control-plaintext"
                    value={this.props.detail.spr || ""}
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div style={{ width: "200px", height: "200px" }}>
              <img
                style={{
                  width: "200px",
                  height: "200px",
                  objectFit: "contain",
                }}
                src={`/images/companies/${this.props.detail.supplier.toLowerCase()}.png`}
                alt=""
              />
            </div>
          </div>
        </div>
      );
    else if (this.props.list)
      return (
        <div className="center-content">
          <Empty description={<span>Please select an item</span>} />
        </div>
      );
    else return null;
  }
}
