// import { Chart } from 'react-chartjs-2';
// import {
//   Chart as ChartJS,
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend,
// } from 'chart.js';

// ChartJS.register(
//   CategoryScale,
//   LinearScale,
//   BarElement,
//   Title,
//   Tooltip,
//   Legend
// );

import 'chart.js/auto';
import { Chart } from 'react-chartjs-2';

export default function BarChart() {
  const options = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: 'Steps taken per day',
      },
    },
  };

  const data = {
    labels: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday',
    ],
    datasets: [
      {
        label: 'John',
        data: [10200, 8212, 9435, 10032, 8756, 10324, 9021],
        backgroundColor: '#ef4444',
      },
      {
        label: 'Jane',
        data: [8010, 9432, 9401, 8790, 10431, 9110, 8833],
        backgroundColor: '#3b82f6',
      },
    ],
  };

  return (
    <div>
      <Chart type="bar" data={data} options={options} />
    </div>
  );
}
