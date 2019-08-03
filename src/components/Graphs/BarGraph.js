import React, { Component } from "react";
import { VictoryBar, VictoryChart, VictoryTheme } from "victory";

import "../../assets/styles/Graphs.css";

class BarGraph extends Component {
  render() {
    const newData = this.props.data.map(data => ({
      x: data.x,
      y: parseFloat(data.y).toFixed(0),
    }));
    newData.unshift({ x: "", y: "" });

    return (
      <div className="graph-wrapper">
        <div>
          <h3>
            <span style={{ textTransform: "capitalize" }}>
              {this.props.heading}
            </span>{" "}
          </h3>
          <VictoryChart
            style={{ parent: { maxWidth: "200rem" } }}
            theme={VictoryTheme.material}
            domainPadding={10}
          >
            <VictoryBar
              labels={
                this.props.heading === "Cost" ? d => `₹ ${d.y}K` : d => `${d.y}`
              }
              animate={{
                duration: 2000,
                onLoad: { duration: 1000 },
              }}
              style={{
                data: {
                  fill: "#2980B9",
                },
                labels: { fontSize: 9 },
              }}
              alignment="start"
              data={newData}
            />
          </VictoryChart>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  bom: state.bom,
});

export default BarGraph;
