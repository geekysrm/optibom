import React, { PureComponent } from "react";
import { RadialBarChart, RadialBar, Legend } from "recharts";

// const data = [
//   {
//     name: "",
//     uv: 3,
//     // pv: 2400,
//     fill: "#8884d8",
//   },
//   {
//     name: "25-29",
//     uv: 26.69,
//     // pv: 4567,
//     fill: "#83a6ed",
//   },
//   {
//     name: "30-34",
//     uv: 15.69,
//     // pv: 1398,
//     fill: "#8dd1e1",
//   },
//   {
//     name: "35-39",
//     uv: 8.22,
//     // pv: 9800,
//     fill: "#82ca9d",
//   },
//   {
//     name: "40-49",
//     uv: 8.63,
//     // pv: 3908,
//     fill: "#a4de6c",
//   },
//   {
//     name: "50+",
//     uv: 2.63,
//     // pv: 4800,
//     fill: "#d0ed57",
//   },
//   {
//     name: "unknow",
//     uv: 6.67,
//     // pv: 4800,
//     fill: "#ffc658",
//   },
// ];

const style = {
  top: 0,
  left: 350,
  lineHeight: "30px",
};

export default class RingChart extends PureComponent {
  // static jsfiddleUrl = "https://jsfiddle.net/alidingling/9km41z5z/";

  render() {
    const fill = ["#8884d8", "#8dd1e1", "#a4de6c", "#ffc658"];
    const data = this.props.data.map((data, index) => ({
      name: data.x,
      uv: data.y,
      fill: fill[index],
    }));
    return (
      <>
        <h3>
          <span style={{ textTransform: "capitalize" }}>
            {this.props.heading}
          </span>{" "}
        </h3>
        <RadialBarChart
          width={500}
          height={300}
          cx={150}
          cy={150}
          innerRadius={20}
          outerRadius={140}
          barSize={25}
          data={data}
        >
          <RadialBar
            minAngle={15}
            label={{ position: "insideStart", fill: "#fff", color: "black" }}
            background
            clockWise
            dataKey="uv"
          />
          <Legend
            iconSize={10}
            width={120}
            height={140}
            layout="vertical"
            verticalAlign="middle"
            wrapperStyle={style}
          />
        </RadialBarChart>
      </>
    );
  }
}
