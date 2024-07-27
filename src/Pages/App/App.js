import React, { useState, useEffect } from 'react';
import { useRoutes, BrowserRouter } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from 'firebase/auth'; // Ensure you import these from firebase/auth
import Home from '../Home/Home';
import PlanesPro from '../PlanesPro/PlanesPro';
import Registro from '../Registro/Registro';
import Login from '../Login/login';
import appFirebase from '../../Componentes/Firebase/Firebase';
import NavbarExample from '../../Componentes/Navbar/Navbar';
import './App.css';

const AppRoutes = () => {
  let routes = useRoutes([
    { path: '/', element: <Home /> },
    { path: '/login', element: <Login /> },
    { path: '/registro', element: <Registro /> },
    { path: '/planespro', element: <PlanesPro /> },
  ]);

  return routes;
};

const App = () => {
  return (
    <BrowserRouter>
      <div style={{ backgroundColor: '#131313', minHeight: '100vh', paddingTop: '56px' }}> {/* Ajusta este valor según la altura del navbar */}
        <NavbarExample className='navbar' />
        <AppRoutes />
      </div>
    </BrowserRouter>
  );
};

export default App;