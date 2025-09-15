import '../style/nav.css';
import {  Link } from 'react-router-dom'

export default function Nav(){

    return(
        <div>
            <ul>
                <li><Link to="/">Home</Link></li>
                 <li><Link to="/">Products</Link></li>
                  <li><Link to="/">About</Link></li>
                   <li><Link to="/">Contact</Link></li>
            </ul>
        </div>
    )

}