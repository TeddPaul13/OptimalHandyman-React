import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import WallMouniting from "../Assets/WallMounting.jpg"
import FurnitureAssembly from "../Assets/FurnitureAssembly.jpg"
import { useNavigate } from "react-router-dom";

export default function ServiceCard() {

  const navigate = useNavigate();
  const navigateToGetQuoteForService = () => {
    navigate('/getquote')
  }
  return (
    <Container component="main" maxWidth="xxl" sx={{ mt: 2 }} >
      <Typography component="h1" variant="h5" sx={{display: 'flex', justifyContent: 'center', mb:2}}>
        Servirces Provided
      </Typography>
      <Box sx={{  p:2, borderRadius: 2, display: 'flex', justifyContent: 'center' }} >
        <div>
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image= {FurnitureAssembly}
                  alt="Furniture Assembly"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Furniture Assembly
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image={FurnitureAssembly}
                  alt="Rubbish Removal"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Rubbish Removal
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea >
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image={WallMouniting}
                  alt="Wall Mounting"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    Wall Mounting
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica.
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          <Grid item xs={12} sm={3}>
            <Card sx={{ maxWidth: 300}}>
              <CardActionArea onClick={navigateToGetQuoteForService}>
                <CardMedia
                  component="img"
                  height="180"
                  image={WallMouniting}
                  alt="General Maintenance"
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    General Maintenance
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with
                    over 6,000 species, ranging across all continents except
                    Antarctica
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
          </Grid>
        </div>
      </Box>
    </Container>
  );
}
