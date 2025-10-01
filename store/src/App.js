import logo from './logo.svg';
import './App.css';
import Nav from './componants/nav'; 
import Fotter from './componants/fotter'
import Home from './componants/home'
import News from './componants/news';

import {BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import SubProduct from './componants/subProduct';

function App() {
 //pass value from on component to anthor component 
  return (
    <BrowserRouter>

       <Nav/>

       <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/News' Component={News}/>
           <Route path='/subProduct' Component={SubProduct}/>
       </Routes>
       
       <Fotter/>

    </BrowserRouter>
  );
}

export default App;
