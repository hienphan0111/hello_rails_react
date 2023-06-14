import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Greating from './Greating';

const App = () => (
  <Router>
    <Routes>
      <Route exact path="/" element={<Home />} />
      <Route exact path="/message" element={<Greating />} />
    </Routes>
  </Router>
);

export default App;
