import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import "./Universe.css";

const Universe = () => {
  return (
    <Stack padding={'70px'} spacing={3} alignItems={"center"}>
        <Typography >Want to know more about our Technology Stack ? Checkout the <a style={{textDecoration:'none'}} href="https://zerodha.tech/">Zerodha.tech</a> blog</Typography>

      <Typography variant="h4">The Zerodha Universe</Typography>
      <Typography className="text-body-2">
        Extend your trading and investment experience even further with our
        partner platforms
      </Typography>
      <Box>
        <Stack direction={"row"}>
          <a href="https://smallcase.zerodha.com/">
            <img
              className="zerodhaPartnersLogo"
              src="images/smallcaseLogo.png"
              alt="Smallcase logo"
            />
          </a>
          <a href="https://www.streak.tech/home">
            <img
              className="zerodhaPartnersLogo"
              src="images/streakLogo.png"
              alt="streak logo"
            />
          </a>
          <a href="https://sensibull.com/">
            <img
              className="zerodhaPartnersLogo"
              src="images/sensibullLogo.svg"
              alt="sensibull logo"
            />
          </a>
        </Stack>
        <Stack direction={"row"}>
          <a href="https://www.zerodhafundhouse.com/">
            <img
              className="zerodhaPartnersLogo"
              src="images/zerodhaFundhouse.png"
              alt="zerodhaFundhouse logo"
            />
          </a>
          <a href="https://goldenpi.com/bond-ipo-online?utm_campaign=20854541744&utm_source=google&utm_medium=cpc&utm_content=684255246133&utm_term=&adgroupid=154500021337&gad_source=1&gad_campaignid=20854541744&gbraid=0AAAAACxQpA9tMt6wAMgDxvA0_7ckACbku&gclid=CjwKCAjwjffHBhBuEiwAKMb8pGWccgqlcbvaaOV-2ofuMuCDAKGl7x0IDVn4DQ1NUnRJQyGataGtdRoCZFMQAvD_BwE">
            <img
              className="zerodhaPartnersLogo"
              src="images/goldenpiLogo.png"
              alt="goldenpi logo"
            />
          </a>
          <a href="https://zerodha.com/z-connect/insurance-by-ditto/introducing-ditto-insurance-made-easy">
            <img
              className="zerodhaPartnersLogo"
              src="images/dittoLogo.png"
              alt="dito logo"
            />
          </a>
        </Stack>
      </Box>
      <Button variant="contained">
        <Link className="signupButton" to={"/signup"}>
          Signup Now
        </Link>
      </Button>
    </Stack>
  );
};

export default Universe;
