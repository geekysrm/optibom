import React, { Component } from "react";
import { Alert, Button } from "antd";
import laptop from "../../assets/images/laptop-build.png";

export default class Build extends Component {
  state = {
    name: "",
    category: "",
    cpu: "",
    gpu: "",
    hdd: "",
    ram: "",
    error: "",
    loading: false,
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { name, category, cpu, ram, gpu, hdd } = this.state;
    e.preventDefault();
    const requiredConfig = {
      cpu,
      gpu,
      ram,
      hdd,
    };

    if (name && category) {
      this.setState({ error: "", loading: true });
      console.log(name, category, requiredConfig);
      // Send name, category, requiredConfig to API
    } else {
      this.setState({
        error: "Please enter all required fields",
      });
    }
  };

  render() {
    const { name, category, cpu, ram, gpu, hdd, error, loading } = this.state;

    return (
      <div className="build-container data-container">
        <div
          className="container style-2"
          style={{ overflowY: "auto", marginRight: 0 }}
        >
          <form
            className="form-horizontal"
            action=" "
            onSubmit={this.handleSubmit}
            id="buildForm"
            autoComplete="off"
          >
            <fieldset>
              <h2>
                Build your laptop{" "}
                <img src={laptop} style={{ width: "34px", height: "34px" }} />
              </h2>
              {error && (
                <div style={{ paddingRight: "1rem" }}>
                  <Alert message={error} type="error" className="col-md-8" />
                </div>
              )}

              <div className="row mt-2">
                <div className="form-group col-md-4">
                  <label className="control-label">
                    Laptop Name <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="inputGroupContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-user" />
                      </span>
                      <input
                        name="name"
                        placeholder="Enter laptop name"
                        className="form-control"
                        type="text"
                        value={name}
                        onChange={this.onChange}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-md-4 form-group">
                  <label className="control-label">
                    Category of Laptop <span style={{ color: "red" }}>*</span>
                  </label>
                  <div className="selectContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list" />
                      </span>
                      <select
                        name="category"
                        value={category}
                        onChange={this.onChange}
                        className="form-control selectpicker"
                      >
                        <option value="">Please select category</option>
                        <option value="budget">Budget</option>
                        <option value="midrange">Midrange</option>
                        <option value="gaming">Gaming</option>
                        <option value="business">Business</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>

              <label className="control-label">
                Any additional required config
              </label>

              <div className="row">
                <div className="col-md-4 form-group">
                  <div className="selectContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list" />
                      </span>
                      <select
                        name="cpu"
                        value={cpu}
                        onChange={this.onChange}
                        className="form-control selectpicker"
                      >
                        <option value="">Select CPU</option>
                        <option>i3</option>
                        <option>i5</option>
                        <option>Ryzen</option>
                      </select>

                      {/* <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select CPU Manufacturer</option>
                      <option>Intel</option>
                      <option>AMD</option>
                    </select> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-4 form-group">
                  <div className="selectContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list" />
                      </span>
                      <select
                        name="gpu"
                        value={gpu}
                        onChange={this.onChange}
                        className="form-control selectpicker"
                      >
                        <option value="">Select GPU</option>
                        <option>GeForce GTX 1080</option>
                        <option>GeForce GTX 1070</option>
                        <option>GeForce GTX 1050Ti</option>
                      </select>

                      {/* <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select GPU Manufacturer</option>
                      <option>Nvidia</option>
                      <option>AMD</option>
                    </select> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row">
                <div className="col-md-4 form-group">
                  <div className="selectContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list" />
                      </span>
                      <select
                        name="ram"
                        value={ram}
                        onChange={this.onChange}
                        className="form-control selectpicker"
                      >
                        <option value="">Select RAM</option>
                        <option>2 GB</option>
                        <option>4 GB</option>
                        <option>8 GB</option>
                      </select>

                      {/* <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select RAM Manufacturer</option>
                      <option>Corsair</option>
                      <option>Kingston</option>
                    </select> */}
                    </div>
                  </div>
                </div>

                <div className="col-md-4 form-group">
                  <div className="selectContainer">
                    <div className="input-group">
                      <span className="input-group-addon">
                        <i className="glyphicon glyphicon-list" />
                      </span>
                      <select
                        name="hdd"
                        value={hdd}
                        onChange={this.onChange}
                        className="form-control selectpicker"
                      >
                        <option value="">Select HDD</option>
                        <option>2 TB HDD</option>
                        <option>4 TB HDD</option>
                      </select>

                      {/* <select name="state" className="form-control selectpicker">
                      <option value=" ">Select HDDManufacturer</option>
                      <option>Western Digital</option>
                      <option>Seagate</option>
                    </select> */}
                    </div>
                  </div>
                </div>
              </div>

              <div className="row mt-2">
                <div
                  className="col-md-4 form-group ml-auto mr-auto"
                  style={{ display: "flex", justifyContent: "flex-end" }}
                >
                  <Button
                    size="large"
                    form="buildForm"
                    key="submit"
                    htmlType="submit"
                    type="primary"
                    loading={loading}
                  >
                    Submit
                  </Button>
                </div>
              </div>
            </fieldset>
          </form>
        </div>
        {/* /.container */}
      </div>
    );
  }
}
