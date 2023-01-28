import React, { useEffect, useState } from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement } from "chart.js";
Chart.register(ArcElement);

const ExtraNode = () => {
  const [intensity, setAllintensity] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/data`)
      .then((res) => res.json())
      .then(({ data }) => {
        data?.slice(0, 15)?.map((element) => {
          // console.log(element.intensity);
          setAllintensity((current) => [...current, element.intensity]);
          // setAllintensity(newValue);
        });
      });
  }, []);

  const data = {
    labels: ["red", "blue", "yellow", "green", "purple"],
    datasets: [
      {
        data: intensity,
        backgroundColor: ["red", "yellow", "green", "blue", "purple", "orange"],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <div className="bg-indigo-300 text-white">
      <h2>Length of intensity:{intensity.length}</h2>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default ExtraNode;
