import React, { Component } from "react";
import "../../assets/styles/landing.css";

import BOM from "../bom/BOM";
import Components from "../components/Components";
import Stocks from "../stocks/Stocks";

export default class Landing extends Component {
  render() {
    if (!this.props.match.params.selection) {
      return (
        <div className='landing'>
          <BOM />
        </div>
      );
    } else if (this.props.match.params.selection === "components") {
      return (
        <div className='landing'>
          <Components />
        </div>
      );
    } else if (this.props.match.params.selection === "stock") {
      return (
        <div className='landing'>
          <Stocks />
        </div>
      );
    } else {
      this.props.history.replace("/");
      return null;
    }
  }
}
