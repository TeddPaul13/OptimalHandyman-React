import { Container, Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container maxWidth="xxl" disableGutters sx={{ bgcolor: "#81dd0b" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 }}>
        <Typography variant="body1">
          Optimal Handyman Services. by TedTech Solutions.
        </Typography>
        <Box>
        <Typography variant="body1">
          Optimal Handyman Services. by TedTech Solutions.
        </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
