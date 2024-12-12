import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler,
} from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
  Filler
);

export default function LineChart() {
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
        fill: true,
        backgroundColor: '#ef444450',
        borderColor: '#ef4444',
        tension: 0.5,
      },
      {
        label: 'Jane',
        data: [8010, 9432, 9401, 8790, 10431, 9110, 8833],
        fill: true,
        backgroundColor: '#3b82f650',
        borderColor: '#3b82f6',
        tension: 0.5,
      },
    ],
  };

  return (
    <div>
      <Line data={data} options={options} />
    </div>
  );
}
