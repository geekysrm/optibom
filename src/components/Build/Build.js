import React, { Component } from "react";
import { Alert, Button } from "antd";
import axios from "axios";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";

import laptop from "../../assets/images/laptop-build.png";
import BACKEND_URL from "../../constants/BACKEND_URL";
import { getBom } from "../../actions/bomActions";

class Build extends Component {
  state = {
    name: this.props.bom.name || "",
    category: this.props.bom.category || "",
    cpu: "",
    gpu: "",
    hdd: "",
    ram: "",
    error: "",
    buttonLoading: false,
    cpuOptions: [],
    gpuOptions: [],
    ramOptions: [],
    hddOptions: [],
    optionsFetched: false,
  };

  async componentDidMount() {
    if (this.state.category) {
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/get_dropdown_datas?laptop_type=${this.state.category}`
        );
        this.setState({
          cpuOptions: data.message.cpu,
          gpuOptions: data.message.gpu,
          hddOptions: data.message.hdd,
          ramOptions: data.message.ram,
          optionsFetched: true,
        });
      } catch (error) {
        console.error(error);
      }
    }
  }

  onChange = async e => {
    this.setState({ [e.target.name]: e.target.value });
    if (e.target.name === "category") {
      this.setState({
        optionsFetched: false,
        cpu: "",
        gpu: "",
        hdd: "",
        ram: "",
      });
      try {
        const { data } = await axios.get(
          `${BACKEND_URL}/get_dropdown_datas?laptop_type=${e.target.value}`
        );
        this.setState({
          cpuOptions: data.message.cpu,
          gpuOptions: data.message.gpu,
          hddOptions: data.message.hdd,
          ramOptions: data.message.ram,
          optionsFetched: true,
        });
      } catch (error) {
        console.error(error);
      }
    }
  };

  handleSubmit = async e => {
    const { name, category, cpu, ram, gpu, hdd } = this.state;
    e.preventDefault();
    if (name && category) {
      this.setState({ buttonLoading: true });
      await this.props.getBom(category, cpu, gpu, hdd, ram, name);
      this.setState({ error: "", buttonLoading: false });
      this.props.history.push("/result");
    } else {
      this.setState({
        error: "Please enter all required fields",
      });
    }
  };

  render() {
    const {
      name,
      category,
      cpu,
      ram,
      gpu,
      hdd,
      error,
      buttonLoading,
      cpuOptions,
      gpuOptions,
      hddOptions,
      ramOptions,
      optionsFetched,
    } = this.state;

    return (
      <div className="build-container data-container h-100">
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
                        disabled={!optionsFetched}
                      >
                        <option value="">Select CPU</option>
                        {cpuOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
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
                        disabled={!optionsFetched}
                      >
                        <option value="">Select GPU</option>
                        {gpuOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
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
                        disabled={!optionsFetched}
                      >
                        <option value="">Select RAM</option>
                        {ramOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
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
                        disabled={!optionsFetched}
                      >
                        <option value="">Select HDD</option>
                        {hddOptions.map((option, index) => (
                          <option key={index} value={option}>
                            {option}
                          </option>
                        ))}
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
                    loading={buttonLoading}
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

const mapStateToProps = state => {
  let curentIndex = Number(localStorage.getItem("currentIndex"));
  return {
    bom: state.bom[curentIndex],
  };
};

export default connect(
  mapStateToProps,
  { getBom }
)(withRouter(Build));
