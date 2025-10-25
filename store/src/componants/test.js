import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: 'center',
  color: (theme.vars ?? theme).palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
}));

export default function ResponsiveGrid() {
  const images = [
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7dEBylzwOd17Oc5iWQF_ex5qXcmcg4mPXw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7dEBylzwOd17Oc5iWQF_ex5qXcmcg4mPXw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7dEBylzwOd17Oc5iWQF_ex5qXcmcg4mPXw&s',
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRY7dEBylzwOd17Oc5iWQF_ex5qXcmcg4mPXw&s',
  ];

  return (
    <Box sx={{ flexGrow: 1, p: 4 }}>
      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {images.map((img, index) => (
          <Grid key={index} item xs={2} sm={4} md={4}>
            <Item>
              <img
                src={img}
                alt={`Image ${index + 1}`}
                style={{
                  width: '100%',
                  height: '200px',
                  objectFit: 'cover',
                  borderRadius: '8px',
                }}
              />
            </Item>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
