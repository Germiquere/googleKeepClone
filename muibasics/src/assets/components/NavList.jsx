import * as React from "react";
import { useState, useContext, useEffect } from "react";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { MenuIconContext } from "../context/MenuIconState";
import { NavListContext } from "../context/NavListProvider.jsx";

// funcion para que cuando los id son iguales que se cambie una propiedad y cuando no que vuelva a su estado anterior.

// const StyledListItem = styled(ListItem)({
//   "&:hover": {
//     backgroundColor: "#f1f3f4",
//     // backgroundColor: "#202124",

//     cursor: "pointer",
//     borderRadius: 30,
//   },
// });
// estoy creando una prop nueva y con esa prop estoy pregunta si el valor de esa prop es diferente a tal color que se coloque el otro color y sino que quede el mismo. Con esto consigo que si hago hover sobre el elemento que esta seleccionado con el color amarillo no se me coloque el color del hover

const StyledListItem = styled(ListItem)(({ backgroundColor }) => ({
  "&:hover": {
    backgroundColor: backgroundColor !== "#feefc3" && backgroundColor,
    cursor: "pointer",
    // borderRadius: open ? "0% 15% 15% 0%" : 50,
    ...(open
      ? {
          borderTopLeftRadius: 0,
          borderBottomLeftRadius: 0,
        }
      : {}),
  },
}));
import {
  LightbulbOutlined as LightI,
  DeleteOutlineOutlined as DeleteI,
  ArchiveOutlined as ArchiveI,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

const NavList = ({ handleDrawer, open }) => {
  const { menuIcon } = useContext(MenuIconContext);
  const { navListt, setNavList } = useContext(NavListContext);

  // si dejo asi ninguno va a estar pintado por default. pero si en vez de null pongo 1 o el id que yo quiera ese siempre por defecto va a estar pintado
  const [selectedId, setSelectedId] = useState(1);

  const handleStyledListItemClick = (id) => {
    setSelectedId(id);
  };

  // esto hace que cuando yo use menuIcon no se buguee y paresca que esta roto. Por eso creo yo que en google keep tiene la misma funcionalidad
  // const delayedHandleDrawer = () => {
  //   setTimeout(() => {
  //     handleDrawer();
  //   }, 500);
  // };

  const navList = [
    {
      id: 1,
      name: "Notes",
      icon: <LightI></LightI>,
      route: "/",
    },
    {
      id: 2,
      name: "Archives",
      icon: <ArchiveI></ArchiveI>,
      route: "/archive",
    },
    {
      id: 3,
      name: "Trash",
      icon: <DeleteI></DeleteI>,
      route: "/delete",
    },
  ];
  // si no coloco el navlist dentro de un useEffect se crea un ciclo infinito y se rompe todo
  // setNavList(navList);

  return (
    <List
      // onMouseEnter={handleDrawer}
      // onMouseLeave={handleDrawer}
      sx={{ mt: 0.8 }}
      // tengo que conseguir traer el otro valor desde headerBar. para saber si se abrio desde ahi o no
      {...(menuIcon
        ? {}
        : {
            onMouseEnter: handleDrawer,
            onMouseLeave: handleDrawer,
          })}
    >
      {navList.map((e) => (
        <StyledListItem
          backgroundColor={e.id === selectedId ? "#feefc3" : "#f1f3f4"}
          key={e.id}
          disablePadding
          sx={{
            display: "block",

            backgroundColor: "transparent",
            borderRadius: 50,
            ...(open
              ? {
                  borderTopLeftRadius: 0,
                  borderBottomLeftRadius: 0,

                  backgroundColor: e.id === selectedId ? "#feefc3" : "inherit",
                }
              : {}),

            // ml: 1,
            // transition: "width 0.3s ease-in-out",
            // width: open ? "inherit" : "51px",
            pl: 0.7,
          }}
          onClick={() => {
            handleStyledListItemClick(e.id);
            setNavList(e.id);
          }}
        >
          <Link
            to={e.route}
            style={{ textDecoration: "none", color: "inherit" }}
          >
            <ListItemButton
              sx={{
                minHeight: "50.19px",
                minWidth: "50.19px",
                // justifyContent: "center",
                // borderRadius: open ? "0% 15% 15% 0% " : 50,
                borderRadius: 50,
                backgroundColor: e.id === selectedId ? "#feefc3" : "inherit",
                // paddingRight: 10,

                // mr: open ? 0 : "30px",
                mr: 1,
                // ml: 1,
                // p: 2,
                // margin: 5,
                // border: "1px solid red",
                transition: "border-radius 0.1s ease-in-out",
                "&:hover": {
                  backgroundColor: "transparent",
                  transition: "border-radius 0.1s ease-in-out",
                  // borderRadius: open ? "0% 50% 50% 0%" : 50,
                },
                ...(open
                  ? {
                      // mr: 0,
                      borderTopLeftRadius: 0,
                      borderBottomLeftRadius: 0,
                    }
                  : {}),
              }}
            >
              <ListItemIcon
                sx={{
                  // minWidth: "48px",
                  // minHeight: "48px",
                  // mr: "center",
                  width: "15px",
                  // minWidth: 0,
                  mr: open ? 3 : "auto",
                  ml: -2.3,
                  justifyContent: "center",
                  color: e.id === selectedId ? "#202124" : "#5f6368",
                  // border: "1px solid blue",
                }}
              >
                {e.icon}
              </ListItemIcon>

              <ListItemText
                primary={e.name}
                sx={{ display: open ? "block" : "none", minHeight: "auto" }}
                // sx={{ opacity: open ? 1 : 0 }}
              />
            </ListItemButton>
          </Link>
        </StyledListItem>
      ))}
    </List>
  );
};

export default NavList;
