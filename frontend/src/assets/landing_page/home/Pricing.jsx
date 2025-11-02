import React from "react";
import "./Pricing.css";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import ButtonWithArrow from "../ButtonWithArrow";
import Stack from "@mui/material/Stack";
import CurrencyRupeeIcon from "@mui/icons-material/CurrencyRupee";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import OpenAccount from "./OpenAccount";

const Pricing = () => {
  return (
    <Box sx={{margin:'80px 0px'}}>
      <Grid
        columnSpacing={5}
        rowSpacing={10}
        className="pricing-grid"
        padding={"70px"}
        container
      >
        <Grid size={6}>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Unbeatable Price
          </Typography>
          <Typography className="text-body-2" sx={{ marginBottom: "10px" }}>
            We pioneered the concept of discount broking and price <br />
            transparency in India. Flat fees and no hidden charges.
          </Typography>
          <Link style={{ textDecoration: "none" }} to="/pricing">
            See pricing
          </Link>
        </Grid>

        <Grid size={6}>
          <Stack direction={"row"}>
            <Stack className="pricing-stack">
              <Typography
                sx={{ marginTop: "30px", marginBottom: "30px" }}
                variant="h5"
              >
                <CurrencyRupeeIcon fontSize="small" />0
              </Typography>
              <Typography className="text-body-2" sx={{ marginBottom: "10px" }}>
                Free equity delivery and <br />
                &nbsp;&nbsp;&nbsp; direct mutual funds
              </Typography>
            </Stack>

            <Stack className="pricing-stack">
              <Typography
                sx={{ marginTop: "30px", marginBottom: "30px" }}
                variant="h5"
              >
                <CurrencyRupeeIcon fontSize="small" />
                20
              </Typography>
              <Typography className="text-body-2" sx={{ marginBottom: "10px" }}>
                Intraday and F&O
              </Typography>
            </Stack>
          </Stack>
        </Grid>

        <Grid size={6}>
          <Container>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src="/images/education.svg"
              alt="education"
              srcset=""
            />
          </Container>
        </Grid>

        <Grid size={6}>
          <Typography
            sx={{ marginTop: "30px", marginBottom: "30px" }}
            variant="h5"
          >
            Free and open market educator
          </Typography>
          <Typography className="text-body-2" sx={{ marginBottom: "10px" }}>
            Varsity, the largest onlin estock market education platform <br />
            covering everything from basics to advance
          </Typography>
          <ButtonWithArrow href={"#"} title={"Versity"} />
          <Typography className="text-body-2" sx={{ marginTop: "80px" }}>
            TradingQ&A, the most active trading and investing community
            <br />
            India for all your market related questions
          </Typography>
        </Grid>
      </Grid>
      <OpenAccount/>
    </Box>
  );
};

export default Pricing;
