import React from 'react';
import { Grid, Box, Typography } from '@mui/material'; // Import necessary components from Material-UI
import { red } from '@mui/material/colors';

function ListOfSuburbs() {
  // Array of 15 words
  const words = [
    'Apple', 'Banana', 'Orange', 'Grapes', 'Pineapple',
    'Watermelon', 'Strawberry', 'Blueberry', 'Mango', 'Peach',
    'Cherry', 'Pear', 'Kiwi', 'Lemon', 'Plum'
  ];

  // Function to render a column with 5 words
  const renderColumn = (columnWords) => (
    <Grid item xs={4}>
      {columnWords.map((word, index) => (
        <Typography key={index} variant="body1">{word}</Typography>
      ))}
    </Grid>
  );

  // Splitting the words into groups of 5 for each column
  const columns = [];
  for (let i = 0; i < words.length; i += 5) {
    columns.push(words.slice(i, i + 5));
  }

  return (
   
      <Grid item xs={12} md={6}>
        <Box sx={{}}>
          <Grid container spacing={3}>
            {/* Render three columns with 5 words each */}
            {columns.map((columnWords, index) => (
              <React.Fragment key={index}>
                {renderColumn(columnWords)}
              </React.Fragment>
            ))}
          </Grid>
          </Box>
      </Grid>
  );
}

export default ListOfSuburbs;