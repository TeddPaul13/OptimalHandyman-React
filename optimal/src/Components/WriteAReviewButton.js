import * as React from 'react';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box'
import { useNavigate } from 'react-router-dom';

export default function WriteAReviewButton() {

  const navigate = useNavigate()

  const navigateToReviewForm = () => {
    navigate("/writereview")
  } 

  return (
    <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mt: 2, mb: 2, }}>
    <Button variant="contained" disableElevation onClick={navigateToReviewForm}>
      WRITE A REVIEW
    </Button>
    </Box>
  );
}
