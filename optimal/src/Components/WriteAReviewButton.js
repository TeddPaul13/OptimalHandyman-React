import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'

export default function WriteAReviewButton() {
  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 2}}>
    <Button variant="contained" disableElevation>
      WRITE A REVIEW
    </Button>
    </Box>
  );
}
