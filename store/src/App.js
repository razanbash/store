import logo from './logo.svg';
import './App.css';
import Nav from './componants/nav'; 
import Fotter from './componants/fotter'
import Home from './componants/home'
import News from './componants/news'
import DenseAppBar from './componants/test';
import  ResponsiveGrid from './componants/task'
import Counter from './componants/counter'
import reducer from './componants/todopp'
import operation from './componants/grid'
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Cards from './componants/grid'



import {BrowserRouter, Routes , Route} from 'react-router-dom';
import React from 'react';
import SubProduct from './componants/subProduct';
import { Provider } from './componants/provider';
import TodoApp from './componants/todopp';
import { Grid } from '@mui/material';


function App() {
 //pass value from on component to anthor component 
  return (
    <div>
    <Provider>
    <BrowserRouter>
    
    <Grid/>
       <Nav/>
  
       <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/News' Component={News}/>
           <Route path='/subProduct' Component={SubProduct}/>
           <Route path='/card'Component={Cards}/>
            <Route path='/test'Component={ResponsiveGrid}/>
       </Routes>
      
       <Fotter/>

    </BrowserRouter>

    </Provider>
    </div>
  );
}

export default App;
