import React, { Component } from "react";

export default class ComponentList extends Component {
  render() {
    return (
      <div className="components-list style-2">
        <div className="components-list-header">
          <h3>Components</h3>
        </div>
        <hr />
        {this.props.list ? (
          <div className="components-list-content style-2">
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("cpu")}
            >
              {this.props.list.cpu.processor}
            </div>
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("gpu")}
            >
              {this.props.list.gpu.name}
            </div>
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("hdd")}
            >
              {this.props.list.hdd.size}
            </div>
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("ram")}
            >
              {this.props.list.ram.size}
            </div>
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("keyboard")}
            >
              {this.props.list.keyboard.supplier}
            </div>
            <div
              className="components-list-card"
              onClick={() => this.props.onClick("mouse")}
            >
              {this.props.list.mouse.supplier}
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
