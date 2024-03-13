import React, { useEffect, useState } from "react";
import ApexCharts from "apexcharts";

const Graph = () => {
  const [data, setData] = useState([
    {
      name: "Series A",
      data: [1.4, 2, 2.5, 1.5, 2.5, 2.8, 3.8, 4.6],
    },
    {
      name: "Series B",
      data: [20, 29, 37, 36, 44, 45, 50, 58],
    },
  ]);

  useEffect(() => {
    const options = {
      chart: {
        width: 400,
        height: 200,
        type: "line",
      },
      colors: ["#FF1654", "#247BA0"],
      series: data,
      xaxis: {
        categories: [2009, 2010, 2011, 2012, 2013, 2014, 2015, 2016],
      },
    };

    const chart = new ApexCharts(document.querySelector("#chart"), options);
    chart.render();

    return () => {
      chart.destroy();
    };
  }, [data]);

  const updateData = () => {
    const newData = data.map((series) => {
      const newData = series.data.map((d) => d + Math.random() * 2);
      return { ...series, data: newData };
    });

    setData(newData);
  };

  return (
    <div>
      <div id="graph" />
    </div>
  );
};

export default Graph;
