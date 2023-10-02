import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function Testimonials() {
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "green" }}>
        <Container maxWidth= "xl">
      <Box sx={{ display: "flex", justifyContent: "center", ml: 5, flexWrap: "wrap" }}>
        <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ pt: 2, color: "white" }}>
            {" "}
            Testimonials
          </Typography>
        </Box>
        </div>
        
        <Typography variant="body1" sx={{m:2, color:"white"}}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
          habitasse platea dictumst quisque sagittis purus sit amet. Tristique
          magna sit amet purus. Tincidunt id aliquet risus feugiat in ante metus
          dictum at.
        </Typography>
      </Box>
      </Container>
    </Container>
  );
}

export default Testimonials;
