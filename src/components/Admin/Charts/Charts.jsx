import { AreaCharts } from "./AreaCharts";
import { BarCharts } from "./BarChart";
import { LineCharts } from "./LineChart";
import "./Charts.css";

export function Charts() {
  return (
    <section>
      <div className="container  charts-container">
        <div className="d-flex upper-chart-container">
          <div className=" flex-1 chart">
            <BarCharts />
          </div>
          <div className="flex-1 chart">
            <LineCharts />
          </div>
        </div>
        <div className="area-chart chart">
          <AreaCharts />
        </div>
      </div>
    </section>
  );
}
