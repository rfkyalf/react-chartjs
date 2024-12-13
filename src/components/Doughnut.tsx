// import { Chart } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ArcElement,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   PointElement,
//   LineElement,
//   Title,
//   Tooltip,
//   Legend,
//   Filler,
//   ArcElement
// );

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';
import { genderData } from '../utils/data';

export default function DoughnutChart() {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Gender of students in a class',
      },
    },
  };

  const labels = genderData.map((gender) => gender.gender);

  const datasets = [
    {
      label: 'Total',
      data: genderData.map((gender) => gender.value),
    },
  ];

  const data = {
    labels,
    datasets,
  };

  // const data = {
  //   labels: ['Man', 'Woman', 'Other'],
  //   datasets: [
  //     {
  //       label: 'Total',
  //       data: [45, 50, 5],
  //       backgroundColor: ['#ef4444', '#3b82f6', '#22c55e'],
  //     },
  //   ],
  // };

  return (
    <div className="h-[400px] flex items-center justify-center">
      <Chart type="doughnut" data={data} options={options} />
    </div>
  );
}
