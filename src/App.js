import React from 'react';
import {BrowserRouter , Routes , Route} from 'react-router-dom';
import Home from './component/Home';
import About from './component/About';
import NavBar from './component/NavBar';
import Notfound from './component/Notfound';

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar/>
      <Routes>
      <Route path="*" element={<Notfound/>}/>
        <Route path="/" element={<Home/>}/> 
        <Route path="/about" element={<About/>}/>
        
      </Routes>
      
      </BrowserRouter>
    </div>
  );
}

export default App;
