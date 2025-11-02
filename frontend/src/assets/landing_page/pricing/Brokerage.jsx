import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import React from "react";
import "./Brokerage.css";
import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";

const Brokerage = () => {
  return (
    <Container>
      <hr />
      <Grid spacing={3} padding={"40px"} container>
        <Grid size={8}>
          <Stack alignItems={"center"} spacing={4}>
            <Typography color="#387ed1">Brokerage Calculator</Typography>
            <ul className="brokerage-calculator-points">
              <li>
                Call and trade and RMS auto square-off: Additional charges of{" "}
                <CurrencyRupeeIcon fontSize="small" />
                50 + GST per order.
              </li>
              <li>Digitial Contract nodes will be sent via email.</li>
              <li>
                Physical copies of contract nodes, if required, shall be charged{" "}
                <CurrencyRupeeIcon fontSize="small" />
                20 per contract node. Courier charges apply.
              </li>
              <li>
                For NRI accounts (non-PIS), 0.5% or{" "}
                <CurrencyRupeeIcon fontSize="small" />
                100 per executed order of equity (whichever is lower).
              </li>
              <li>
                For NRI accounts (PIS), 0.5% or{" "}
                <CurrencyRupeeIcon fontSize="small" />
                200 per executed order of equity (whichever is lower).
              </li>
              <li>
                If the account is in debit balance, any order placed will be
                charged RS 40 per executed order instead of{" "}
                <CurrencyRupeeIcon fontSize="small" />
                20 per executed order.
              </li>
            </ul>
          </Stack>
        </Grid>
        <Grid size={4}>
          <Stack alignItems={"center"} spacing={4}>
            <Typography color="#387ed1">List of Charges</Typography>
          </Stack>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Brokerage;
