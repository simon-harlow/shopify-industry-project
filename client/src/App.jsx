import React from 'react';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import SimpleSidebar from './components/SideBar/SideBar';

import './App.scss';

function App() {

  return (
    <BrowserRouter>
        <Header />
        <SimpleSidebar/>
          <Routes>
            {/* <Route /> */}
          </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;