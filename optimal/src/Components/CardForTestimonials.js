import React, {useEffect, useState} from "react";
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
import axios from "axios";


export default function CardForTestimonials() {

  const [customerReviews, setCustomerReviews] = useState([])
  const [displayedReviews, setDisplayedReviews] = useState([]);


  useEffect (() =>{
    axios.get("http://localhost:3000/api/reviews/getreview")
    .then((response) =>{
      const testimonials = response.data.data
      setCustomerReviews(testimonials);
      setDisplayedReviews(getRandomReviews(testimonials))
      
    })
  }, []);

  useEffect (() =>{
    const intervalId = setInterval(() =>{
      setDisplayedReviews(getRandomReviews(customerReviews));
    }, 3000);

    return () => clearInterval(intervalId)
  }, [customerReviews])
  
const getRandomReviews = (reviewsArray) => {
  const randomIndices = [];
  while (randomIndices.length < 3){
    const randomIndex = Math.floor(Math.random() * reviewsArray.length);
    if(!randomIndices.includes(randomIndex)){
      randomIndices.push(randomIndex);
    }
  }
  return randomIndices.map(index => reviewsArray[index])
}
  return (
    <>
      <Grid container spacing={{ xs: 2, md: 3 }} justifyContent={"center"}>
        {displayedReviews.map((review, index) => (
          <Grid item xs={12} sm={3} md={4} key={index}>
            <Box sx={{display: 'flex', justifyContent: 'center'}}>
            <Card sx={{ maxWidth: 345, height: "100%" }}>
              <CardHeader
                avatar={
                  // Set the Avatar to be the first letter of customer name
                  <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                    {review.firstname?.[0]?.toUpperCase()}
                  </Avatar>
                }
                title={`${review.firstname} ${review.lastname}`}
                subheader={review.suburb}
              />
              <CardContent>
                <Typography variant="subtitle1" color="text.secondary">
                  {review.serviceprovided.replace(/\b\w/g, (char) => char.toUpperCase())}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {" "}
                  {review.review}
                </Typography>
              </CardContent>
              {/* <CardActions disableSpacing>
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
                <StarOutlinedIcon />
              </CardActions> */}
            </Card>
            </Box>
          </Grid>
        ))}
      </Grid>
    </>
  );
}
