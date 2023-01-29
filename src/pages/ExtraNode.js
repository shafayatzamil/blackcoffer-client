import React from "react";
import { Doughnut } from "react-chartjs-2";
import { Chart, ArcElement, elements } from "chart.js";
import { useQuery } from "@tanstack/react-query";
Chart.register(ArcElement);

const ExtraNode = () => {

  let intensity = [];

  const {data:Alldata=[]} =useQuery({
    queryKey:['data'],
    queryFn:async()=>{
      const res = await fetch(`http://localhost:5000/data`)
      const data = await res.json();
      return data.data;
    }
  })

  const sample = Alldata.slice(0,15).map((e)=>intensity.push(e.intensity));
  console.log(intensity);
  const data = {
    labels: ["red", "blue", "yellow", "green", "purple"],
    datasets: [
      {
        data: intensity,
        backgroundColor: ["red", "yellow", "green", "blue", "purple", "orange"],
      },
    ],
  };

  return (
    <div className=" text-white">
      <h2>Length of intensity:{intensity.length}</h2>
      <Doughnut data={data} />
    </div>
  );
};

export default ExtraNode;
