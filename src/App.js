
import { useState } from 'react';
import Navbar from './components/Navbar';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import DashBoard from './pages/DashBoard';
import Home from './pages/Home';
import Login from './pages/Login';
import SignUp from './pages/SignUp';
import PrivateRoute from './components/PrivateRoute';

function App() {

  const[isLoggedIn, setIsLoggedIn] = useState(false);


  return (
    <div className="App">
      
      <Navbar isLoggedIn={isLoggedIn} setIsLoggedIn={setIsLoggedIn}></Navbar>



      <Routes>

        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn}></Login>}></Route>
        <Route path="/signup" element={<SignUp setIsLoggedIn={setIsLoggedIn}></SignUp>}></Route>
        <Route path="/dashboard" element={
          <PrivateRoute>
            <DashBoard></DashBoard>
          </PrivateRoute>
        }></Route>

      </Routes>

    </div>
  );
}

export default App;
