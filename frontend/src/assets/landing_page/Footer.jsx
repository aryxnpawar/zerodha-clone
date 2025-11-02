import Grid from "@mui/material/Grid";
import React from "react";
import CopyrightIcon from "@mui/icons-material/Copyright";
import TwitterIcon from "@mui/icons-material/Twitter";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TelegramIcon from "@mui/icons-material/Telegram";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import "./Footer.css";
import { NavLink } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <Box className="footer-container">
        <Grid marginBottom={'10px'} columnSpacing={10} container>
          <Grid size={3}>
            <img
              className="zerodhaLogo footer-item"
              src="/images/logo.svg"
              alt="ZERODHA LOGO"
            />
            <Box className="footer-item">
              <Typography className="text-body-2">
                <CopyrightIcon fontSize="small" /> 2010 - 2024, Not Zerodha
                Broking Ltd. <br />
                All rights reserved
              </Typography>
            </Box>
            <Stack
              sx={{ gap: 1 }}
              className="footer-item text-body-2"
              direction={"row"}
            >
              <TwitterIcon />
              <FacebookIcon />
              <InstagramIcon />
              <LinkedInIcon />
              <TelegramIcon />
            </Stack>
          </Grid>

          <Grid size={3}>
            <Stack gap={2} className="footer-item">
              <Typography className="footer-item">Company</Typography>
              <ul>
                <li>
                <NavLink className="text-body-2" to='/about'>About</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/products'>Products</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/pricing'>Pricing</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/referral'>Referral Programme</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/career'>Careers</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/tech'>Zerodha.tech</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/pressandmedia'>Press and Media</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/care'>Cares</NavLink>
                </li>
              </ul>
            </Stack>
          </Grid>

          <Grid size={3}>
            <Stack gap={2} className="footer-item">
            <Typography className="footer-item-main">Support</Typography>
              <ul>
                <li>
                <NavLink className="text-body-2" to='/contact'>Contact</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/support'>Support Portal</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/connect'>Z-connect blog</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/download'>Download and resources</NavLink>
                </li>
              </ul>
            </Stack>
          </Grid>

          <Grid size={3}>
            <Stack gap={2} className="footer-item">
            <Typography className="footer-item">Company</Typography>
          
              <ul>
                <li>
                <NavLink className="text-body-2" to='/signup'>Open an Account</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/fund'>Fund Transfer</NavLink>
                </li>
                <li>
                <NavLink className="text-body-2" to='/challenge'>60 day challenge</NavLink>
                </li>
              </ul>
            </Stack>
          </Grid>
        </Grid>
        <Box>
          <Typography className="footer-container-disclaimer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit error
            aspernatur inventore laboriosam, numquam cupiditate labore delectus.
            Quia delectus expedita id voluptatibus, consectetur labore eligendi
            inventore accusantium ratione? Tempore eos laborum consequatur nisi
            dolorem animi est sequi nobis vel, odit, laboriosam temporibus
            optio, incidunt rerum voluptatum quos! Nesciunt tenetur ipsa
            consectetur, officia maxime laborum non, enim illo officiis et
            minima.
          </Typography>
          <Typography className="footer-container-disclaimer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim, modi
            assumenda placeat quasi !
          </Typography>
          <Typography className="footer-container-disclaimer">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            consectetur cum officia itaque totam consequuntur corrupti inventore
            nam unde molestias?
          </Typography>
          <Typography className="footer-container-disclaimer">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Voluptatum, aut.
          </Typography>
        </Box>
      </Box>
    </div>
  );
};

export default Footer;
