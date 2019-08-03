import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Alert, Button } from "antd";

export default class Landing extends Component {
  render() {
    return (
      <div className="landing-container data-container h-100">
        <div className="landing-card-wrapper">
          <div className="landing-card">Hello</div>
          <div className="landing-card">Hello</div>
          <div className="landing-card">Hello</div>
        </div>
        <Button
          size="large"
          form="buildForm"
          key="submit"
          htmlType="submit"
          type="primary"
        >
          <Link to="/build">Get Started</Link>
        </Button>
      </div>
    );
  }
}
