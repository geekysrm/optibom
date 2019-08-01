import React, { Component } from "react";

export default class Build extends Component {
  render() {
    return (
      <div className="build-container data-container">
        <div className="container">
          <form
            className="well form-horizontal"
            action=" "
            method="post"
            id="contact_form"
          >
            <fieldset>
              {/* Form Name */}
              <h2>Build your laptop</h2>
              {/* Text input*/}
              <div className="form-group">
                <label className="col-md-4 control-label">Laptop Name</label>
                <div className="col-md-4 inputGroupContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-user" />
                    </span>
                    <input
                      name="first_name"
                      placeholder="First Name"
                      className="form-control"
                      type="text"
                    />
                  </div>
                </div>
              </div>

              {/* Select Basic */}
              <div className="form-group">
                <label className="col-md-4 control-label">
                  Category of Laptop
                </label>
                <div className="col-md-4 selectContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-list" />
                    </span>
                    <select name="state" className="form-control selectpicker">
                      <option value=" ">Please select laptop category</option>
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
                    <select name="cpu" className="form-control selectpicker">
                      <option value=" ">Select CPU</option>
                      <option>i3</option>
                      <option>i5</option>
                      <option>Ryzen</option>
                    </select>

                    {/* Depends on selected option value */}
                    <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select CPU Manufacturer</option>
                      <option>Intel</option>
                      <option>AMD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4 selectContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-list" />
                    </span>
                    <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select GPU</option>
                      <option>GeForce GTX 1080</option>
                      <option>GeForce GTX 1070</option>
                      <option>GeForce GTX 1050Ti</option>
                    </select>

                    <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select GPU Manufacturer</option>
                      <option>Nvidia</option>
                      <option>AMD</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4 selectContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-list" />
                    </span>
                    <select name="state" className="form-control selectpicker">
                      <option value=" ">Select RAM</option>
                      <option>2 GB</option>
                      <option>4 GB</option>
                      <option>8 GB</option>
                    </select>

                    <select name="gpu" className="form-control selectpicker">
                      <option value=" ">Select RAM Manufacturer</option>
                      <option>Corsair</option>
                      <option>Kingston</option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <div className="col-md-4 selectContainer">
                  <div className="input-group">
                    <span className="input-group-addon">
                      <i className="glyphicon glyphicon-list" />
                    </span>
                    <select name="state" className="form-control selectpicker">
                      <option value=" ">Select HDD/SSD</option>
                      <option>2 TB HDD</option>
                      <option>2 TB SDD</option>
                      <option>4 TB HDD</option>
                    </select>

                    <select name="state" className="form-control selectpicker">
                      <option value=" ">Select HDD/SSD Manufacturer</option>
                      <option>Western Digital</option>
                      <option>Seagate</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* <div className="alert alert-success" role="alert" id="success_message">Success <i className="glyphicon glyphicon-thumbs-up" /> Thanks for contacting us, we will get back to you shortly.</div> */}

              <div className="form-group">
                <label className="col-md-4 control-label" />
                <div className="col-md-4">
                  <button type="submit" className="btn btn-warning">
                    Submit
                    <span className="glyphicon glyphicon-send" />
                  </button>
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
