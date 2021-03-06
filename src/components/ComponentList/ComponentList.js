import React, { Component } from "react";
import { Empty } from "antd";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";

class ComponentList extends Component {
  render() {
    return (
      <div className="components-list">
        {this.props.list ? (
          <div className="components-list-content style-2">
            <div className="components-list-header">
              <h3>Components</h3>
            </div>
            <div
              className={
                this.props.active === 0
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(0, "cpu")}
            >
              {this.props.list[0].commodity}
            </div>
            <div
              className={
                this.props.active === 1
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(1, "graphics")}
            >
              {this.props.list[1].commodity}
            </div>
            <div
              className={
                this.props.active === 2
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(2, "hard-disk")}
            >
              {this.props.list[2].commodity}
            </div>
            <div
              className={
                this.props.active === 6
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(6, "ram")}
            >
              {this.props.list[6].commodity}
            </div>
            <div
              className={
                this.props.active === 3
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(3, "keyboard")}
            >
              {this.props.list[3].supplier} {this.props.list[3].commodity}
            </div>
            <div
              className={
                this.props.active === 4
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(4, "mouse")}
            >
              {this.props.list[4].supplier} {this.props.list[4].commodity}
            </div>
            <div
              className={
                this.props.active === 5
                  ? "components-list-card card-active"
                  : "components-list-card"
              }
              onClick={() => this.props.onClick(5, "screen")}
            >
              {this.props.list[5].commodity} Res
            </div>
          </div>
        ) : (
          <div className="center-content">
            <Empty
              style={{ marginTop: "110px" }}
              description={<span>Please select a result type</span>}
            />
          </div>
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  let curentIndex = Number(localStorage.getItem("currentIndex"));
  return {
    bom: state.bom[curentIndex],
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(ComponentList));
