import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Dashboard from "./components/Dashboard";
import Login from "./components/Login";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/task2/" element={<Login />} />
        <Route path="/task2/Dashboard" element={<Dashboard />} />
        {/* <Route path="/task2" element={<Task2 />} /> Ensure this exists */}
      </Routes>
    </Router>
  );
};

export default App;
