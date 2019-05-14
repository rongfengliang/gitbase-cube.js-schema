import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Row, Col, Card, Spin, Statistic, Table } from "antd";
import "antd/dist/antd.css";
import cubejs from "@cubejs-client/core";
import { QueryRenderer } from "@cubejs-client/react";
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from "bizcharts";
import moment from "moment";

const Dashboard = ({ children }) => (
  <Row type="flex" justify="space-around" align="top" gutter={24}>
    {children}
  </Row>
);

const DashboardItem = ({ children, title }) => (
  <Col span={24} lg={12}>
    <Card
      title={title}
      style={{
        marginBottom: "24px"
      }}
    >
      {children}
    </Card>
  </Col>
);

const stackedChartData = resultSet => {
  const data = resultSet
    .pivot()
    .map(({ xValues, yValuesArray }) =>
      yValuesArray.map(([yValues, m]) => ({
        x: resultSet.axisValuesString(xValues, ", "),
        color: resultSet.axisValuesString(yValues, ", "),
        measure: m && Number.parseFloat(m)
      }))
    )
    .reduce((a, b) => a.concat(b));
  return data;
};

const barRender = ({ resultSet }) => (
  <Chart
    scale={{
      x: {
        tickCount: 8
      }
    }}
    height={400}
    data={stackedChartData(resultSet)}
    forceFit
  >
    <Axis name="x" />
    <Axis name="measure" />
    <Tooltip />
    <Geom type="intervalStack" position={`x*measure`} color="color" />
  </Chart>
);

const API_URL = "http://localhost:4000";
const cubejsApi = cubejs(
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE1NTc4MTQ0MTksImV4cCI6MTU1NzkwMDgxOX0.fjaO4W19gLVbAp9oi4WS3Lr5ulIjZhI62kA1Vwpk0tU",
  {
    apiUrl: API_URL + "/cubejs-api/v1"
  }
);

const renderChart = Component => ({ resultSet, error }) =>
  (resultSet && <Component resultSet={resultSet} />) ||
  (error && error.toString()) || <Spin />;

function App() {
  return (
    <div className="App">
      <Dashboard>
        <DashboardItem>
          <QueryRenderer
            query={{
              measures: ["Commits.count"],
              timeDimensions: [
                {
                  dimension: "Commits.commitAuthorWhen"
                }
              ],
              dimensions: ["Commits.committerName", "Commits.committerEmail"],
              filters: []
            }}
            cubejsApi={cubejsApi}
            render={renderChart(barRender)}
          />
        </DashboardItem>
      </Dashboard>
    </div>
  );
}

export default App;
