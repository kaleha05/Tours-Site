import React from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Layout from './pages/Layout';
import Destinations from './pages/Destinations';
import Gallery from './pages/Gallery';
import Contacts from './pages/Contacts';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='about' element={<About />} />
          <Route path='destinations' element={<Destinations />} />
          <Route path='Contacts' element={<Contacts />} />
          <Route path='Gallery' element={<Gallery />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
