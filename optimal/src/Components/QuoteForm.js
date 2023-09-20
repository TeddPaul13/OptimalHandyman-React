import React from "react";
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
import { spacing } from '@mui/system';

import Container from "@mui/material/Container";

import DatePickerValue from "./DatePicker";
import SelectService from "./SelectService";



export default function QuoteForm() {

  return (
    <Container component="main" maxWidth="sm" sx={{ mt: 2 }}>
      <Typography component="h1" variant="h5">
          Get a Free Quote
        </Typography>
        <Box sx={{ border: 2, p:2 , borderRadius: 2, borderColor: 'green'}}>
      <CssBaseline />
      <div >
        
        <form  validate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                autoComplete="fname"
                name="firstName"
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="Name"
                autoFocus
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              {/* Add code to Validate phone number if the user chooses to  */}
              <TextField
                variant="outlined"
                fullWidth
                id="phone"
                label="Phone No.(Optional)"
                type="number"
                name="phone"
                autoComplete="phone"
                color="success"
              />
            </Grid>
            
            <Grid item xs={12} sm={6}>
              <TextField
                variant="outlined"
                fullWidth
                name="address"
                label="Home Address (Optional)"
                id="address"
                autoComplete="address"
                color="success"
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <SelectService/>
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="task"
                label="Task Description"
                id="task"
                multiline
                rows={4}
                autoComplete="task"
                color="success"
              />
            </Grid>
            <Grid item xs={12} sm={6} >
             <DatePickerValue/>
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="I want to receive inspiration, marketing promotions and updates via email."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
           
          >
            Request Quote
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link href="/" variant="body2">
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
      </Box>
    </Container>
  );
}
