import React from "react";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import TrustPoints from "./TrustPoints";
import './Trust.css';
import ButtonWithArrow from "../ButtonWithArrow";

const Trust = () => {
  return (
    <Box sx={{margin:'100px 0px'}}>
      <Grid container>
        <Grid size={6}>
          <Stack paddingLeft={'150px'} alignItems={"flex-start"}>
            <Box>
              <Typography sx={{marginBottom:'40px'}} variant="h5">Trust with confidence</Typography>
            </Box>
            <Stack>
              <TrustPoints/>
            </Stack>
          </Stack>'
        </Grid>
        <Grid size={6}>
          <Stack >
            <Container>
                <img className="ecosystem-image" src="images/ecosystem.png" alt="ecosystem" />
            </Container>
            <Stack direction={"row"} className="ecosystem-anchors">
                <ButtonWithArrow  title={'Explore our projects'} href={'#'}/>
                <a href="#">Try Kite</a>
            </Stack>
          </Stack>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Trust;
