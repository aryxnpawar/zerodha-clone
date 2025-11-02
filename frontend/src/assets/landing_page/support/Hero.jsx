import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import "./Hero.css";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";

const Hero = () => {
  return (
    <Box className="support-hero">
      <Grid padding={"0px 120px"} container>
        <Grid size={6}>
          <Typography margin={"30px 0px 30px 0px"}> Support Portal</Typography>
          <Stack marginBottom={'30px'} spacing={2}>
            <Typography variant="h6">
              Search for an answer or browse help topics <br />
              to create a ticket
            </Typography>
            <TextField
              sx={{
                width: "400px",
                "& .MuiOutlinedInput-root": {
                  backgroundColor: "white",
                  "& fieldset": {
                    borderColor: "rgba(255, 255, 255, 0.5)", // Optional: white border
                  },
                  "&:hover fieldset": {
                    borderColor: "white",
                  },
                  "&.Mui-focused fieldset": {
                    borderColor: "white",
                  },
                },
                "& .MuiInputLabel-root": {
                  color: "white", // Label color
                },
                "& .MuiInputLabel-root.Mui-focused": {
                  color: "white", // Label color when focused
                },
                "& .MuiOutlinedInput-input": {
                  color: "white", // Input text color
                },
              }}
              label="Eg: how do I activate F&O, why is my order getting rejected, et.c"
              variant="outlined"
            />
            <Box sx={{display:'flex', flexWrap:'unset',gap:'7px'}}>
                <a href="#">Track account opening</a>
                <a href="#">Track segment activation</a>
                <a href="#">Intraday</a>
                <a href="#">Margins</a>
                <a href="#">Kite user manual</a>
            </Box>
          </Stack>
        </Grid>
        <Grid size={6}>
          <Stack>
            <a
              style={{ margin: "30px 0px 50px 0px", textAlign: "center" }}
              href="/ticket"
            >
              Train Ticket
            </a>
            <Typography variant="h5">Features</Typography>
            <ol>
              <li>
                <a href="#">Current Takeovers and Delisting - January 2025</a>
              </li>
              <a href="#">
                <li>Latest Intraday Leverages - MIS & CO</li>
              </a>
            </ol>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
