import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ userData }: any) => {
  const pieChart = userData.length ? ( // 0
    <Pie
      width={600}
      data={{
        labels: userData.map(({ label }: any) => label),
        datasets: [
          {
            data: userData.map(({ value }: any) => value),
            label: "value",
            borderColor: "#ccc",
            backgroundColor: userData.map(({ color }: any) => color),
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{pieChart}</div>;
};

export default Chart;
