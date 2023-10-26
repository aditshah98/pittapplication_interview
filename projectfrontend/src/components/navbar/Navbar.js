import React, { useState } from "react";
import {
  AppBar,
  styled,
  Toolbar,
  Typography,
  Box,
  TextField,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  Link,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import AppSearch from "../search/AppSearch";
const Navbar = () => {
  const StyledToolbar = styled(Toolbar)({
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  });
  const MenuBox = styled(Box)({
    display: "flex",
    cursor: "pointer",
    gap: "20",
  });
  const MenuItems = [
    { Name: "Home  ", Link: "/" },
    { Name: "Admin", Link: "http://127.0.0.1:8000/admin" },
  ];
  const [openMenu, setOpenMenu] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Box flex={{ xs: 25, md: 1 }}>
          <Link href="http://localhost:3000/" sx={{ textDecoration: "none" }}>
            <Typography
              variant="h4"
              sx={{ textAlign: { xs: "center", md: "left" } }}
              color={"white"}
            >
              University of Pittsburgh Applications
            </Typography>
          </Link>
        </Box>
        <MenuBox flex={1} sx={{ display: { xs: "none", md: "flex" } }}>
          {MenuItems.map((item) => (
            <Link href={item.Link}>
              <Typography variant="h4" color="#FFFFFF" sx={{ m: 2 }}>
                {item.Name}
                {""}
              </Typography>
            </Link>
          ))}
        </MenuBox>

        <Box flex={1}>
          <AppSearch />
          <MenuIcon
            sx={{ display: { xs: "flex", md: "none" }, cursor: "pointer" }}
            onClick={() => setOpenMenu(!openMenu)}
          />
        </Box>
      </StyledToolbar>
      <Drawer
        anchor={"left"}
        open={openMenu}
        onClose={() => setOpenMenu(!openMenu)}
      >
        <List>
          <ListItem>
            {MenuItems.map((item) => (
              <ListItemButton>{item.Name}</ListItemButton>
            ))}
            ;
          </ListItem>
        </List>
        <TextField
          sx={{ display: { xs: "flex", md: "none" } }}
          color="warning"
          label="Search"
          variant="outlined"
        />
      </Drawer>
    </AppBar>
  );
};
export default Navbar;
