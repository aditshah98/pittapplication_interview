import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import { Grid, TextField } from "@mui/material";
import axios from "axios";
import AppCard from "../AppListings/AppCard";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  maxHeight: 600,
  minHeight: 600,
  overflow: "auto",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const AppSearch = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [appSearch, setAppSearch] = React.useState([]);
  const [lookup, setLookup] = React.useState();

  React.useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/apps/`
        );
        // const res = await axios.get("http://127.0.0.1:8000/api/apps");
        setAppSearch(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <TextField
        sx={{ display: { xs: "none", md: "flex" } }}
        color="warning"
        label="Search"
        variant="filled"
        onClick={() => setOpen(true)}
      />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <TextField
            sx={{ display: { xs: "none", md: "flex" } }}
            color="warning"
            label="Search"
            variant="filled"
            onChange={(e) => setLookup(e.target.value)}
          />
          {appSearch
            .filter((search) => search.title.toLowerCase().includes(lookup))
            .map((search) =>
              lookup.length > 0 ? (
                <Grid item xs>
                  <AppCard
                    title={search.title}
                    appshorts={search.appshorts}
                    appcardHref={`/appdetails/${search.slug}`}
                    myDirection={"block"}
                    appimagelink={search.appimageurl}
                  />
                </Grid>
              ) : (
                ""
              )
            )}
        </Box>
      </Modal>
    </div>
  );
};

export default AppSearch;
