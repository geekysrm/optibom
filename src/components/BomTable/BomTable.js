import React, { Component } from "react";
import { Modal, Table } from "antd";

const columns = [
  {
    title: "Commodity",
    dataIndex: "commodity",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.commodity - b.commodity,
  },
  {
    title: "Component",
    dataIndex: "component",
    // defaultSortOrder: "ascend",
    // sortOrder: "ascend",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.component - b.component,
  },
  {
    title: "Supplier",
    dataIndex: "supplier",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.supplier - b.supplier,
  },
  {
    title: "Cost (in ₹)",
    dataIndex: "cost",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.cost - b.cost,
  },
  {
    title: "SPR",
    dataIndex: "spr",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.spr - b.spr,
  },
  {
    title: "CPR",
    dataIndex: "cpr",
    sortDirections: ["descend", "ascend"],
    sorter: (a, b) => a.cpr - b.cpr,
  },
];

const newColumns = [
  {
    title: "",
    dataIndex: "commodity",
    // specify the condition of filtering result
    // here is that finding the name started with `value`
    // onFilter: (value, record) => record.name.indexOf(value) === 0,
    // sorter: (a, b) => a.name.length - b.name.length,
    // sortDirections: ["descend"],
  },
  {
    title: "",
    dataIndex: "component",
    // defaultSortOrder: "ascend",
    // sortOrder: "ascend",
  },
  {
    title: "",
    dataIndex: "supplier",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Total Cost (in ₹)",
    dataIndex: "cost",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Avg SPR",
    dataIndex: "spr",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
  {
    title: "Avg CPR",
    dataIndex: "cpr",
    // defaultSortOrder: "descend",
    // sorter: (a, b) => a.age - b.age,
  },
];

function splitCamelCaseToString(s) {
  return s.split(/(?=[A-Z])/).join(" ");
}

export default class BomTable extends Component {
  state = {
    modal2Visible: false,
  };

  render() {
    const { list, totalCost, avgCpr, avgSpr } = this.props;
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
      // data.push({
      //   key: 8,
      //   commodity: "",
      //   component: "",
      //   supplier: "",
      //   cost: <b>{totalCost}</b>,
      //   spr: <b>{avgSpr}</b>,
      //   cpr: <b>{avgCpr}</b>,
      // });
    }

    let newData = [
      {
        key: 8,
        commodity: "",
        component: "",
        supplier: "",
        cost: <b>{totalCost}</b>,
        spr: <b>{avgSpr}</b>,
        cpr: <b>{avgCpr}</b>,
      },
    ];

    return (
      <div>
        <Modal
          width="695"
          title={splitCamelCaseToString(
            this.props.selectedCategory
          ).toUpperCase()}
          centered
          visible={this.props.modal2Visible}
          onOk={() => this.props.handleXlsDownload(false)}
          onCancel={() => this.props.setModal2Visible(false)}
          okText="Download XLS"
          zIndex={1037}
          // confirmLoading
        >
          <Table columns={columns} dataSource={data} pagination={false} />
          <Table
            id="new-table"
            columns={newColumns}
            dataSource={newData}
            pagination={false}
          />
        </Modal>
      </div>
    );
  }
}
