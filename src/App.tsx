import BarChart from './components/Bar';
import DoughnutChart from './components/Doughnut';
import LineChart from './components/Line';
import PieChart from './components/Pie';

function App() {
  return (
    <div className="w-[95%] md:w-[620px] lg:w-[1080px] min-h-screen mx-auto py-4">
      <div className="grid grid-cols-2 gap-8">
        <BarChart />
        <LineChart />
        <PieChart />
        <DoughnutChart />
      </div>
    </div>
  );
}

export default App;
