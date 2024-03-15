import {
  Container,
  Box,
  Typography,
  Button,
  Divider,
  Grid,
} from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

const thisYear = new Date();
const yearToDisplay = thisYear.getFullYear();

function Footer() {
  const navigate = useNavigate();
  const navigateToGetQuoteForService = () => {
    navigate("/getquote");
  };

  return (
    <Container maxWidth="xxl" disableGutters sx={{ bgcolor: "white" }}>
      <Grid container>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Contacts
            </Typography>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">optimalhandyservices@gmail.com</Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">0412567362</Typography>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Typography variant="body">Riverstone, NSW</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 2,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6" sx={{ mb: 2 }}>
              Our Services
            </Typography>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">Furniture Assembly</Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">Rubbish Removal</Typography>
            </div>
            <div style={{ marginBottom: 16 }}>
              <Typography variant="body">Wall Mounting</Typography>
            </div>
            <div style={{ marginBottom: 8 }}>
              <Typography variant="body">General Maintenance</Typography>
            </div>
          </Box>
        </Grid>
        <Grid item xs={12} sm={3} md={4}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 9,
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              Let's get the job done for you.
            </Typography>
            <Button
              variant="outlined"
              size="large"
              onClick={navigateToGetQuoteForService}
              sx={{
                marginTop: 2,
                color: "#81dd0b",
                "&:hover": {
                  backgroundColor: "#81dd0b",
                  color: "white",
                },
              }}
            >
              Get a Free Quote Today
            </Button>
          </Box>
        </Grid>
      </Grid>
      <Divider variant="middle" sx={{ mt: 2, mb: 2 }}></Divider>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          mt: 2,
          mb: 2,
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="body2">
          ABN 94946247183 Copyright {yearToDisplay} Optimal Handyman Services
        </Typography>
      </Box>
    </Container>
  );
}

export default Footer;
