import React from "react";
import { useState } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { spacing } from "@mui/system";

import Container from "@mui/material/Container";
import AddBoxOutlinedIcon from "@mui/icons-material/AddBoxOutlined";
import IconButton from "@mui/material/IconButton";

import DatePickerValue from "./DatePicker";
import SelectService from "./SelectService";
import Navbar from "./Navbar";
import axios from "axios"
import DrawerAppBar from "./AppBarWithDrawer";

export default function ReviewForm() {

  const [formDetails, setFormDetails] = useState({
    firstname: "",
    lastname: "",
    suburb: "",
    dateofservice: "",
    serviceprovided: "",
    date: "",
  })

  const changeFormDetails = (event) =>{
    const {name, value} = event.target;
    setFormDetails((prevState) => ({...prevState, [name]: value }));
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    setFormDetails((prev) => ({...prev, [event.target.name]: event.target.value}))
    axios
    .post("http://localhost:3000/api/reviews/create", formDetails)
    .then((response) => {
      console.log(response)
    })
    .catch((err) =>{
      console.log(err)
    })
    
  }

  return (
    <>
    <DrawerAppBar/>
    <Container component="main" maxWidth="sm" sx={{ mt: 2 }}>
      <Typography component="h1" variant="h5">
        Leave a Review
      </Typography>
      <Box sx={{ border: 2, p: 2, borderRadius: 2, borderColor: "green" }}>
        <CssBaseline />
        <div>
          <form validate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstname"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstname"
                  label="Firstname"
                  autoFocus
                  color="success"
                  onChange={changeFormDetails}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  fullWidth
                  id="lastname"
                  label="Last Name"
                  name="lastname"
                  autoComplete="lname"
                  color="success"
                  onChange={changeFormDetails}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="suburb"
                  label="Suburb"
                  id="suburb"
                  autoComplete="suburb"
                  color="success"
                  onChange={changeFormDetails}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerValue label="When was it done" onDateChange={changeFormDetails} name ="dateofservice"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                {/* Prop passed here from SelectService component */}
                <SelectService onServiceSelectionChange={changeFormDetails} name="serviceprovided"/> 
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="review"
                  label="Write your Review"
                  id="task"
                  multiline
                  rows={4}
                  autoComplete="task"
                  color="success"
                  onChange={changeFormDetails}
                />
              </Grid>
            </Grid>
            {/*  SEND DATA TO DATABASE ONSUBMIT. */}
            <Grid container justifyContent={"center"} mt={2}>
              
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="success"
              >
                SUBMIT
              </Button>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
    </>
  );
}
