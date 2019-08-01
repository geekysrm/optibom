import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Layout } from "antd";
import "antd/dist/antd.css";
import "../assets/styles/App.css";

import Navbar from "./Navbar/Navbar";
import Landing from "./Landing/Landing";
import Build from "./Build/Build";

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  return (
    <Router>
      <Layout className='layout'>
        <Navbar />
        <Content className='layout-container' id='style-2'>
          <Route exact path='/' component={Landing} />
          <Route exact path='/build' component={Build} />
        </Content>
      </Layout>
    </Router>
  );
}

export default App;
