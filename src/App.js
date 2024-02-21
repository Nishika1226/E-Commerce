import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; 
import  Navbar from './Components/Navbar/Navbar';
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Login from './Pages/Login';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/banner_mens.png'
import women_banner from './Components/Assets/banner_women.png';
import kid_banner from './Components/Assets/banner_kids.png';

function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar/>
     <Routes>
      <Route path='/' element={<Shop/>}></Route>
      <Route path='/men' element={<ShopCategory banner={men_banner} category="men"/>}></Route>
      <Route path='/women' element={<ShopCategory banner={women_banner}  category="women"/>}></Route>
      <Route path='/kids' element={<ShopCategory banner={kid_banner} category="kids"/>}></Route>
      <Route path='/login' element={<Login/>}></Route>
     </Routes>
     <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;

