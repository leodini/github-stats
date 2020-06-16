import React from "react";
import { Pie } from "react-chartjs-2";

const Chart = ({ userData }: any) => {
  const lineChart = userData.length ? ( // 0
    <Pie
      data={{
        labels: userData.map(({ label }: any) => label),
        datasets: [
          {
            data: userData.map(({ value }: any) => value),
            label: "value",
            borderColor: userData.map(({ color }: any) => color),
            backgroundColor: userData.map(({ color }: any) => color),
            fill: true,
          },
        ],
      }}
    />
  ) : null;

  return <div>{lineChart}</div>;
};

export default Chart;
