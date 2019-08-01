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
    loading: false
  };

  onChange = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = e => {
    const { name, category, cpu, ram, gpu, hdd } = this.state;
    e.preventDefault();
    const requiredConfig = {
      cpu,
      gpu,
      ram,
      hdd
    };

    if (name && category) {
      this.setState({ error: "", loading: true });
      console.log(name, category, requiredConfig);
      // Send name, category, requiredConfig to API
    } else {
      this.setState({
        error: "Please enter all required fields"
      });
    }
  };

  render() {
    const { name, category, cpu, ram, gpu, hdd, error, loading } = this.state;

    return (
      <div className="build-container data-container">
        <div className="container">
          <form
            className="well form-horizontal"
            action=" "
            onSubmit={this.handleSubmit}
            id="buildForm"
          >
            <fieldset>
              <h2 style={{ marginLeft: "14px" }}>
                Build your laptop{" "}
                <img src={laptop} style={{ width: "34px", height: "34px" }} />
              </h2>
              {error && (
                <Alert
                  style={{ marginLeft: "14px" }}
                  message={error}
                  type="error"
                />
              )}
              <br />
              <div className="form-group">
                <label className="col-md-4 control-label">
                  Laptop Name <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-md-4 inputGroupContainer">
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

              <div className="form-group">
                <label className="col-md-4 control-label">
                  Category of Laptop <span style={{ color: "red" }}>*</span>
                </label>
                <div className="col-md-4 selectContainer">
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

              <div className="form-group">
                <label className="col-md-4 control-label">
                  Any additional required config
                </label>
                <div className="col-md-4 selectContainer">
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

              <div className="form-group">
                <div className="col-md-4 selectContainer">
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

              <div className="form-group">
                <div className="col-md-4 selectContainer">
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

              <div className="form-group">
                <div className="col-md-4 selectContainer">
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

              {/* <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up" /> Thanks for contacting us, we will get back to you shortly.</div> */}

              <div className="form-group">
                <label className="col-md-4 control-label" />
                <div className="col-md-4">
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
