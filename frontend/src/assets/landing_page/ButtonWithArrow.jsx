import React from "react";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";

const ButtonWithArrow = ({ title, href }) => {
  return (

      <a style={{ textDecoration: "none" }} href={href}>
        {title}
        <ArrowForwardIcon fontSize={"small"} />
      </a>

  );
};

export default ButtonWithArrow;
