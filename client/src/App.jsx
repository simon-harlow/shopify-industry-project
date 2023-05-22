import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SimpleSidebar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import Stores from './components/Stores/Stores';

import './App.scss';


function App() {

  return (
    <BrowserRouter>
        <Header />
        <SimpleSidebar/>
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stores" element={<Stores />} />
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;