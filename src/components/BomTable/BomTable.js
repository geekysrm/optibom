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
    title: "Cost",
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
    commodity: "John Brown",
    component: 32,
    supplier: "New York No. 1 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "2",
    commodity: "Jim Green",
    component: 42,
    supplier: "London No. 1 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "3",
    commodity: "Joe Black",
    component: 32,
    supplier: "Sidney No. 1 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "4",
    commodity: "Jim Red",
    component: 32,
    supplier: "London No. 2 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "5",
    commodity: "Jim Red",
    component: 32,
    supplier: "London No. 2 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "6",
    commodity: "Jim Red",
    component: 32,
    supplier: "London No. 2 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
  {
    key: "7",
    commodity: "Jim Red",
    component: 32,
    supplier: "London No. 2 Lake Park",
    cost: 10,
    spr: 12,
    cpr: 13,
  },
];

export default class BomTable extends Component {
  state = {
    modal2Visible: false,
  };

  render() {
    return (
      <div>
        <Modal
          width="695"
          title="Change me"
          centered
          visible={this.props.modal2Visible}
          onOk={() => this.props.setModal2Visible(false)}
          onCancel={() => this.props.setModal2Visible(false)}
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </Modal>
      </div>
    );
  }
}
