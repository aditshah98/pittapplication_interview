import { Box, Grid, Typography, Pagination, Stack } from "@mui/material";
import React, { useEffect, useState } from "react";
import AppCard from "./AppCard";
import axios from "axios";

const Listings = () => {
  const [app, setApp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/apps/`
        );
        setApp(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const [editor, seteditorApp] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/editorBasedApps/`
        );
        // const res = await axios.get(
        //   "http://127.0.0.1:8000/api/editorBasedApps"
        // );
        seteditorApp(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Box>
      <Typography
        variant="h4"
        bgcolor={"gold"}
        color={"blue"}
        align="center"
        mt={4}
        mb={4}
      >
        {" "}
        Editors Choice Apps
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
        {editor.map((editor) => (
          <Grid item md={6} sm={6}>
            <AppCard
              title={editor.title}
              appshorts={editor.appshorts}
              appcardHref={`/appdetails/${editor.slug}`}
              myDirection={"block"}
              appimagelink={editor.appimageurl}
            />
          </Grid>
        ))}
      </Grid>
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
        List of All Applications
      </Typography>
      <Grid container columnSpacing={{ xs: 0, sm: 1, md: 1 }} direction={"row"}>
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
    </Box>
  );
};

export default Listings;
