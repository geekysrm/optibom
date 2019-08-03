import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "antd";

import "../../assets/styles/Result.css";
import LaptopDetails from "../LaptopDetails.js/LaptopDetails";
import ComponentList from "../ComponentList/ComponentList";
import ComponentDetails from "../ComponentDetails/ComponentDetails";
import BomTable from "../BomTable/BomTable";
class Result extends Component {
  state = {
    modal2Visible: false,
    name: "Dell Pavillion",
    laptop_id: "",
    category: "gaming",
    options: [
      "lowest cost",
      "highest component rating",
      "highest supplier rating",
      "optimal configuration",
    ],
    lowcost: {
      cpu: {
        supplier: "intel",
        processor: "i5",
      },
      ram: {
        supplier: "kingston",
        size: "8gb",
      },
      keyboard: {
        supplier: "dell",
      },
      mouse: {
        supplier: "apple",
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080",
      },
      hdd: {
        supplier: "sony",
        size: "1TB",
      },
    },
    highspr: {
      cpu: {
        supplier: "intel",
        processor: "i5",
      },
      ram: {
        supplier: "kingston",
        size: "8gb",
      },
      keyboard: {
        supplier: "dell",
      },
      mouse: {
        supplier: "apple",
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080",
      },
      hdd: {
        supplier: "sony",
        size: "1TB",
      },
    },
    highcpr: {
      cpu: {
        supplier: "intel",
        processor: "i5",
      },
      ram: {
        supplier: "kingston",
        size: "8gb",
      },
      keyboard: {
        supplier: "dell",
      },
      mouse: {
        supplier: "apple",
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080",
      },
      hdd: {
        supplier: "sony",
        size: "1TB",
      },
    },
    optimum: {
      cpu: {
        supplier: "intel",
        processor: "i5",
      },
      ram: {
        supplier: "kingston",
        size: "8gb",
      },
      keyboard: {
        supplier: "dell",
      },
      mouse: {
        supplier: "apple",
      },
      gpu: {
        supplier: "nvidia",
        name: "gtx 1080",
      },
      hdd: {
        supplier: "sony",
        size: "1TB",
      },
      selectedCategory: "",
    },
    selectedCategory: "",
    selectedItem: null,
  };

  setModal2Visible = modal2Visible => {
    this.setState({ modal2Visible });
  };

  componentDidMount() {
    if (!this.props.bom.lowCostBomAvgCpr) {
      this.props.history.push("/build");
    }
  }

  onChange = e => {
    this.setState({ selectedCategory: e.target.value, selectedItem: "" });
  };

  onClick = component => {
    this.setState({
      selectedItem: component,
    });
  };

  render() {
    const { options } = this.state;
    const { name, id, category } = this.props.bom;

    return (
      <div className="result-container data-container">
        <LaptopDetails
          name={name}
          id={id}
          category={category}
          options={options}
          onChange={this.onChange}
        />

        <div className="bom-version-list">Bom Version</div>
        <div className="current-bom">
          <ComponentList
            list={this.props.bom[this.state.selectedCategory]}
            onClick={this.onClick}
          />
          <ComponentDetails
            detail={
              this.props.bom[this.state.selectedCategory] &&
              this.props.bom[this.state.selectedCategory].length
                ? this.props.bom[this.state.selectedCategory][
                    this.state.selectedItem
                  ]
                : null
            }
          />
        </div>
        <Button type="primary" onClick={() => this.setModal2Visible(true)}>
          View
        </Button>
        <BomTable
          setModal2Visible={this.setModal2Visible}
          modal2Visible={this.state.modal2Visible}
        />
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    bom: state.bom,
  };
};

export default connect(
  mapStateToProps,
  null
)(withRouter(Result));
