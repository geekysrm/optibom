import React, { Component } from "react";

export default class ComponentList extends Component {
  render() {
    // const {cpu, gpu, ram, keyboard, mouse, screen, hdd} = this.props;
    return (
      <div className="components-list style-2">
        <div className="components-list-header">
          <h3>Components</h3>
        </div>
        <div className="components-list-content style-2">
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
          <div className="components-list-card">List</div>
        </div>
      </div>
    );
  }
}
