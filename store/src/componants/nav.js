import '../style/nav.css';
import {  Link } from 'react-router-dom'
import React from 'react';


export default function Nav(){
  const [theme, setTheme] =React.useState('light')
  const handleTheme = () => {
      if (theme =='light'){
         setTheme('dark')
      }
      else{
            setTheme('light')
      }
  }
    return(
        <div className={theme}>
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/News">News</Link></li>
                <li><Link to="/about">About</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/card">card</Link></li>
                <li><Link to="/test">test</Link></li>

                <li>
                    <button onClick={handleTheme}>change theme</button>
                </li>
            </ul>
        </div>
    )

}