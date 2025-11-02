import "./Awards.css";
import React from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";

const Awards = () => {
  return (
    <Box sx={{marginBottom:'100px'}}>
      <Grid sx={{marginTop:'20px',marginBottom:'20px'}} container>
        <Grid size={6}>
          <Container className="awards-container">
            <img src="images/largestBroker.svg" alt="Awards Image" />
          </Container>
        </Grid>
        <Grid size={6}>
          <Container className="awards-container">
            <Stack spacing={1}>
              <Typography variant="h5" sx={{ display: "block" }}>
                Largest Stockbroker in India
              </Typography>
              <Typography>
                2+ million Zerodha Clients contribute to over 15% of all retail
                order in India daily by trading and investing in:
              </Typography>
              <ul>
                <Grid className="awards-list-options" container>
                  <Grid size={6}>
                    <li>Futures and Options</li>
                    <li>Commodities Derivatives</li>
                    <li>Currency Derivatives</li>
                  </Grid>
                  <Grid size={6}>
                    <li>Stocks and IPOs</li>
                    <li>Direct Mutual Funds</li>
                    <li>Bonds and Governance</li>
                  </Grid>
                </Grid>
              </ul>
              <Container className="press-container">
                <img src="/images/pressLogos.png" alt="pressLogos" />
              </Container>
            </Stack>
          </Container>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Awards;
