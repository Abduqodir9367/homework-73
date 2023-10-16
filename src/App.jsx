import React from "react";
import Chart from "./Components/Chart";
import Dashboard from "./Components/Dashboard";
import Deposits from "./Components/Deposits";
import { ListItem } from "@mui/material";
import Login from "./Components/Login";
import Orders from "./Components/Orders";
import Title from "./Components/Title";

const App = () => {
  return (
    <div>
      <Chart />
      <Dashboard />
      <Deposits />
      <ListItem />
      <Login />
      <Orders />
      <Title />
    </div>
  );
};

export default App;
