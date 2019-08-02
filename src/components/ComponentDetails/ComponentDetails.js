import React, { Component } from "react";
import { Empty, List, Avatar, Icon } from "antd";

import CompanyImage from "../../assets/images/companies/intel.png";

export default class ComponentDetails extends Component {
  render() {
    const listData = [
      {
        title: "PROCESSOR: i3",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        cost: 10,
        spr: 20,
        cpr: 10,
        image: CompanyImage,
      },
    ];
    return (
      <div className="component-details style-2">
        {this.props.detail ? (
          <List
            itemLayout="vertical"
            size="medium"
            dataSource={listData}
            style={{ paddingTop: 0 }}
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
                  <h3>$ {item.cost} </h3>
                  <h5>
                    CPR: <span>{item.cpr}</span>{" "}
                  </h5>
                  <h5>SPR: {item.spr} </h5>
                </div>
              </List.Item>
            )}
          />
        ) : (
          <Empty description={<span>Please select an item</span>} />
        )}
        {/*  */}
      </div>
    );
  }
}
