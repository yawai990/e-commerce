import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import useGlobalContext from './Context';

//components
import Navbar from './component/Navbar';
import Items from './component/Items';
import About from './component/About';
import Contact from './component/Contact';
import SingleItem from './component/Singleitem';
import Cart from './component/Cart';
import Order from './component/Order';

function App() {
  // console.log(useGlobalContext());
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Items />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/singleitem/:id' element={<SingleItem />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>
    </div>

  );
}

export default App;
