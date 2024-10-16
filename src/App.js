import './App.css';
import { Fragment } from 'react';
import Home from './components/Home';
import About from './components/About';
import Service from './components/Service';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';

function App() {
  return (
    <Fragment>
      <BrowserRouter>  
        <NavBar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/service" element={<Service />} />
        </Routes>
      </BrowserRouter>
    </Fragment>
  );
}

export default App;
