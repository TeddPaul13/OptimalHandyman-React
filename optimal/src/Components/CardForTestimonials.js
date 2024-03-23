import * as React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import CardHeader from "@mui/material/CardHeader";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";


export default function CardForTestimonials() {
  const customerReviews = [
    {
      name: "Teddy Paul",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      name: "Paul Teddy",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      name: "teddy Paul",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  ];

  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent={"center"}>
        {customerReviews.map((reviewsToDisplay, k) => (
          <Grid item xs={12} sm={3} md={4} key={k}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345 }}>
              <CardHeader
                avatar={
                  // Set the Avatar to be the first letter of customer name
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {reviewsToDisplay.name[0].toUpperCase()}
                  </Avatar>
                }
                title={reviewsToDisplay.name}
                subheader={reviewsToDisplay.suburb}
              />
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                  {reviewsToDisplay.service}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {reviewsToDisplay.review}
                </Typography>
              </CardContent>
              <CardActions disableSpacing>
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
              </CardActions>
            </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
