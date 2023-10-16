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
        backgroundImage: `url(${Banner})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <Container maxWidth="xl">
        <Box
          sx={{
            display: "flex",
            justifyContent: "right",
            alignItems: "flex-end",
            ml: 5,
          }}
        >
          <Box
            sx={{
              display: "flex",
              "& > :not(style)": {
                mt: 2,
                mb: 3,
                width: 300,
                height: 300,
              },
            }}
          >
            <Paper elevation={3} sx={{ mb: 3 }}>
              Call Teddy
            </Paper>
          </Box>
        </Box>
      </Container>
    </Container>
  );
}

export default BizTitle;
