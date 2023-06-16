import { Line } from "react-chartjs-2";
import {
  Chart as ChartJs,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
import PieChart from "react-apexcharts";

ChartJs.register(LineElement, CategoryScale, LinearScale, PointElement);

interface Dashboard {
  totalData: any;
  averageData: any;
}

const Dashboard = (props:Dashboard) => {

  const { totalData, averageData } = props;

  
  const data = {
    labels: ["May 12", "May 13", "May 14", "May 15", "May 16", "May 17"],
    datasets: [
      {
        data: [0.0, 0.15, 0.05, 0.25, 0.1, 0.2],
        backgroundColor: "transparent",
        borderColor: "rgb(68, 3, 219)",
        pointBorderColor: "#000",
        pointBorderWidth: 4,
      },
    ],
  };
  const options = {
    Plugin: {
      legend: false,
    },
    scales: {
      x: {
        grid: {
          display: false,
        },
      },
    },
  };

  return (
    <section>
      <div className="Dashboard-container">
      <div className="uk-pieChart uk-container uk-padding"
      // style={{paddingTop: "30px", gap: '10px'}}
      >
        <div className="uk-card uk-card-default uk-padding">
        <PieChart
          type="pie"
          width={400}
          height={400}
          series={[25, 25, 25, 25, 25]}
          options={{
            labels: ["Blue", "Green", "Yellow", "Red", "Purple"],
          }}
        />
        </div>
        <div className="uk-card uk-card-default uk-padding">
        <PieChart
          type="radialBar"
          width={380}
          height={380}
          series={[23, 25, 43, 99, 72]}
          options={{
            labels: ["Blue", "Green", "Yellow", "Red", "Purple"],
          }}
        />
         </div>
        </div>
        <div className="uk-card uk-card-default uk-padding">
      <div
        className="uk-container uk-paddingTop-10"
        style={{ width: "90%", marginLeft: "70px", paddingTop: "30px"}}
      >
        <Line data={data} options={options}></Line>
      </div>
      </div>
      <hr/>
        <div className="uk-card uk-card-default uk-padding" >
      <div className="uk-items-container" >
          <div className="uk-card uk-card-body">
            <div className="uk-card-title">
              <h3>Total Data</h3>
              <p>{totalData}</p>
            </div>
          </div>
          <div className="uk-card uk-card-body">
            <div className="uk-card-title">
              <h3>Average Data</h3>
              <p>{averageData}</p>
            </div>
          </div>
          <div className="uk-card uk-card-body">
            <div className="uk-card-title">
              <h3>Total Ratio</h3>
              <p>52%</p>
            </div>
          </div>
    </div>
    </div>
       
        </div>
    </section>
  );
};

export default Dashboard;
