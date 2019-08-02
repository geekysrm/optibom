import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/App.css";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Build from "./Build/Build";
import Result from "./Results/Result";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Router>
      <Layout className="layout">
        <Navbar />
        <Content className="layout-container style-2">
          <Route exact path="/" component={Landing} />
          <Route exact path="/build" component={Build} />
          <Route exact path="/result" component={Result} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
