import React, { Component } from "react";
import { Modal } from "antd";

export default class BomTable extends Component {
  state = {
    modal2Visible: false,
  };

  //   setModal2Visible(modal2Visible) {
  //     this.setState({ modal2Visible });
  //   }
  render() {
    return (
      <div>
        <Modal
          title="Vertically centered modal dialog"
          centered
          visible={this.props.modal2Visible}
          onOk={() => this.props.setModal2Visible(false)}
          onCancel={() => this.props.setModal2Visible(false)}
        >
          <p>some contents...</p>
          <p>some contents...</p>
          <p>some contents...</p>
        </Modal>
      </div>
    );
  }
}
