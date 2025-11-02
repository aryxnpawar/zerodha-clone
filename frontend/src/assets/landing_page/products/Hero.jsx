import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import React from "react";
import ButtonWithArrow from "../ButtonWithArrow";

const Hero = () => {
  return (
    <Container>
      <Stack padding={"60px"} spacing={3} alignItems={"center"}>
        <Typography variant="h4">Technology</Typography>
        <Typography className="text-body-2">
          Sleek, modern and intuitive trading platform
        </Typography>
        <Typography >
          Checkout our &nbsp;
          <ButtonWithArrow
            title={"investment offerings"}
            href={"https://zerodha.com/investments"}
          />
        </Typography>
      </Stack>
      <hr />
    </Container>
  );
};

export default Hero;
