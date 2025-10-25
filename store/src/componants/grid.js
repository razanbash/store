import  Grid  from "@mui/material/Grid";
import  Paper  from "@mui/material/Paper";
import  Box  from "@mui/material/Box";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useReducer, useState } from "react";
import { useRef } from "react";
import { styled, useTheme } from '@mui/material/styles';






const Item = styled (Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));


const cardData=[]


function operation(state,action){
    switch(action.type){
        case'ADD_CARD':

        return[...state,{
            id:state.length+1,
            title:action.payload.title,
            description: action.payload.description,
            image:action.payload.image,
            price:action.payload.price
        }];
        case 'DELETE_CARD':
            return state.filter((item) => item.id !== action.payload);

        default:
            return state;
    }

}


  

export default function Cards (){
    const [state,dispatch] =useReducer(operation,cardData);
    const [title,setTitle]= useState('');
    const [description,setDescription]=useState('');
    const [image,setImage] =useState('')
    const [price,setPrice] =useState('')

    const {theme,toggleTheme} =useTheme();
const inputRef = useRef(null);
const inputNameRef = useRef (null);
const [name,setName]= useState('');
const handelFocus = () => {

  inputRef.current.focus();

  const handelFocus = () => {
    if (name === '') {
      inputNameRef.current.focus();
      alert('name is required');  
    }
  
    else if  (name.length <3){
      inputNameRef.current.focus();
      alert('name min 3 char');
    } 

  }
}
    return(
        <div>
            <h1>Cards Component</h1>
           
            <input
            ref={inputRef}
             type="text" placeholder="Title" onChange={(e)=>setTitle(e.target.value)}/>
            <input
            ref ={inputNameRef}
            type ="text" id='name' placeholder="search..." onChange={(e)=>setName(e.target.value)}/>
            <input
            
            type="text" placeholder="Descrption" onChange={(e)=>setDescription(e.target.value)}/>
            
            <input type="text" placeholder="Image URL" onChange={(e)=>setImage(e.target.value)}/>
            <input type="number" placeholder="price" onChange={(e)=>setPrice(e.target.value)}/>
            <button onClick={()=>dispatch({type:'ADD_CARD',payload:{title,description,image,price}})}>add card</button>
            <button onClick={handelFocus}>search</button>



  <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 8, md: 12 }}>
        {state.map((razan)=>
        <div key={razan.id}>
         <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={razan.image}
        title={razan.title}
        
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
            {razan.title}
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {razan.description}
        </Typography>
      </CardContent>
      <CardActions>
        <h1>{razan.price}</h1>
        <button onClick={()=>dispatch({type:'DELETE_CARD', payload:razan.id})}>delete card</button>

      </CardActions>
    </Card>
        
   
         
        
        </div>
    )
    }
      </Grid>
    </Box>
  

            



             
        </div>
    )
}