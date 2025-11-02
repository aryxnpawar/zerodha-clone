import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Stack from "@mui/material/Stack";
import "./Hero.css";
import { Link } from "react-router-dom";
import Box from "@mui/material/Box";

export default function Hero() {
  return (
    <Box sx={{marginBottom: "100px"}}>
      <Container
        className="hero-container"
        sx={{ height: "80vh", marginTop: "20px", marginBottom: "100px" }}
      >
        <img id="hero-image" src="/images/homeHero.png" alt="" srcset="" />
      </Container>
      <Container className="hero-container" sx={{ margin: "30px" }}>
        <Stack className="hero-stack">
          <Typography variant="h4">Invest in Everything</Typography>
          <Typography variant="subtitle2">
            Online Platform to invest in Stocks, Derivatives, mutual funds and
            more
          </Typography>
          <Button variant="contained">
            <Link className="signupButton" to={'/signup'}>Signup Now</Link>
          </Button>
        </Stack>
      </Container>
    </Box>
  );
}
