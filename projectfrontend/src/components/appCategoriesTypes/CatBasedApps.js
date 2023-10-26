import {
  Box,
  Grid,
  Typography,
  Pagination,
  Stack,
  Container,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import AppCard from "../AppListings/AppCard";
import axios from "axios";
import { useParams } from "react-router-dom";

const CatBasedApps = () => {
  let { id } = useParams();
  const [app, setApp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/categoryBasedApps/${id}`
        );
        // const res = await axios.get("http://127.0.0.1:8000/api/apps");
        setApp(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <Container>
      <Stack
        spacing={2}
        mt={3}
        mb={3}
        justifyContent={"center"}
        alignItems={"center"}
      >
        <Pagination count={10} />
      </Stack>
      <Typography variant="h4" align="center">
        Category Specific Applications
      </Typography>
      <Grid
        container
        columnSpacing={{ xs: 0, sm: 1, md: 1 }}
        direction={"column"}
      >
        {app.map((app) => (
          <Grid item xs>
            <AppCard
              title={app.title}
              appshorts={app.appshorts}
              appcardHref={`/appdetails/${app.slug}`}
              myDirection={"block"}
              appimagelink={app.appimageurl}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default CatBasedApps;
