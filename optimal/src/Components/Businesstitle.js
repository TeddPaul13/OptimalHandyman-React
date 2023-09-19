import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const theme = createTheme();

theme.typography.h1 = {
  fontSize: "24px",
  "@media (min-width:600px)": {
    fontSize: "32px",
  },
  [theme.breakpoints.up("md")]: {
    fontSize: "60px",
  },
};

function Businesstitle() {
  return (
    <>
      {/* CssBaseline Resets the brower's css */}
      <CssBaseline />
      <Container maxWidth="xxl" disableGutters sx={{bgcolor:'green', display:{xs:'flex'}, justifyContent:'center'}}>
      <ThemeProvider theme={theme}>
            <Typography variant="h1" sx={{ color: "white", mt: 2 }}>
              Optimal Handyman Service
            </Typography>
          </ThemeProvider>
        
      {/* <Box
          sx={{
            bgcolor: "green",
            height: "30vh",
            width: "100%",
            display: { xs: "flex" },
            justifyContent: "center",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          </Box> */}
          
      </Container>
    </>
  );
}

export default Businesstitle;
