import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';



export default function Home() {
    const [perfume, setPerfume] = useState(null);
    const apiperfume = async()=>{
        var requist =   await fetch("https://dummyjson.com/products")
        var data = await requist.json()
        setPerfume(data)
        console.log(data.products)
    }
    useEffect(()=>{
        apiperfume()

    },[])               

    return (
        <div>
            <h1>This is Home page</h1>
            <p>Welcome to our store!</p>
            <button > toggle</button>
            {perfume && perfume.products.map((razanat)=>{
             
                    <div>
                            

<Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="data:image/png;base64,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"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  ;


                            
                           
                         

                    </div>
                
            })}



            

            {/* {/* Data base here wh have got here and there isa buttun to fetch it */}

        </div>
    );
}
