import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import React from "react";
import ProductDetails from "./ProductDetails";
import Stack from "@mui/material/Stack";

const RightSection = ({
  imagePath,
  productName,
  productBody,
  demoLink,
  learnMoreLink,
  playstoreLink,
  appstoreLink,
}) => {
  return (
    <Box sx={{ padding: "70px" }}>
      <Grid columnSpacing={5} container>
        <Grid  alignContent={'center'} size={6}>
          <Stack>
            <ProductDetails
              demoLink={demoLink}
              learnMoreLink={learnMoreLink}
              productName={productName}
              productBody={productBody}
              playstoreLink={playstoreLink}
              appstoreLink={appstoreLink}
            />
          </Stack>
        </Grid>
        <Grid size={6}>
          <Box>
            <img
              style={{
                width: "100%",
                height: "100%",
              }}
              src={imagePath}
            />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RightSection;
