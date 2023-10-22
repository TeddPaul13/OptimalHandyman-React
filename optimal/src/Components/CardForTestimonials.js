import * as React from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import StarOutlinedIcon from "@mui/icons-material/StarOutlined";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? "rotate(0deg)" : "rotate(180deg)",
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
}));

export default function RecipeReviewCard() {
  const customerReviews = [
    {
      name: "Teddy Paul",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      name: "Teddy Paul",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
    {
      name: "Teddy Paul",
      suburb: "Blacktown",
      service: "Lawn Mowing",
      review:
        "Add 1 cup of frozen peas along with the mussels,if you like. This impressive paella is a perfect party dish and a fun meal to cook together with your guests. Add 1 cup of frozen peas along with the mussels, if you like.",
    },
  ];

  return (
    <>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
    
      >
        {customerReviews.map((reviewsToDisplay, k) => (
          <Grid item xs={12} sm={3} md={4} key={k}>
          
              <Card sx={{ maxWidth: 345 }} >
                <CardHeader
                  avatar={
                    // Set the Avatar to be the first letter of customer name
                    <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                      R
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
            
          </Grid>
        ))}
      </Grid>
    </>
  );
}
