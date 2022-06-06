import React from 'react';
import './App.css';
import Navbar from './navbar';
import Player from './player';
import { BrowserRouter , Routes ,Route, Link} from "react-router-dom";




function App(){


  return (
    <BrowserRouter>
        <img src={ require("./img/img1.png" ) }alt="" />

      <button>  <Link to='/player' element={<Player/>}>ertrt</Link></button>
      <button>   <Link to='/' element={<p>no them</p>}>song</Link></button>


    <Routes>

      <Route path='/' element={<div><Player/></div>}/>
      <Route path='/navbar' element={<div><Navbar /></div>}/>
      
    </Routes>
  <Navbar/>
    </BrowserRouter>

  )}

export default App