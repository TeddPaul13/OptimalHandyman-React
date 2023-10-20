import * as React from "react";
import { styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import FolderIcon from "@mui/icons-material/Folder";
import DeleteIcon from "@mui/icons-material/Delete";
import Container from "@mui/material/Container";

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

export default function AreasOfService() {
  return (
    <Container maxWidth="xxl" sx={{ bgcolor: "#81dd0b" , justifyContent: "center" }}>
    <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center", flexWrap: "wrap"}}>
      <div>
        <Box sx={{ display: "flex", justifyContent: "center" }}>
          <Typography variant="h5" sx={{ pt: 2 }}>
            {" "}
            Areas We Service
          </Typography>
        </Box>
      </div>
      <Grid container spacing={2}>
        <Grid item xs={12} md={3}>
          <List>
            <ListItem>
              <ListItemText primary="Pendle Hill" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Baulkham Hills" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Seven Hills" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Castle Hill" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
            <ListItem>
              <ListItemText primary="Blacktown" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Box Hill" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Schofields" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Riverstone" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
            <ListItem>
              <ListItemText primary="Blacktown" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Box Hill" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Schofields" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Riverstone" />
            </ListItem>
          </List>
        </Grid>
        <Grid item xs={12} md={3}>
          <List>
            <ListItem>
              <ListItemText primary="Blacktown" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Box Hill" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Schofields" />
            </ListItem>
            <ListItem>
              <ListItemText primary="Riverstone" />
            </ListItem>
          </List>
        </Grid>
      </Grid>
    </Box>
    </Container>
  );
}
