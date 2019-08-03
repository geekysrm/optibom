import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
// import { Layout } from "antd";
import "../assets/styles/App.css";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Build from "./Build/Build";
import Result from "./Results/Result";
import Graphs from "./Graphs/Graphs";

function App() {
  return (
    <Router>
      <Navbar />
      <div className="container-fluid layout-container style-2 h-100">
        <Route exact path="/" component={Landing} />
        <Route exact path="/build" component={Build} />
        <Route exact path="/result" component={Result} />
        <Route exact path="/graphs" component={Graphs} />
      </div>
    </Router>
  );
}

export default App;
