import React, { Component } from "react";
import { Modal, Table } from "antd";

const columns = [
  {
    title: "Commodity",
    dataIndex: "commodity",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "Component",
    dataIndex: "component",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Cost (in ₹)",
    dataIndex: "cost",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "SPR",
    dataIndex: "spr",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
  {
    title: "CPR",
    dataIndex: "cpr",
    defaultSortOrder: "descend",
    sorter: (a, b) => a.age - b.age,
  },
];

const data = [
  {
    key: "1",
    commodity: "CPU",
    component: 10004,
    supplier: "Intel",
    cost: 45000,
    spr: 8,
    cpr: 9,
  },
];

export default class BomTable extends Component {
  state = {
    modal2Visible: false,
  };

  render() {
    console.log(this.props.list);
    let data = [];
    if (this.props.list && this.props.list.length) {
      data = this.props.list.map((row, index) => {
        return {
          key: index + 1,
          commodity: row.commodity,
          component: row.component,
          supplier: row.supplier,
          cost: row.cost,
          spr: row.spr,
          cpr: row.cpr,
        };
      });
    }
    return (
      <div>
        <Modal
          width="695"
          title="Change me"
          centered
          visible={this.props.modal2Visible}
          onOk={() => this.props.setModal2Visible(false)}
          onCancel={() => this.props.setModal2Visible(false)}
          // confirmLoading
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </Modal>
      </div>
    );
  }
}
