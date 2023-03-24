import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//* Paths
import Home from './Pages/Home.jsx';
import Login from './Pages/Login.jsx';
import Signup from './Pages/Signup.jsx';

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
