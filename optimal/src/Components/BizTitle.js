import React from "react";
import Container from "@mui/material/Container";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";

function BizTitle() {
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "green" }}>
      <Container maxWidth= "xl">
      <div>
        <Box sx={{display: "flex", justifyContent:"center"}}>
        <Typography variant="h5" sx={{pt:2, pb:2, color:"white"}}> Optimal Handyman Services</Typography>
        </Box>
      </div>
      <Box sx={{display: "flex", justifyContent:"center", ml:5 }}>
        <Box
          component="img"
          sx={{
            height: 233,
            width: 350,
            maxHeight: { xs: 233, md: 167 },
            maxWidth: { xs: 350, md: 250 },
          }}
          alt="The house from the offer."
          src="https://prtothetrade.com/wp-content/uploads/2019/11/Handyman_Services-997x500.png"
        />
        <Typography variant="body1" sx={{m:5, color:"white"}}>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Hac
          habitasse platea dictumst quisque sagittis purus sit amet. Tristique
          magna sit amet purus. Tincidunt id aliquet risus feugiat in ante metus
          dictum at.
        </Typography>
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
          <Paper elevation={3} sx={{mb:3}}>Call Teddy</Paper>
        </Box>
      </Box>
      </Container>
    </Container>
  );
}

export default BizTitle;
