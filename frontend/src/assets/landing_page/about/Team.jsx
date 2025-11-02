import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import { Link } from "react-router-dom";
import './Team.css';

const Team = () => {
    return (
        <Box className="about-people-section">
          <Grid spacing={5} container>
            <Grid size={6}>
              <Stack spacing={2} sx={{alignItems:'center'}}>
                <img
                  style={{
                    height: "300px",
                    width: "300px",
                    borderRadius: "50%",
                  }}
                  src="images/nithinKamath.jpg"
                  alt="nithinKamath image"
                />

                <Typography className="about-people-text text-body-2">
                  Nitin Kamath
                </Typography>

                <Typography className="about-people-text text-body-2">
                  Founder, CEO
                </Typography>
              </Stack>
            </Grid>

            <Grid size={6}>
              <Stack spacing={2}>
                <Typography className="text-body-2">
                  Nitin founded and bootstraped Zerodha to overcome <br />
                  the hurdles he faced during his decade long stint as a trader. <br />
                  Today Zerodha has changed the landscape of the Indian broking <br />
                  System.
                </Typography>

                <Typography className="text-body-2">
                  He is a member of SEBI Secondary Market Advisory <br />
                  Committee (SMAC) and the Market Data Advisory Committee <br />
                  (MDAC)
                </Typography>

                <Typography className="text-body-2">
                  Playing basketball is his zen.
                </Typography>

                <Typography className="people-links text-body-2">
                  Connect on <Link to='/'>Homepage</Link>  / <Link to='/support'>TradingQnA</Link> / <a href="twitter.com">Twitter</a> 
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Box>
    );
}

export default Team;
