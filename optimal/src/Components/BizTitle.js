import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Banner from "../Assets/OptimalHandymanBanner.png";

function BizTitle() {
  return (
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: "#81dd0b"
        
      }}
    >
      <Container maxWidth="xxl">
        {/* <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            ml: 5,
          }}
        > */}
            <Paper elevation={0} sx={{ mb: 3, mt:2, width:'100%', height: '400px', backgroundImage: `url(${Banner})`, backgroundSize:'cover'}}>
              
            </Paper>
          
        {/* </Box> */}
      </Container>
    </Container>
  );
}

export default BizTitle;
