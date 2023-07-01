import React from 'react';
import { BrowserRouter, Outlet, Route, Routes } from 'react-router-dom';
 
import './App.css';
import Details from './components/Details';
import MenuBar from './components/MenuBar';
import SubmitForm from './components/SubmitForm';

function App() {
  return (
     <>
 

      <BrowserRouter>
      <MenuBar/>
      <Routes>
      <Route path="/" element={<SubmitForm/>}/>
      <Route path="/submitform" element={<SubmitForm/>}/>
      <Route path="/details" element={<Details/>}/>

      </Routes>
      <Outlet />
      </BrowserRouter>
     </>
  );
}

export default App;
