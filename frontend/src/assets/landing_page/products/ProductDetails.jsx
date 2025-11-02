import Typography from "@mui/material/Typography";
import React from "react";
import ButtonWithArrow from "../ButtonWithArrow";
import Stack from "@mui/material/Stack";

const ProductDetails = ({
  productName,
  productBody,
  demoLink,
  learnMoreLink,
  playstoreLink,
  appstoreLink,
}) => {
  return (
    <Stack spacing={3}>
      <Typography variant="h3">{productName}</Typography>
      <Typography className="text-body-2">{productBody}</Typography>
      <Stack spacing={2} direction={"row"}>
        {demoLink && <ButtonWithArrow href={demoLink} title={"Try demo"} />}
        {learnMoreLink && (
          <ButtonWithArrow href={learnMoreLink} title={"Learn More"} />
        )}
      </Stack>
      <Stack spacing={2} direction={"row"}>
        {playstoreLink && (
          <a href={playstoreLink}>
            <img src="images/googlePlayBadge.svg" />
          </a>
        )}
        {appstoreLink && (
          <a href={appstoreLink}>
            <img src="images/appstoreBadge.svg" />
          </a>
        )}
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
