import Box from "@mui/material/Box";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import "./Hero.css";

const Hero = () => {
  return (
    <Stack
      margin={"40px 0px 70px 0px"}
      padding={"70px"}
      spacing={3}
      alignItems="center"
      justifyContent="center"
      textAlign="center"
    >
      <Typography variant="h4">Pricing</Typography>
      <Typography className="text-body-2">
        Free equity investments and flat <CurrencyRupeeIcon fontSize="small" />
        20 intraday and F&O orders
      </Typography>
      <Box>
        <Stack direction={"row"}>
          <Stack alignItems={"center"}>
            <img
              className="pricing-images"
              src="images/pricing0.svg"
              alt="pricing0"
            />
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              Free Equity Delivery
            </Typography>
            <Typography className="text-body-2">
              All equity delivery investments (NSE,BSE) <br />
              are absolutely free - <CurrencyRupeeIcon fontSize="small" />0
              Brokerage.
            </Typography>
          </Stack>

          <Stack alignItems={"center"}>
            <img
              className="pricing-images"
              src="images/intradayTrades.svg"
              alt="pricing20"
            />
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              Intraday and F&O trades
            </Typography>
            <Typography className="text-body-2">
              Flat <CurrencyRupeeIcon fontSize="small" />
              20 or 0.03% per executed order on intraday trades across equity,
              currency and commodity trades.
            </Typography>
          </Stack>

          <Stack alignItems={"center"}>
            <img
              className="pricing-images"
              src="images/pricing0.svg"
              alt="pricing0"
            />
            <Typography sx={{ marginBottom: "20px" }} variant="h5">
              Free Direct MF
            </Typography>
            <Typography className="text-body-2">
              All direct mutual fund investments are <br />
              absolutely free - <CurrencyRupeeIcon fontSize="small" />0
              commissions and DP <br />
              charges.
            </Typography>
          </Stack>
        </Stack>
      </Box>
    </Stack>
  );
};

export default Hero;
