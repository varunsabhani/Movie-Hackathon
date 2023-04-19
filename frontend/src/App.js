import './App.css';
import Request from './Components/Request';
import Fund from './Components/Fund';
import Navbar from './Components/Navbar';
import Buy from './Components/Buy';
import MyMovies from './Components/MyMovies';
import { Route, Routes } from "react-router-dom";
import Home from './Components/Home';

function App() {
  return (
    <>
      <Navbar />
      <div className="container my-3">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/request' element={<Request />} />
          <Route path='/fund' element={<Fund />} />
          <Route path='/buy' element={<Buy />} />
          <Route path='/mymovies' element={<MyMovies />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
