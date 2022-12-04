import * as React from "react";
import {
  AppBar,
  Toolbar,
  Divider,
  List,
  ListItem,
  ListItemButton,
} from "@mui/material";
import { Box } from "@mui/system";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import Drawer from "@mui/material/Drawer";
import Link from "../Link";

const Header = () => {
  const navItems = ["Services", "About", "Blog", "Contact Us"];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: { xs: "block", sm: "none" }, ml: "auto", my: 1 }}>
        <img
          style={{ width: "30%", height: "40%" }}
          src="icons/mjfactor.svg"
          alt="MJ Factor"
        />
      </Box>
      <Divider />
      <List>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding>
            <ListItemButton sx={{ textAlign: "center" }}>
              <Link
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  width: "100%",
                  justifyContent: "center",
                }}
                href={"#"}
              >
                {" "}
                {item}{" "}
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );
  return (
    <Box>
      <AppBar
        component="nav"
        color="inherit"
        sx={{ boxShadow: 0, background: "white" }}
      >
        <Toolbar>
          <Box sx={{ display: { xs: "block", sm: "none" } }}>
            <img
              style={{ width: "54%", height: "60%" }}
              src="icons/mjfactor.svg"
              alt="MJ Factor"
            />
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {navItems.map((item) => (
              <Link
                href={"#"}
                key={item}
                sx={{
                  color: "inherit",
                  textTransform: "capitalize",
                  pr: 4,
                  textDecoration: "none",
                }}
              >
                {item}
              </Link>
            ))}
          </Box>
          <Box sx={{ display: { xs: "none", sm: "block" }, ml: "auto" }}>
            <img
              style={{ width: "60%", height: "60%" }}
              src="icons/mjfactor.svg"
              alt="MJ Factor"
            />
          </Box>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{
              ml: "auto",
              display: { sm: "none" },
            }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
        <Divider />
      </AppBar>
      <Box component="nav">
        <Drawer
        anchor="bottom"
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": { boxSizing: "border-box", width: "38vw" },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
};

export default Header;
