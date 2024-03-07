import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import { Button } from "@mui/material";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import backgroundImage from "../Assets/homeBackgroundImage.jpg";
import { useNavigate } from "react-router-dom";
import {createTheme} from "@mui/material/";
import {ThemeProvider} from "@mui/material/";

// const theme = createTheme({
//   palette: {
//     primary: {
//       main: "#81dd0b"
//     },
//   },
// });

function BizTitle() {

  const navigate = useNavigate();
  const navigateToGetQuoteForService = () => {
    navigate('/getquote') }

  return (
    
    <Container
      maxWidth="xxl"
      sx={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '400px'}}
        
    >
      <Box textAlign="center"> {/* Wrap Typography and Button inside Box */}
        <Typography variant="h3" align="center" sx={{ color: '#fff' }}>
          Relaible Handyman Services in Western Sydney.
        </Typography>
        <Button variant="contained" size="large" sx={{ marginTop: 2, backgroundColor: "#81dd0b", '&:hover': {
              backgroundColor: 'darkgreen'
            }, }} onClick={navigateToGetQuoteForService}>
          Get a Free Quote
        </Button>
      </Box>
    </Container>
    
  );
}

export default BizTitle;
