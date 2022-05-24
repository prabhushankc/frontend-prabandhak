import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Container } from '@material-ui/core';
import Auth from './Component/Admin/Auth/Auth';
import UserDetail from './Component/Client/UserDetail/userProfile';
import HomePageForm from './Component/Admin/Admin.js';
const App = () => {
  return (
    <BrowserRouter>
      <React.StrictMode>
        <Container maxWidth='xl' style={{
          margin: '0px',
          padding: '0px',
          overflow: 'hidden',
        }} >

          <Routes>
            <Route path="/home" element={<HomePageForm />} />
            <Route path="/" exact element={<Navigate to="/home" />} />
            <Route path="/auth" exact element={<Auth />} />
            <Route path="/profile" element={<UserDetail />} />
          </Routes>
        </Container>
      </React.StrictMode>
    </BrowserRouter>
  )
};

export default App;