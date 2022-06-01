import React from 'react'
import { BrowserRouter as Router, Routes ,Route, BrowserRouter, Link} from "react-router-dom";
import Player from './player'


const Navbar = () => {

  return (
<BrowserRouter>
   <div className='nev'>
     <head>
     <Routes>
      
    <Route path='/' element={<Player />}></Route>
    <Route path='/player' element={<Player />}></Route>
    
    </Routes>

    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="styles.css" />
    <title>responsive navbar</title>
  </head>
  
    <header>
      <nav class="nav">
    
      <nav
        style={{
          borderBottom: "solid 1px",
          paddingBottom: "1rem",
        }}
      >
       
      </nav>
        
        <div class="hamburger">
          <span class="line"></span>
          <span class="line"></span>
          <span class="line"></span>
        </div>
       
        <div class="nav__link hide">
          <button>home</button>
          <button>atwork</button>
          <button>songs</button>
          <button>T-shirts</button>
        
        </div>
       
      </nav>
    </header>
   </div>
   </BrowserRouter>
   
)}

export default Navbar