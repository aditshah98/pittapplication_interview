import { Box, Container, Stack } from "@mui/material";
import React from "react";
import CategoryType from "../appCategoriesTypes/CategoryType";

import Listings from "../AppListings/Listings";

const Mainbody = () => {
  return (
    <>
      <Container>
        <CategoryType />
        <Stack direction={"row"} spacing={1} mt={3}>
          <Box>
            <Listings />
          </Box>
        </Stack>
      </Container>
    </>
  );
};

export default Mainbody;
