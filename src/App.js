import React from "react";
import './App.css';
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";

import Flow2 from './components/page-flow2/flow2';
import Flow1 from './components/page-flow1/flow1';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
        <Route path="/" element={<Flow2/>} exact />
          <Route path='/flow1' element={<Flow1/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
