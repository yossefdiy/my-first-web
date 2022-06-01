import React from 'react';
import './App.css';
import Navbar from './navbar';
import Player from './player';
import { BrowserRouter , Routes ,Route, Link} from "react-router-dom";




function App(){


  return (
    <BrowserRouter>
        <Link to='/' element={<Player/>}>ertrt</Link>
        <Link to='/player' element={<Player/>}>ertrt</Link>


    <Routes>

      <Route path='/' element={<div><Player/></div>}/>
      <Route path='/navbar' element={<Navbar />}/>
      
    </Routes>
    <div className='app'>NO THEM
    <Navbar/>
  

    </div>
    </BrowserRouter>

  )}

export default App