import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import Login from './components/Login/Login';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
        <Header />
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;