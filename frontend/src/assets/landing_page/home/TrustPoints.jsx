import React from "react";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import './TrustPoints.css';

const TrustPoints = () => {
  return (
    <div>
      <Box className="trustpoints-points" >
        <Typography  variant="h6">Customers-first Always</Typography>
        <Typography className="text-body-2" variant="subtitle2">
          That's why 1.3+ crore people trust Zerodha with 3.5+ lakh crores{" "}
          <br />
          worth of equity investment
        </Typography>
      </Box>
      
      <Box className="trustpoints-points" >
      <Typography variant="h6">No spams or gimmicks</Typography>
      <Typography className="text-body-2" variant="subtitle2">
        No gimick, spam, "gamification or annoying push"
        <br />
        notifications. High auality apps that you use at your pace, the <br />
        way you like
      </Typography>
      </Box>

      <Box className="trustpoints-points">
      <Typography variant="h6">The Zerodha Universe</Typography>
      <Typography className="text-body-2" variant="subtitle2">
        Not just an app, but a whole ecosystem. Our investments in <br />
        30+ fintech startups offer you tailored services specific <br />
        to your needs
      </Typography>
      </Box>

      <Box className="trustpoints-points">
      <Typography variant="h6">Do better with money</Typography>
      <Typography className="text-body-2" variant="subtitle2">
        With initiatives like Nudge and kill switch, we dont just <br />
        facilitate transactions but actively help you do better with <br />
        your money
      </Typography>
      </Box>
    </div>
  );
};

export default TrustPoints;
