import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from "./components/Header/Header"
import SimpleSidebar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import Stores from './components/Stores/Stores';
import Courses from './components/Courses/Courses';

import './App.scss';
import ProductsPage from './components/Products/Products';

function App() {

  return (
    <BrowserRouter>
        <Header />
        <SimpleSidebar/>
        <Box flex="1" ml="240px" p="3rem">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/products" element={<ProductsPage/>} />
          </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;