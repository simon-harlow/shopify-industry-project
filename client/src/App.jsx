import React from 'react';
import { BrowserRouter, Routes, Route, Navigate} from 'react-router-dom';
import { Box } from '@chakra-ui/react';

import Header from "./components/Header/Header"
import SimpleSidebar from './components/SideBar/SideBar';
import Login from './components/Login/Login';
import Courses from './components/Courses/Courses';
import CourseForm from './components/CoursesForm/CourseForm';
import ProductsPage from './components/Products/Products';
import CoursesList from './components/CoursesList/CoursesList';
import EditCourse from './components/EditCourse/EditCourse';
import NewModule from './components/NewModule/NewModule';
import Stores from './components/Stores/Stores'
import './App.scss';



function App() {

  return (
    <BrowserRouter>
        <Header />
        <SimpleSidebar/>
        <Box flex="1" ml="240px" p="3rem" bg="$InputBackground" height="1080px">
          <Routes>
            <Route path="/" element={<Navigate to="/login" />} />
            <Route path="/login" element={<Login />} />
            <Route path="/stores" element={<Stores />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/courses/new" element={<CourseForm />} />
            <Route exact path="/courses" element={<Courses />} />
            <Route path="/listcourses" element={<CoursesList />} />
            <Route path="/editCourse" element={<EditCourse />} />
            <Route path="/products" element={<ProductsPage/>} />
            <Route path="/newModule" element={<NewModule/>} />
          </Routes>
        </Box>
    </BrowserRouter>
  );
}

export default App;