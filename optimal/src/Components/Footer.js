import { Container, Box, Typography } from "@mui/material";
import React from "react";

function Footer() {
  return (
    <Container maxWidth="xxl" disableGutters sx={{ bgcolor: "#81dd0b" }}>
      <Box sx={{ display: "flex", justifyContent: "center", mt: 2 , flexDirection: "column", alignItems: "center"}}>
        <Typography variant="body1">
          TSS All Rights Reserved.
        </Typography>
        <Box>
        <Typography variant="body1">
         TSS All Rights Reserved.
        </Typography>
        </Box>
      </Box>
    </Container>
  );
}

export default Footer;
