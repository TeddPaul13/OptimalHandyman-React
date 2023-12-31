import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import ReviewCard from "./CardForTestimonials";
import WriteAReviewButton from "./WriteAReviewButton";

function Testimonials() {
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "#81dd0b" }}>
      <Container maxWidth="xl">
        <Box
          sx={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}
        >
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="h5" sx={{ pt: 2 }}>
                {" "}
                Testimonials
              </Typography>
            </Box>
          </div>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            flexWrap: "wrap",
            mb: 2,
          }}
        >
          <div>
            <Box sx={{ display: "flex", justifyContent: "center" }}>
              <Typography variant="body1" sx={{ pt: 2 }}>
                {" "}
                Here is what previous customers say.
              </Typography>
            </Box>
          </div>
        </Box>
        <ReviewCard />
        <WriteAReviewButton />
      </Container>
    </Container>
  );
}

export default Testimonials;
