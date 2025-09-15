import logo from './logo.svg';
import './App.css';
import Nav from './componants/nav'; 
import Fotter from './componants/fotter'
import Home from './componants/home'
import Products from './componants/products';
import {BrowserRouter, Routes , Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
       <Nav/>
       <Routes>
           <Route path='/' Component={Home}/>
           <Route path='/Products' Component={Products}/>
       </Routes>


       <Fotter/>

    </BrowserRouter>
  );
}

export default App;
