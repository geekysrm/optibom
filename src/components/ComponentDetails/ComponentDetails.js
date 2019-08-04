import React, { Component } from "react";
import { Empty, Button } from "antd";

export default class ComponentDetails extends Component {
  state = {
    cost: "",
    cpr: "",
    spr: "",
    supplier: "",
  };

  onChange = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  render() {
    if (this.props.detail)
      return (
        <>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group row">
                    <div className="col-sm-2">
                      <label
                        className="col-form-label"
                        style={{ fontWeight: "700" }}
                      >
                        Supplier
                      </label>
                    </div>
                    <div
                      className="col-sm-10"
                      style={
                        this.props.editState ? { paddingLeft: "40px" } : null
                      }
                    >
                      {this.props.editState ? (
                        <select
                          name="supplier"
                          value={this.props.detail.supplier}
                          onChange={this.onChange}
                          className="form-control selectpicker"
                        >
                          <option value="">Select Supplier</option>
                          {this.props.options.map((option, index) => (
                            <option key={index} value={option[2]}>
                              {option[2]}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          style={{ paddingLeft: "70px" }}
                          type="text"
                          readOnly
                          className="form-control-plaintext"
                          value={this.props.detail.supplier || ""}
                        />
                      )}
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
            <div className="col-md-12 pt-2 d-flex justfy-content-center">
              <Button
                type="primary"
                className="mx-auto"
                onClick={() => this.props.handleComponentEdit(this.props.type)}
              >
                Edit
              </Button>
            </div>
          </div>
        </>
      );
    else if (this.props.list)
      return (
        <div className="center-content w-100">
          <Empty description={<span>Please select an item</span>} />
        </div>
      );
    else return null;
  }
}
