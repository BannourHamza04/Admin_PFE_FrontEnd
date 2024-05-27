import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Dashboard from './Dashboard/Dashboard';
import Login from './Login/Login';
import Navbar from './navbar/navbar'
import Charts from './statistiques/charts/charts';
import PageNotFound from './404/pageNotFound';
import Users from './Users/Users';
function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route index element={<Login />}></Route>
      <Route path='/' element={<Navbar />}>
        <Route path='/Dashboard' element={<Dashboard />} />
        <Route path='/Charts' element={<Charts />} />
        <Route path='/Users' element={<Users />} />
      </Route>
      <Route path='*' element={<PageNotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
