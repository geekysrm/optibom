import React, { Component } from "react";
import { connect } from "react-redux";

import BarGraph from "./BarGraph";
import RingChart from "./RingChart";

class Graphs extends Component {
  componentDidMount() {
    if (!this.props.bom.lowCostBomAvgCpr) {
      this.props.history.push("/build");
    }
  }

  render() {
    window.scrollTo(0, 0);
    return (
      <>
        <div className="row" style={{ marginTop: "75px" }}>
          {/* <div className="col-md-6">
            <BarGraph
              data={[
                {
                  x: "Lowest Cost",
                  y: `${this.props.bom.lowCostBomTotalCost / 1000}K`,
                },
                {
                  x: "High SPR",
                  y: `${this.props.bom.highSprBomTotalCost / 1000}K`,
                },
                {
                  x: "High CPR",
                  y: `${this.props.bom.highCprBomTotalCost / 1000}K`,
                },
                {
                  x: "Optimal",
                  y: `${this.props.bom.optimizedBomTotalCost / 1000}K`,
                },
              ]}
              heading="Cost"
            />
          </div> */}
          <div className="col-md-6">
            <RingChart
              data={[
                {
                  x: "Lowest Cost",
                  y: `${this.props.bom.lowCostBomTotalCost}`,
                },
                {
                  x: "High SPR",
                  y: `${this.props.bom.highSprBomTotalCost}`,
                },
                {
                  x: "High CPR",
                  y: `${this.props.bom.highCprBomTotalCost}`,
                },
                {
                  x: "Optimal",
                  y: `${this.props.bom.optimizedBomTotalCost}`,
                },
              ]}
              heading="Total Cost"
            />
          </div>
          <div className="col-md-6">
            <BarGraph
              heading="Average CPR"
              data={[
                {
                  x: "Lowest Cost",
                  y: this.props.bom.lowCostBomAvgCpr,
                },
                {
                  x: "High SPR",
                  y: this.props.bom.highSprBomAvgCpr,
                },
                {
                  x: "High CPR",
                  y: this.props.bom.highCprBomAvgCpr,
                },
                {
                  x: "Optimal",
                  y: this.props.bom.optimizedBomAvgCpr,
                },
              ]}
            />
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <BarGraph
              heading="Average SPR"
              data={[
                {
                  x: "Lowest Cost",
                  y: this.props.bom.lowCostBomAvgSpr,
                },
                {
                  x: "High SPR",
                  y: this.props.bom.highSprBomAvgSpr,
                },
                {
                  x: "High CPR",
                  y: this.props.bom.highCprBomAvgSpr,
                },
                {
                  x: "Optimal",
                  y: this.props.bom.optimizedBomAvgSpr,
                },
              ]}
            />
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = state => ({
  bom: state.bom,
});

export default connect(
  mapStateToProps,
  null
)(Graphs);
