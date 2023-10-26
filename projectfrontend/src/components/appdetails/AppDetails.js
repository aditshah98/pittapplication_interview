import {
  Box,
  CardMedia,
  Container,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import CategoryType from "../appCategoriesTypes/CategoryType";
import DoubleArrowIcon from "@mui/icons-material/DoubleArrow";
import { useParams } from "react-router-dom";
import axios from "axios";

const AppDetails = () => {
  const [appdetails, setAppDetails] = useState([]);
  const [appcats, setappcats] = useState("");
  let { slug } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const res = await axios.get(
        //   `${process.env.REACT_APP_API_URL}/api/apps/`
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/apps/${slug}`
        );
        setAppDetails(res.data);
        setappcats(res.data.appothercats);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <Container>
      <Typography variant="h3" align="center" mt={4}>
        {appdetails.title}
      </Typography>
      <Typography variant="h5" align="center" color={"GrayText"} p={4}>
        {appdetails.appdescription}
      </Typography>
      <Box sx={{ display: "flex", justifyContent: "center" }}>
        <CardMedia
          sx={{ height: "500px", width: "500px" }}
          component="img"
          image={appdetails.appimageurl}
          alt="Image not Working"
        />
      </Box>
      <List>
        {appcats.split(",").map((appothercats) => (
          <ListItemButton>
            <ListItemIcon>
              <DoubleArrowIcon />
            </ListItemIcon>
            <ListItemText primary={appothercats} />
          </ListItemButton>
        ))}
      </List>
    </Container>
  );
};

export default AppDetails;
