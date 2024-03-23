import React from "react";
import { useLocation } from "react-router-dom";
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
import DrawerAppBar from "./AppBarWithDrawer";

export default function QuoteForm() {

  const location = useLocation();
  const { state } = location;

  // Dynamically set the title based on the selected service
  let formTitle = "Get a Free Quote";
  if (state && state.title) {
    formTitle = `Get a Free Quote for ${state.title}`;
  }

  return (
    <>
    <DrawerAppBar/>
    <Container component="main" maxWidth="sm" sx={{ mt: 2 }}>
      <Typography component="h1" variant="h5">
        {formTitle} 
      </Typography>
      <Box sx={{ border: 2, p: 2, borderRadius: 2, borderColor: "green" }}>
        <CssBaseline />
        <div>
          <form validate>
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
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="suburb"
                  label="Postcode"
                  id="suburb"
                  autoComplete="suburb"
                  color="success"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <DatePickerValue  label= "When can it be done?"/>
              </Grid>
              <Grid item xs={12} sm={6}>
                <SelectService />
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
            </Grid>
            <Grid container justifyContent={"center"} mt={2}> 
              <Button
                type="submit"
                size="large"
                variant="contained"
                color="success"
              >
                Request Quote
              </Button>
            </Grid>
          </form>
        </div>
      </Box>
    </Container>
    </>
  );
}
