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
import { useRouter } from "next/router";
import styles from './header.module.css'
const Header = () => {
  const router = useRouter();
  const navItems = [
    { to: "/", label: "Home" },
    { to: "/services", label: "Services" },
    { to: "/about-us", label: "About Us" },
    { to: "/blogs", label: "Blogs" },
    { to: "/contact-us", label: "Contact Us" },
  ];
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ display: { xs: "block", sm: "none" }, ml: "auto", my: 1 }}>
        <img
          style={{ width: "30%", height: "40%" }}
          src="/icons/mjfactor.svg"
          alt="MJ Factor"
        />
      </Box>
      <Divider />
      <List>
        {navItems.map(({ to, label }) => (
          <ListItem key={to} disablePadding>
            <ListItemButton sx={{ textAlign: "left" }}>
              <Link
                href={to}
                sx={{
                  textDecoration: "none",
                  display: "flex",
                  width: "100%",
                  justifyContent: "left",
                  fontSize: 14,
                  color: "#0E2240",
                  pl: 2,
                }}
              >
                {label}
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
          <Box
            sx={{ display: { xs: "block" } }}
            css={{
              cursor: "pointer",
            }}
            onClick={() => router.push("/")}
          >
            <img
              style={{ width: "54%", height: "60%" }}
              src="icons/mjfactor.svg"
              alt="MJ Factor"
            />
          </Box>

          <Box
            sx={{
              display: { xs: "none", sm: "block" }, ml: 'auto'
            }}
          >
            {navItems.map(({ to, label }) => (
              <Link
                activeClassName={styles.activeClassName}
                href={to}
                key={to}
                sx={{
                  color: "inherit",
                  textTransform: "capitalize",
                  textDecoration: "none",
                  fontSize: '14px'
                }}
              >
                <span css={{
                  padding: '10px'
                }}>
                   {label}
                </span>
               
              </Link>
            ))}
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
          anchor="left"
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
