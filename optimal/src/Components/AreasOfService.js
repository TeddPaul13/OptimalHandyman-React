import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import backgroundImage from "../Assets/homeBackgroundImage.jpg";
import AreaMap from "./AreaMap";
import ListOfSuburbs from "./ListOfSurburbs";
import useMediaQuery from "@mui/material/useMediaQuery";

function generate(element) {
  return [0, 1, 2].map((value) =>
    React.cloneElement(element, {
      key: value,
    })
  );
}

const Demo = styled("div")(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
}));
// TODO Include the map of the areas of service
export default function AreasOfService() {
  const theme = useTheme();

const isLargeScreen = useMediaQuery(theme.breakpoints.up("md"))

  return (
    <>
    <div>
          <Box sx={{ display: "flex", justifyContent: "center", mb:2}}>
            <Typography variant="h5" sx={{ pt: 2 }}>
              {" "}
              Areas We Service
            </Typography>
          </Box>
        </div>
    <Container
      maxWidth="xxl"
      sx={{
        bgcolor: "#E1F0DA",
        // backgroundImage: `url(${backgroundImage})`,
        // backgroundSize: "cover",
        // backgroundRepeat: "no-repeat",
        // backgroundPosition: "center",
        justifyContent: "center",
      }}
    >
      <Box
        sx={{
          flexGrow: 1,
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
        }}
      >
        
      </Box>
      <Grid container spacing={2} alignItems="center">
        {/* <Box sx={{height: 200, border: 2, width: '100%', [theme.breakpoints.up('md')]: {width:'50%'}}}> */}
        <Grid item xs={12} md={6}>
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <ListOfSuburbs />
          </Box>
        </Grid>
        {isLargeScreen && (<Grid item xs={12} md={6} className="noshow">
          <Box sx={{ width: '100%', height: 450, mb: 2, mt: 2 }}>
            <AreaMap />
          </Box>
        </Grid>
)}
      </Grid>
    </Container>
    </>
  );
}
