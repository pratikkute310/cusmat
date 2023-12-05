import React, { useState } from "react";
import Chart from "react-apexcharts";
import "./App.css";
import Horizontalchart from "./Componetnt/Horizontalchart";
import LineChart from "./Componetnt/Bar-Apex";
function App() {
  const [state, setState] = useState({
    options: {
      colors: ["#E91E63", "#FF9800"],
      chart: {
        id: "bar",
        toolbar: {
          show: false, // Hide the chart toolbar
        },
      },
      xaxis: {
        categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007, 2008, 2009],
      },
      responsive: [
        {
          breakpoint: 768, // adjust as needed
          options: {
            chart: {
              width: "80%", // reduce width for smaller screens
            },
          },
        },
      ],
    },
    series: [
      {
        name: "No of Boys",
        data: [25, 30, 41, 45, 41, 55, 60, 51],
      },
      {
        name: "No of Girls",
        data: [31, 20, 95, 80, 49, 70, 20, 81],
      },
    ],
  });

  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="scatter"
                width="60%"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="area"
                width="60%"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="bar"
                width="60%"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="heatmap"
                width="60%"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="line"
                width="60%"
              />
            </div>
          </div>
          <div className="col-md-6 col-lg-4 mb-4">
            <div className="chart-container">
              <Chart
                options={state.options}
                series={state.series}
                type="radar"
                width="60%"
              />
            </div>
          </div>
          {/* <div className="col-md-6 col-lg-4 mb-4">
                <LineChart/>
          </div> */}
        </div>
      </div>
    </div>
  );
}

export default App;
