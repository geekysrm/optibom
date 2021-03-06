import React, { Component } from "react";
import { connect } from "react-redux";
import { withRouter } from "react-router-dom";
import { Button } from "antd";
import exportFromJSON from "export-from-json";
import axios from "axios";
import SMS_URL from "../../constants/SMS_URL";

// import "../../assets/styles/Result.css";
import LaptopDetails from "../LaptopDetails.js/LaptopDetails";
import ComponentList from "../ComponentList/ComponentList";
import ComponentDetails from "../ComponentDetails/ComponentDetails";
import BomTable from "../BomTable/BomTable";
import { updateItem } from "../../actions/bomActions";

class Result extends Component {
  state = {
    modal2Visible: false,
    selectedCategory: "",
    selectedItem: null,
    editState: false,
    options: [],
  };

  setModal2Visible = modal2Visible => {
    this.setState({ modal2Visible });
  };

  handleXlsDownload = async () => {
    const bomData = this.props.bom[this.state.selectedCategory];
    let data = [];
    if (bomData && bomData.length) {
      data = bomData.map((row, index) => {
        return {
          commodity: row.commodity,
          component: row.component,
          supplier: row.supplier,
          cost: row.cost,
          spr: row.spr,
          cpr: row.cpr,
        };
      });
      let totalCost,
        avgCpr,
        avgSpr = null;
      if (this.state.selectedCategory === "lowCostBom") {
        totalCost = "lowCostBomTotalCost";
        avgCpr = "lowCostBomAvgCpr";
        avgSpr = "lowCostBomAvgSpr";
      } else if (this.state.selectedCategory === "highCprBom") {
        totalCost = "highCprBomTotalCost";
        avgCpr = "highCprBomAvgCpr";
        avgSpr = "highCprBomAvgSpr";
      } else if (this.state.selectedCategory === "highSprBom") {
        totalCost = "highSprBomTotalCost";
        avgCpr = "highSprBomAvgCpr";
        avgSpr = "highSprBomAvgSpr";
      } else if (this.state.selectedCategory === "optimizedBom") {
        totalCost = "optimizedBomTotalCost";
        avgCpr = "optimizedBomAvgCpr";
        avgSpr = "optimizedBomAvgSpr";
      }
      data.push({
        commodity: "",
        component: "",
        supplier: "",
        cost: this.props.bom[totalCost],
        spr: this.props.bom[avgSpr],
        cpr: this.props.bom[avgCpr],
      });
    }

    const fileName = "bom";
    const exportType = "xls";

    exportFromJSON({ data, fileName, exportType });
    const { newdata } = await axios.get(
      `${SMS_URL}?supplier=Intel&commodity=i3`
    );
  };

  handleComponentEdit = () => {
    this.setState({
      editState: !this.state.editState,
    });
  };

  handleComponentSave = async obj => {
    this.setState({
      editState: !this.state.editState,
    });

    obj.commodity = obj.commodity.split("-")[0];

    this.props.updateItem(
      this.state.selectedCategory,
      this.state.selectedItem,
      obj
    );
  };

  componentDidMount() {
    if (!this.props.bom.lowCostBomAvgCpr) {
      this.props.history.push("/build");
    }
  }

  onChange = e => {
    this.setState({
      selectedCategory: e.target.value,
      selectedItem: "",
    });
  };

  onClick = async (id, name) => {
    this.setState({
      editState: false,
      selectedItem: id,
    });
    const res = await axios.get(
      `https://backend-optibom.herokuapp.com/backend/get_component_data?component=${name}`
    );

    const result = res.data.message.map(x => {
      let a = x;
      a[0] = a[0] + "-" + a[2];
      return a;
    });

    await this.setState({
      options: result,
    });
  };

  render() {
    let totalCost,
      avgCpr,
      avgSpr = null;
    if (this.state.selectedCategory === "lowCostBom") {
      totalCost = "lowCostBomTotalCost";
      avgCpr = "lowCostBomAvgCpr";
      avgSpr = "lowCostBomAvgSpr";
    } else if (this.state.selectedCategory === "highCprBom") {
      totalCost = "highCprBomTotalCost";
      avgCpr = "highCprBomAvgCpr";
      avgSpr = "highCprBomAvgSpr";
    } else if (this.state.selectedCategory === "highSprBom") {
      totalCost = "highSprBomTotalCost";
      avgCpr = "highSprBomAvgCpr";
      avgSpr = "highSprBomAvgSpr";
    } else if (this.state.selectedCategory === "optimizedBom") {
      totalCost = "optimizedBomTotalCost";
      avgCpr = "optimizedBomAvgCpr";
      avgSpr = "optimizedBomAvgSpr";
    }

    const { options } = this.state;
    const { name, id, category } = this.props.bom;

    return (
      <div className="result-container">
        <div className="row">
          <div className="col-md-12">
            <LaptopDetails
              name={name}
              id={id}
              category={category}
              options={options}
              onChange={this.onChange}
            />
          </div>
        </div>
        {/* <div className="row mt-2 w-100">
          <div className="col-md-12">
            <div className="bom-version-list w-100">Bom Version</div>
          </div>
        </div> */}
        <div className="row mt-3">
          <div className="col-md-12">
            <div className="current-bom row d-flex justify-content-center">
              <div className="col-md-7 w-100">
                <ComponentList
                  list={this.props.bom[this.state.selectedCategory]}
                  onClick={this.onClick}
                  active={this.state.selectedItem}
                />
              </div>
              {this.props.bom[this.state.selectedCategory] ? (
                <div className="col-md-5 d-flex align-items-center">
                  <ComponentDetails
                    list={this.props.bom[this.state.selectedCategory]}
                    detail={
                      this.props.bom[this.state.selectedCategory] &&
                      this.props.bom[this.state.selectedCategory].length
                        ? this.props.bom[this.state.selectedCategory][
                            this.state.selectedItem
                          ]
                        : null
                    }
                    options={this.state.options}
                    handleComponentEdit={this.handleComponentEdit}
                    handleComponentSave={this.handleComponentSave}
                    editState={this.state.editState}
                    selectedItem={this.state.selectedItem}
                  />
                </div>
              ) : null}
            </div>
          </div>
        </div>
        <div className="row py-3 mb-1">
          <div className="col-md-12 d-flex justify-content-center">
            {this.state.selectedCategory ? (
              <>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => this.setModal2Visible(true)}
                >
                  View BOM
                </Button>
                <Button
                  type="primary"
                  size="large"
                  onClick={() => this.props.history.push("/graphs")}
                  className="ml-2"
                >
                  View Stats
                </Button>
              </>
            ) : null}
          </div>
        </div>
        <BomTable
          list={this.props.bom[this.state.selectedCategory]}
          totalCost={this.props.bom[totalCost]}
          avgCpr={this.props.bom[avgCpr]}
          avgSpr={this.props.bom[avgSpr]}
          setModal2Visible={this.setModal2Visible}
          modal2Visible={this.state.modal2Visible}
          handleXlsDownload={this.handleXlsDownload}
          selectedCategory={this.state.selectedCategory}
        />
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
  { updateItem }
)(withRouter(Result));
