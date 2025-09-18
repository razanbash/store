import React  from "react";
import '../style/products.css';


export default function Products(){

    const [showImage,setShowImage] = React.useState('no')
    const [theme,setTheme] = React.useState('light')
  
    const handleClike = () => {
     if(showImage == 'no'){
        setShowImage('yes')
     }else{
        setShowImage('no')
     }
    }

    const toggleTheme = () => {
       if (theme === 'light'){
        setTheme('dark')
       }else{
        setTheme('light')
       }
    }

    let themeButtonText;
    if (theme ==='light') {
        themeButtonText = 'change to black'
    } else{ themeButtonText = 'change to light'

    }
    return(
        <div className={theme}>
            <h1>This is Products page</h1>
            <p>cheak out amazing Products</p>
            <button onClick={toggleTheme}>themeButtonText</button>
            <button onClick={handleClike}>show image</button>
            {showImage == 'yes' &&
            <img src="https://png.pngtree.com/png-vector/20241015/ourmid/pngtree-coffee-png-image_14096769.png"></img> 
            }
        </div>
    )
}