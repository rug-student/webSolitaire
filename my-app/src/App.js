import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import Navbar from 'components/Navbar';
import Home from 'pages/index';
import About from 'pages/about';
import Blogs from 'pages/blogs';

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/report" element={<About />} />
        <Route path="/dashboard" element={<Blogs />} />
      </Routes>
    </Router>
);
}

export default App;
