import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Home from 'features/homePage';
import Solitaire from 'features/solitaire'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/solitaire" element={<Solitaire />} />
      </Routes>
    </Router>
);
}

export default App;
