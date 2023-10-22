import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import RecipeReviewCard from "./CardForTestimonials";

function Testimonials() {
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "white"}}>
        <Container maxWidth= "xl">
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            {" "}
            Testimonials
          </Typography>
        </Box>
        </div>
      </Box>
      <Box sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap", mb: 2}}>
        <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="body1" sx={{ pt: 2 }}>
            {" "}
            Here is what previous customers say.
          </Typography>
        </Box>
        </div>
      </Box>
      <RecipeReviewCard/>
      </Container>
    </Container>
  );
}

export default Testimonials;
