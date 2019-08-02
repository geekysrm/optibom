import React, { Component } from "react";

export default class ComponentList extends Component {
  render() {
    return (
      <div className="components-list style-2">
        <div className="components-list-header">
          <h3>Components</h3>
        </div>
        {this.props.list ? (
          <div className="components-list-content style-2">
            <div className="components-list-card">
              {this.props.list.cpu.processor}
              <button onClick={() => this.props.onClick("cpu")}>
                View Details
              </button>
            </div>
            <div className="components-list-card">
              {this.props.list.gpu.name}
              <button onClick={() => this.props.onClick("gpu")}>
                View Details
              </button>
            </div>
            <div className="components-list-card">
              {this.props.list.hdd.size}
              <button onClick={() => this.props.onClick("hdd")}>
                View Details
              </button>
            </div>
            <div className="components-list-card">
              {this.props.list.ram.size}
              <button onClick={() => this.props.onClick("ram")}>
                View Details
              </button>
            </div>
            <div className="components-list-card">
              {this.props.list.keyboard.supplier}
              <button onClick={() => this.props.onClick("keyboard")}>
                View Details
              </button>
            </div>
            <div className="components-list-card">
              {this.props.list.mouse.supplier}
              <button onClick={() => this.props.onClick("mouse")}>
                View Details
              </button>
            </div>
          </div>
        ) : null}
      </div>
    );
  }
}
