import React, { Component } from "react";
import { Empty, Button } from "antd";

export default class ComponentDetails extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cost: props.detail ? props.detail.cost.toString() : "",
      cpr: props.detail ? props.detail.cpr.toString() : "",
      spr: props.detail ? props.detail.spr.toString() : "",
      item: props.detail ? props.detail.commodity : "",
      supplier: props.detail ? props.detail.supplier : "",
      component: props.detail ? props.detail.component.toString() : "",
    };
  }

  componentDidUpdate() {
    if (this.state.cost === "" && this.props.detail) {
      this.setState({
        cost: this.props.detail.cost,
      });
    }
    if (this.state.cpr === "" && this.props.detail) {
      this.setState({
        cpr: this.props.detail.cpr,
      });
    }
    if (this.state.spr === "" && this.props.detail) {
      this.setState({
        spr: this.props.detail.spr,
      });
    }
    if (this.state.supplier === "" && this.props.detail) {
      this.setState({
        supplier: this.props.detail.supplier,
      });
    }
    if (this.state.component === "" && this.props.detail) {
      this.setState({
        component: this.props.detail.component,
      });
    }

    if (
      this.props.detail &&
      this.state.supplier !== this.props.detail.supplier &&
      !this.props.editState
    ) {
      this.setState({
        cost: this.props.detail ? this.props.detail.cost.toString() : "",
        cpr: this.props.detail ? this.props.detail.cpr.toString() : "",
        spr: this.props.detail ? this.props.detail.spr.toString() : "",
        item: this.props.detail ? this.props.detail.commodity : "",
        supplier: this.props.detail ? this.props.detail.supplier : "",
        component: this.props.detail
          ? this.props.detail.component.toString()
          : "",
      });
    }
  }

  onChange = e => {
    console.log(this.props.options);
    console.log(this.props.selectedItem);
    console.log(this.state.component);
    console.log(this.state);

    this.setState({ [e.target.name]: e.target.value }, () => {
      this.setState({
        cost: this.props.options
          .find(item => item[0].toString() === this.state.item)[3]
          .toString(),
        cpr: this.props.options
          .find(item => item[0].toString() === this.state.item)[4]
          .toString(),
        spr: this.props.options
          .find(item => item[0].toString() === this.state.item)[5]
          .toString(),
        supplier: this.props.options
          .find(item => item[0].toString() === this.state.item)[2]
          .toString(),
      });
    });
  };

  render() {
    if (this.props.detail) {
      return (
        <>
          <div className="row">
            <div className="col-md-6">
              <div className="row">
                <div className="col-md-12">
                  <div className="form-group row">
                    <div className="col-sm-2">
                      <label
                        className="col-form-label"
                        style={{ fontWeight: "700" }}
                      >
                        Item
                      </label>
                    </div>
                    <div
                      className="col-sm-10"
                      style={
                        this.props.editState ? { paddingLeft: "40px" } : null
                      }
                    >
                      {this.props.editState ? (
                        <select
                          name="item"
                          value={this.state.item}
                          onChange={this.onChange}
                          className="form-control selectpicker"
                        >
                          <option value="">Select Item</option>
                          {this.props.options.map((option, index) => (
                            <option key={index} value={option[0]}>
                              {option[0]}
                            </option>
                          ))}
                        </select>
                      ) : (
                        <input
                          style={{ paddingLeft: "70px" }}
                          type="text"
                          readOnly
                          className="form-control-plaintext"
                          value={this.props.detail.commodity || ""}
                        />
                      )}
                    </div>
                  </div>
                  <div className="form-group row">
                    <div className="col-sm-2">
                      <label
                        className="col-form-label"
                        style={{ fontWeight: "700" }}
                      >
                        Supplier
                      </label>
                    </div>
                    <div className="col-sm-10">
                      <input
                        style={{ paddingLeft: "70px" }}
                        type="text"
                        readOnly
                        className="form-control-plaintext"
                        value={this.state.supplier || ""}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-2 col-form-label"
                      style={{ fontWeight: "700" }}
                    >
                      Cost
                    </label>
                    <div className="col-sm-10">
                      <input
                        style={{ paddingLeft: "70px" }}
                        type="text"
                        name="cost"
                        readOnly
                        className="form-control-plaintext"
                        value={this.state.cost}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-2 col-form-label"
                      style={{ fontWeight: "700" }}
                    >
                      CPR
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        style={{ paddingLeft: "70px" }}
                        readOnly
                        className="form-control-plaintext"
                        value={this.state.cpr}
                      />
                    </div>
                  </div>
                  <div className="form-group row">
                    <label
                      className="col-sm-2 col-form-label"
                      style={{ fontWeight: "700" }}
                    >
                      SPR
                    </label>
                    <div className="col-sm-10">
                      <input
                        type="text"
                        style={{ paddingLeft: "70px" }}
                        readOnly
                        className="form-control-plaintext"
                        value={this.state.spr}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div style={{ width: "200px", height: "200px" }}>
                <img
                  style={{
                    width: "200px",
                    height: "200px",
                    objectFit: "contain",
                  }}
                  src={`/images/companies/${this.state.supplier.toLowerCase()}.png`}
                  alt=""
                />
              </div>
            </div>
            {!this.props.editState ? (
              <div className="col-md-12 pt-2 d-flex justfy-content-center">
                <Button
                  type="primary"
                  className="mx-auto"
                  onClick={() => this.props.handleComponentEdit()}
                >
                  Edit
                </Button>
              </div>
            ) : (
              <div className="col-md-12 pt-2 d-flex justfy-content-center">
                <Button
                  type="primary"
                  className="mx-auto"
                  onClick={() =>
                    this.props.handleComponentSave({
                      commodity: this.state.item,
                      supplier: this.state.supplier,
                      cost: this.state.cost,
                      cpr: this.state.cpr,
                      spr: this.state.spr,
                      component: this.state.component,
                    })
                  }
                >
                  Save
                </Button>
              </div>
            )}
          </div>
        </>
      );
    } else if (this.props.list)
      return (
        <div className="center-content w-100">
          <Empty description={<span>Please select an item</span>} />
        </div>
      );
    else return null;
  }
}
