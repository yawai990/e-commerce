import React, { useState } from 'react';
import { Routes, Route } from "react-router-dom";

//components
import Navbar from './component/Navbar';
import Items from './component/Items';
import About from './component/About';
import Contact from './component/Contact';
import SingleItem from './component/Singleitem';
import Cart from './component/Cart';
import Order from './component/Order';
import { Sidebar } from './component/Sidebar/Sidebar';
import { Links, socialLinks, CatergoryButton } from './constants/NavbarLink';
import { images } from './constants/images';

function App() {

  const [sidebar, setSidebar] = useState(false)

  return (
    <div className="App">
      <Navbar setSidebar={setSidebar} />
      <Routes>
        <Route path='/' element={<Items CatergoryButton={CatergoryButton} />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact social={socialLinks} />} />
        <Route path='/singleitem/:id' element={<SingleItem />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/order' element={<Order />} />
      </Routes>

      {sidebar && <Sidebar navbarLink={Links}
        social={socialLinks}
        images={images}
        setSidebar={setSidebar} />}

    </div>

  );
}

export default App;
