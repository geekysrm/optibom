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
    // defaultSortOrder: "ascend",
    // sortOrder: "ascend",
    // sortDirections: ["descend"],
    // sorter: (a, b) => a.component - b.component,
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
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "SPR",
    dataIndex: "spr",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "CPR",
    dataIndex: "cpr",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
];

export default class BomTable extends Component {
  state = {
    modal2Visible: false,
  };

  render() {
    const { list, totalCost, avgCpr, avgSpr } = this.props;
    console.log(this.props);
    let data = [];
    if (list && list.length) {
      data = list.map((row, index) => {
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
      data.push({
        key: 8,
        commodity: "",
        component: "",
        supplier: "",
        cost: <b>{totalCost}</b>,
        spr: <b>{avgSpr}</b>,
        cpr: <b>{avgCpr}</b>,
      });
    }
    return (
      <div>
        <Modal
          width="695"
          title="Change me"
          centered
          visible={this.props.modal2Visible}
          onOk={() => this.props.handleXlsDownload(false)}
          onCancel={() => this.props.setModal2Visible(false)}
          okText="Download XLS"
          zIndex={1037}
          // confirmLoading
        >
          <Table columns={columns} dataSource={data} pagination={false} />
        </Modal>
      </div>
    );
  }
}
