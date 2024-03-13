import React from "react";
import Chart from "react-apexcharts";

function Line() {
  const series = [
    {
      name: "This year",
      data: [3, 6, 3, 13, 10, 3],
    },
    {
      name: "Last year",
      data: [9, 12, 6, 17, 14, 10],
    },
  ];

  const options = {
    chart: {
      type: "bar",
      height: 350,
    },
    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "55%",
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      show: true,
      width: 2,
      colors: ["transparent"],
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      labels: {
        style: {
          colors: "#000",
        },
      },
    },
    yaxis: {
      labels: {
        style: {
          colors: "#000",
        },
      },
      title: {
        text: "",
      },
    },
    fill: {
      opacity: 1,
    },
    legend: {
      position: "bottom",
      horizontalAlign: "left",
      offsetX: 100,
    },
    series: [
      {
        name: "This year",
        data: series[0].data,
        color: "#f44336",
      },
      {
        name: "Last year",
        data: series[1].data,
        color: "#3f51b5",
      },
    ],
  };

  return (
    <div id="chart">
      <Chart
        options={options}
        series={series}
        type="bar"
        height={250}
        width={750}
      />
    </div>
  );
}

export default Line;
