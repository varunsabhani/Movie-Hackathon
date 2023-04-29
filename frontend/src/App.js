import './App.css';
import React, { useState } from 'react';
import Request from './Components/Request';
import Fund from './Components/Fund';
import Navbar from './Components/Navbar';
import Buy from './Components/Buy';
import MyMovies from './Components/MyMovies';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';
import Alert from './Components/Alert';

function App() {

  
  const [alert, setAlert] = useState(null);
  const showAlert = (message,type) => {
    setAlert({
      msg : message,
      type : type
    })
    setTimeout(() => {
      setAlert(null);
    }, 3000);
  }

  return (
    <>
    <div className='bg'>
      <Navbar />
      <Alert alert={alert} />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request />} />
          <Route path='/fund' element={<Fund showAlert={showAlert}/>} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/mymovies' element={<MyMovies />} />
        </Routes>
      </div>
    </div>
    </>
  );
}

export default App;
