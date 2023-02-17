// import * as React from "react";
// import { styled, useTheme } from "@mui/material/styles";
// import { useState, useContext, useRef } from "react";
// import Box from "@mui/material/Box";
// import MuiDrawer from "@mui/material/Drawer";
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import List from "@mui/material/List";
// import CssBaseline from "@mui/material/CssBaseline";
// import Typography from "@mui/material/Typography";
// import Divider from "@mui/material/Divider";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
// import ChevronRightIcon from "@mui/icons-material/ChevronRight";
// import ListItem from "@mui/material/ListItem";
// import ListItemButton from "@mui/material/ListItemButton";
// import ListItemIcon from "@mui/material/ListItemIcon";
// import ListItemText from "@mui/material/ListItemText";
// import InboxIcon from "@mui/icons-material/MoveToInbox";
// import MailIcon from "@mui/icons-material/Mail";
// import SearchIcon from "@mui/icons-material/Search";
// import { MenuIconContext } from "../context/MenuIconState";
// import { NavListContext } from "../context/NavListProvider";
// import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
// import SearchBar from "./SearchBar";

// const CToolTip = styled(({ className, ...props }) => (
//   <Tooltip {...props} classes={{ popper: className }} />
// ))(({ theme }) => ({
//   [`& .${tooltipClasses.tooltip}`]: {
//     // backgroundColor: theme.palette.common.white,
//     // color: "rgba(0, 0, 0, 0.87)",
//     // boxShadow: theme.shadows[1],
//     fontSize: 13,
//     marginTop: "0 !important",
//   },
// }));

// const Header = styled(AppBar)`
//   z-index: 1201;
//   background: #fff;
//   height: 70px;
//   box-shadow: inset 0 -1px 0 0 #dadce0;
// `;
// const Heading = styled(Typography)`
//   color: #5f6368;
//   font-size: 24px;
//   margin-left: 25px;
//   // margin-right: 30px;
//   // width: 30px;
// `;

// const HeaderBar = ({ open, handleDrawer }) => {
//   const { menuIcon, setMenuIcon } = useContext(MenuIconContext);
//   const { navListt } = useContext(NavListContext);
//   // console.log(navList[0].name);
//   // const sarasa = () => {
//   //   console.log(menuIcon);
//   // };
//   const logo =
//     "https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png";
//   return (
//     <Header open={open}>
//       <Toolbar sx={{}}>
//         <CToolTip title="Main menu">
//           <IconButton
//             onClick={() => {
//               handleDrawer();
//               setMenuIcon(!menuIcon);
//               // console.log(menuIcon);
//             }}
//             edge="start"
//             sx={{
//               marginRight: navListt !== 1 ? 0 : "15px",
//               marginLeft: "-20px",
//             }}
//           >
//             <MenuIcon sx={{ fontSize: "30px", padding: "3px" }} />
//           </IconButton>
//         </CToolTip>
//         <Box sx={{ display: "flex", marginRight: 10 }}>
//           <img
//             src={logo}
//             alt="logo"
//             style={{
//               width: "30px",
//               display: navListt !== 1 ? "none" : "block",
//             }}
//           />
//           <Heading
//             variant="h6"
//             noWrap
//             component="div"
//             sx={{ marginLeft: navListt !== 1 ? "15px" : 2 }}
//           >
//             {navListt === 1 ? "Keep" : navListt === 2 ? "Archive" : "Trash"}
//           </Heading>
//         </Box>

//         <SearchBar></SearchBar>
//       </Toolbar>
//     </Header>
//   );
// };

// export default HeaderBar;
import * as React from "react";

import { styled, useTheme, alpha } from "@mui/material/styles";
import { useState, useContext, useRef, useEffect } from "react";
import Box from "@mui/material/Box";

import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";

import Typography from "@mui/material/Typography";

import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";

import RefreshOutlinedIcon from "@mui/icons-material/RefreshOutlined";
import SplitscreenOutlinedIcon from "@mui/icons-material/SplitscreenOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import AppsOutlinedIcon from "@mui/icons-material/AppsOutlined";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import KeyboardBackspaceOutlinedIcon from "@mui/icons-material/KeyboardBackspaceOutlined";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import { MenuIconContext } from "../context/MenuIconState";
import { NavListContext } from "../context/NavListProvider";
import { SearchContext } from "../context/SearchProvider";
import { width } from "@mui/system";
import { Padding } from "@mui/icons-material";

const CToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    fontSize: 13,
    marginTop: "0 !important",
  },
}));
const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  backgroundColor: "#fff",
  boxShadow: "inset 0 -1px 0 0 #dadce0",
  height: "auto",
  padding: 0,
}));
const Search = styled("div")(({ theme }) => ({
  position: "absolute",
  borderRadius: theme.shape.borderRadius,
  // "&:hover": {
  //   backgroundColor: alpha(theme.palette.common.white, 0.25),
  // },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  height: 48,
  alignItems: "center",
  backgroundColor: "#fff",
  color: "#5f6368",
  boxShadow:
    " 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)",
  zIndex: 30,
  left: -10,
  [theme.breakpoints.up("md")]: {
    position: "relative",
    width: "100%",
    maxWidth: 600,
    backgroundColor: "#f1f3f4",
    boxShadow: "none",
  },
}));
const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    // padding: theme.spacing(1, 1, 1, 0),

    paddingLeft: 10,
    transition: theme.transitions.create("width"),
    "&:focus": {
      [theme.breakpoints.up("md")]: {
        borderRadius: theme.shape.borderRadius,
        padding: theme.spacing(1, 1, 1, 6),

        marginLeft: -38,
        backgroundColor: "#fff",
        height: 31.5,
        color: "#5f6368",
        boxShadow:
          " 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)",
      },
    },
  },

  width: "100%",
}));

const HeaderBar = ({ open, handleDrawer }) => {
  const { setFilter } = useContext(SearchContext);
  const search = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };
  const [searchBar, setSearchBar] = useState(false);
  const { menuIcon, setMenuIcon } = useContext(MenuIconContext);
  const { navListt } = useContext(NavListContext);

  const openCloseSearchBar = () => {
    setSearchBar(!searchBar);
  };
  const inputRef = useRef(null);

  const handleClick = () => {
    setTimeout(() => {
      inputRef.current.focus();
    }, 300);
  };
  return (
    <AppBar position="fixed" open={open} sx={{ zIndex: 1201 }}>
      <Toolbar
        sx={{ justifyContent: "space-between", padding: { xs: "0 24px" } }}
      >
        <Box
          sx={{
            display: "flex",
            gap: 1,
            alignItems: "center",
            position: "relative",
            width: "100%",
          }}
        >
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: "#5f6368",
            }}
          >
            <CToolTip title="Main menu">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={() => {
                  handleDrawer();
                  setMenuIcon(!menuIcon);
                }}
              >
                <MenuIcon />
              </IconButton>
            </CToolTip>

            <img
              src="https://seeklogo.com/images/G/google-keep-logo-0BC92EBBBD-seeklogo.com.png"
              alt="Logo"
              style={{ width: "25px", hight: "100%" }}
            />
            <Typography
              variant="h6"
              noWrap
              component="div"
              sx={{
                // width: { xs: "100%", md: "auto" },
                width: 70,
                display: { xs: "none", md: "block" },
                marginRight: 10,
              }}
            >
              {navListt === 1 ? "Keep" : navListt === 2 ? "Archive" : "Trash"}
            </Typography>
          </Box>

          {/* search box container */}
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              width: "100%",
              maxWidth: 600,
            }}
          >
            <Search
              sx={{ display: { xs: searchBar ? "flex" : "none", md: "flex" } }}
            >
              <CToolTip
                title="Close search"
                onClick={openCloseSearchBar}
                enterDelay={500}
              >
                <IconButton
                  sx={{
                    marginLeft: 1,
                    display: { xs: "block", md: "none" },
                    width: 40,
                    height: 40,
                  }}
                >
                  <KeyboardBackspaceOutlinedIcon />
                </IconButton>
              </CToolTip>
              <SearchIcon
                sx={{
                  marginLeft: 2,
                  display: { xs: "none", md: "block" },
                  position: "relative",
                  zIndex: 10,
                }}
              />

              <StyledInputBase
                placeholder="Search"
                inputProps={{ "aria-label": "search" }}
                inputRef={inputRef}
                onChange={search}
              />
              <CToolTip title="Clear search" enterDelay={500}>
                <IconButton
                  sx={{
                    marginRight: 1,
                    display: { xs: "block", md: "none" },
                    width: 40,
                    height: 40,
                  }}
                >
                  <CloseOutlinedIcon />
                </IconButton>
              </CToolTip>
            </Search>
          </Box>
        </Box>
        {/* icons */}
        <Box sx={{ display: "flex" }}>
          <Box sx={{ display: { md: "none" } }}>
            <CToolTip title="Search" enterDelay={500}>
              <IconButton
                size="large"
                onClick={() => {
                  openCloseSearchBar();
                  handleClick();
                }}
                sx={{
                  display: searchBar ? "none" : "block",
                  width: 50,
                  height: 50,
                }}
              >
                <SearchIcon />
              </IconButton>
            </CToolTip>
          </Box>
          <CToolTip title="Refresh">
            <IconButton size="large" disabled>
              <RefreshOutlinedIcon />
            </IconButton>
          </CToolTip>
          <CToolTip title="List view" disabled>
            <IconButton
              size="large"
              sx={{ display: { xs: "none", sm: "inherit" } }}
            >
              <SplitscreenOutlinedIcon />
            </IconButton>
          </CToolTip>
          <CToolTip title="Settings" disabled>
            <IconButton size="large">
              <SettingsOutlinedIcon />
            </IconButton>
          </CToolTip>
        </Box>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <CToolTip title="Google appss" disabled>
            <IconButton size="large">
              <AppsOutlinedIcon />
            </IconButton>
          </CToolTip>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HeaderBar;
