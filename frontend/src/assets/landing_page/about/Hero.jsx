import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import "./Hero.css";


const Hero = () => {
  return (
      <Container>
        <Box className="about-hero-container-section">
          <Typography variant="h5">
            We pioneered the discount broking model in India. <br />
            Now, we are breaking ground with our technology.
          </Typography>
        </Box>
        <hr />
        <Box className="about-hero-container-section">
          <Grid spacing={5} container>
            <Grid size={6}>
              <Stack spacing={2}>
                <Typography className="text-body-2">
                  We kick started operations on 15th of August,2010 <br />
                  with the goal of breaking all barriers that traders <br />
                  and investors face in Inida in terms of cost, support and{" "}
                  <br />
                  technology. We named the compnay Zerodha a <br />
                  combination of Zero and "Rodha", a sanskrit word <br />
                  for Barrier.
                </Typography>

                <Typography className="text-body-2">
                  Today our disruptive pricing models and in-house <br />
                  technology has made us made us the biggest stock broker in
                  India
                </Typography>

                <Typography className="text-body-2">
                  Our 1+ Crores of clients place millions of orders everydady{" "}
                  <br />
                  through our powerful ecosystem of investment <br />
                  platforms, contributing 15% of all Indian retail <br />
                  trading volume.
                </Typography>
              </Stack>
            </Grid>
            <Grid size={6}>
              <Stack spacing={2}>
                <Typography className="text-body-2">
                  In addition, we run a number of popular online <br />
                  educational and community initiatives to empower retail <br />
                  traders and investors.
                </Typography>

                <Typography className="text-body-2">
                  <a style={{textDecoration:'none'}} href="https://rainmatter.com/">Rainmatter</a>, our fintech fund and incubator, has invested{" "}
                  <br />
                  in several fintech startups with the goal of gwing the <br />
                  Indian Capital markets.
                </Typography>

                <Typography className="text-body-2">
                  And yet, we are always upto something new everyday. <br />
                  Catch up on the latest updates on our blog or services <br />
                  the media is saying about us.
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>

        <hr />

        
      </Container>
  );
};

export default Hero;
