import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import "../assets/styles/App.css";

import Sidebar from "./sidebar/Sidebar";
import Landing from "./landing/Landing";

function App() {
  return (
    <Router>
      <div className='App'>
        <Sidebar />
        <Route exact path='/' component={Landing} />
        <Route exact path='/:selection' component={Landing} />
      </div>
    </Router>
  );
}

export default App;
