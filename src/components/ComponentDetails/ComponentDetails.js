import React, { Component } from "react";
import { Empty, List, Avatar, Icon } from "antd";

import CompanyImage from "../../assets/images/companies/intel.png";

export default class ComponentDetails extends Component {
  render() {
    const listData = [
      {
        title: "Processor: i3",
        description:
          "Ant Design, a design language for background applications, is refined by Ant UED Team.",
        cost: 10,
        spr: 20,
        cpr: 10,
        image: CompanyImage,
      },
    ];
    return (
      <div className="component-details">
        {/* <Empty description={<span>Please select an item</span>} /> */}
        <List
          itemLayout="vertical"
          size="large"
          dataSource={listData}
          renderItem={item => (
            <List.Item
              key={item.title}
              extra={
                <>
                  <img width={272} alt="logo" src={item.image} />
                  <br />
                  <b>Intel</b>
                </>
              }
            >
              <List.Item.Meta title={<span>{item.title}</span>} />
              <h3>$ {item.cost} </h3> <br />
              <h5>CPR: {item.cpr} </h5> <br />
              <h5>SPR: {item.spr} </h5> <br />
            </List.Item>
          )}
        />
      </div>
    );
  }
}
