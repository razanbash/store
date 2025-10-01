// import subProduct lis as props
// call props in function and then use props.subProduct to access the list
// call the sucPord directliy

import React from "react"
import '../style/subProduct.css'
import { useLocation } from "react-router-dom";
export default function SubProducts(){
    // get the subproduct from <Link to='/subProduct' state={item}>see more</Link>
     
const location = useLocation();
const [subProductFromMain,setSubProductFromMin] = React.useState(location.state)
console.log(subProductFromMain)

const [counter,setCounter] =React.useState(2)

const increment =()=>{
    if (counter < subProductFromMain.MoreImages.length -1){
        setCounter(counter +1)
    }else{
        setCounter(0)
    }
}

const decrment =()=>{
    if (counter > 0){
        setCounter(counter -1)
    }else{
        setCounter(subProductFromMain.MoreImages.length -1)
    }
}



// display news details

    return(
        <div className="detils">
            <h2>All data for news</h2>
            <h3>{subProductFromMain.name}</h3>
            <button className="btn" onClick={decrment}>before</button>
            <img id="photo" src={subProductFromMain.MoreImages[counter]} alt={subProductFromMain.name}/>
            <button className="btn" onClick={increment}> After</button>
            <p>descrption: {subProductFromMain.discrption}</p>
            
        </div>
    )
}