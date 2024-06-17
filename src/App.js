import './App.css';
import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Navbar from './navbar/navbar'
import Charts from './statistiques/charts/Charts';
import PageNotFound from './404/pageNotFound';
import Users from './Users/Users';
import ProtectedRoute from './Authentification/ProtectedRoute';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Login />}></Route>
        <Route path='/' element={<Navbar />}>
          <Route path='/Dashboard' element={ <ProtectedRoute><Dashboard /></ProtectedRoute>} />
          <Route path='/Charts' element={<ProtectedRoute><Charts /></ProtectedRoute> } />
          <Route path='/Users' element={<Users />} />
        </Route>
        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
