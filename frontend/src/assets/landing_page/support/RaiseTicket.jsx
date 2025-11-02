import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import "./RaiseTicket.css";

const RaiseTicket = () => {
  return (
    <Container sx={{margin: "50px 0px"}}>
      <Typography variant="h5">
        To create a ticket, select relevant topic
      </Typography>

      <Grid marginTop={"40px"} container>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-circle-plus"></i> Account Opening
            </Typography>
            <ul>
              <li>Online Account Opening</li>
              <li>Offline Account Opening</li>
              <li>
                Company, Partnership and HUF Account <br />
                Opening
              </li>
              <li>NRI Account Opening</li>
              <li>Charges at Zerodha</li>
              <li>Zerodha IDFC First Bank 3-in-1 Account</li>
              <li>Getting Started</li>
            </ul>
          </Stack>
        </Grid>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-user"></i> Your Zerodha Account
            </Typography>
            <ul>
              <li>Login Credentials</li>
              <li>Account Modifiaction and Segment Addition</li>
              <li>DP ID and bank details</li>
              <li>Your Profile</li>
              <li>Charges at Zerodha</li>
              <li>Transfer and conversion of shares</li>
            </ul>
          </Stack>
        </Grid>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-chart-simple"></i> Kite
            </Typography>
            <ul>
              <li>Margin/Leverage, Product and order types</li>
              <li>Kite Web and Mobile</li>
              <li>Trading FAQs</li>
              <li>Corporate Actions</li>
              <li>Sentinel</li>
              <li>Kite API</li>
              <li>Pi and other platforms</li>
              <li>Stockreports+</li>
              <li>GTT</li>
            </ul>
          </Stack>
        </Grid>
      </Grid>

      <Grid marginTop={"50px"} container>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-credit-card"></i> Funds
            </Typography>
            <ul>
              <li>Add money </li>
              <li>Withdraw Money</li>
              <li>Add bank accounts</li>
              <li>eMandates</li>
            </ul>
          </Stack>
        </Grid>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-circle-notch"></i> Console
            </Typography>
            <ul>
              <li>Portfolio</li>
              <li>Corporate Actions</li>
              <li>Funds statement</li>
              <li>Report</li>
              <li>Profile</li>
              <li>Segments</li>
            </ul>
          </Stack>
        </Grid>
        <Grid className="ticket-topics" size={4}>
          <Stack spacing={3}>
            <Typography>
              <i class="fa-solid fa-coins"></i> Coin
            </Typography>
            <ul>
              <li>Mutual funds</li>
              <li>National Pension Scheme (NPS)</li>
              <li>Fixed Deposit (FD)</li>
              <li>Features on coin</li>
              <li>Payment and Orders</li>
            </ul>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default RaiseTicket;
