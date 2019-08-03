import React, { Component } from "react";
import { Empty, List, Avatar, Icon } from "antd";

import CompanyImage from "../../assets/images/companies/intel.png";

export default class ComponentDetails extends Component {
  state = {
    cost: "",
    cpr: "",
    spr: "",
  };

  render() {
    console.log(this.props.detail);
    if (this.props.detail)
      return (
        <div
          className="component-details style-2"
          style={{ paddingTop: "1rem", display: "flex" }}
        >
          {/* {this.props.detail ? (
          <List
            itemLayout="vertical"
            size="medium"
            dataSource={listData}
            style={{
              paddingTop: 1,
              boxShadow: "0 0 15px rgba(0, 0, 0, 0.5)",
              height: "100%",
            }}
            renderItem={item => (
              <List.Item
                key={item.title}
                extra={
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <div
                      style={{
                        height: "200px",
                        width: "200px",
                        display: "flex",
                      }}
                    >
                      <img
                        style={{
                          width: "100%",
                          height: "auto",
                          objectFit: "contain",
                        }}
                        alt="logo"
                        src={item.image}
                      />
                    </div>
                    <b style={{ fontSize: "20px" }}>Intel</b>
                  </div>
                }
              >
                <List.Item.Meta
                  title={
                    <b style={{ color: "#585158", marginLeft: "50px" }}>
                      {item.title}
                    </b>
                  }
                />
                <div style={{ color: "#585158", marginLeft: "50px" }}>
                  <h5>Cost: $ {item.cost} </h5>
                  <h5>
                    CPR: <span>{item.cpr}</span>{" "}
                  </h5>
                  <h5>SPR: {item.spr} </h5>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <div className="center-content">
            <Empty description={<span>Please select an item</span>} />
          </div>
        )} */}
          <div style={{ fontSize: "17px" }}>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Supplier</label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: "70px" }}
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="Amazon Basics"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Cost</label>
              <div className="col-sm-10">
                <input
                  style={{ paddingLeft: "70px" }}
                  type="text"
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="$ 10"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">CPR</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  style={{ paddingLeft: "70px" }}
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="10"
                />
              </div>
            </div>
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">SPR</label>
              <div className="col-sm-10">
                <input
                  type="text"
                  style={{ paddingLeft: "70px" }}
                  readOnly
                  className="form-control-plaintext"
                  defaultValue="15"
                />
              </div>
            </div>
          </div>
          <div style={{ width: "200px", height: "200px" }}>
            <img
              style={{ width: "200px", height: "200px", objectFit: "contain" }}
              src={CompanyImage}
              alt=""
            />
          </div>
        </div>
      );
    else
      return (
        <div className="center-content">
          <Empty description={<span>Please select an item</span>} />
        </div>
      );
  }
}
