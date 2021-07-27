import React, { useState, useEffect } from "react";
import BarChart from "./Components/BarChart/BarChart";
import LineChart from "./Components/LineChart/LineChart";
import * as d3 from "d3";
import "./App.css";

function App() {
  // const [data, setData] = useState([]);
  // const [loading, setLoading] = useState(true);

  // useEffect(() => {
  //   d3.csv("/chart-data.csv").then((d) => {
  //     console.log(d);
  //     setData(d);
  //     setLoading(false);
  //   });
  //   return () => undefined;
  // }, []);

  return (
    <div className="App">
      {/* <header className="App-header">
        {loading && <div>loading</div>}
        {!loading && <BarChart data={data} />}
      </header> */}
      <LineChart />
    </div>
  );
}

export default App;
