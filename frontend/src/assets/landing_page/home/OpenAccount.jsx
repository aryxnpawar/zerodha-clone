import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";

const OpenAccount = () => {
  return (
    <Stack margin={"100px 0px"} spacing={2} alignItems={"center"}>
      <Typography variant="h4">Open Zerodha Account</Typography>
      <Typography className="text-body-2">
        Modern platforms and apps, <CurrencyRupeeIcon fontSize="small" />0
        investments, and flat <CurrencyRupeeIcon fontSize="small" />
        20 intraday and F&O orders
      </Typography>
      <Button variant="contained">
        <Link className="signupButton" to={"/signup"}>
          Signup Now
        </Link>
      </Button>
    </Stack>
  );
};

export default OpenAccount;
