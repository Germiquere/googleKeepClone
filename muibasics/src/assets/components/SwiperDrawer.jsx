import * as React from "react";
import { styled, useTheme } from "@mui/material/styles";
import { useState, useContext } from "react";
import { MenuIconContext } from "../context/MenuIconState";
import { Box, Drawer as MuiDrawer } from "@mui/material";

// components
import HeaderBar from "./HeaderBar";
import NavList from "./NavList";
const drawerWidth = 240;
// const state = false;
const openedMixin = (theme, menuIcon) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",

  boxShadow: menuIcon
    ? "none"
    : "     0 16px 10px 0 rgb(0 0 0 / 14%), 0 11px 18px 0 rgb(0 0 0 / 12%), 0 13px 5px -1px rgb(0 0 0 / 20%)",
  border: "none",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",

  width: 60,
  border: "none",
});

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
  // aca tenia que poner el menuIcon para poder pasarlo c omo prop y que funcione al llamar a la funcion openeedMixin
})(({ theme, open, menuIcon }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",

  ...(open && {
    ...openedMixin(theme, menuIcon),
    "& .MuiDrawer-paper": openedMixin(theme, menuIcon),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

const SwiperDrawer = () => {
  const [open, setOpen] = React.useState(false);
  const { menuIcon } = useContext(MenuIconContext);

  const handleDrawer = () => {
    setOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <HeaderBar open={open} handleDrawer={handleDrawer}></HeaderBar>

      <Drawer
        variant="permanent"
        open={open}
        sx={{ boxShadow: "none" }}
        menuIcon={menuIcon}
      >
        <DrawerHeader></DrawerHeader>
        <NavList handleDrawer={handleDrawer} open={open}></NavList>
      </Drawer>
    </Box>
  );
};
export default SwiperDrawer;
