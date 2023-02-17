import * as React from "react";
import { useState } from "react";
import Popover from "@mui/material/Popover";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import DoneIcon from "@mui/icons-material/Done";
import FormatColorResetOutlinedIcon from "@mui/icons-material/FormatColorResetOutlined";
import { Box } from "@mui/system";
import Paper from "@mui/material/Paper";
const CToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.white,
    // color: "rgba(0, 0, 0, 0.87)",
    // boxShadow: theme.shadows[1],
    fontSize: 13,
    marginTop: "0 !important",
  },
}));
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // backgroundColor: "red",
  // width: 30,
  // height: 30,
  // ...theme.typography.body2,
  // padding: theme.spacing(1),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
  // width: 28,
  // width: "100%",
  width: 30,
  maxWidth: 30,
  // maxWidth: 28,
  height: 30,
  borderRadius: 50,
  display: "flex",

  justifyContent: "center",
  alignItems: "center",
  cursor: "pointer",
  position: "relative",
  "&:hover": { border: "1px solid black" },
}));

const BasicPopover = ({
  anchorElPopover,
  handleClosePopover,
  setBGChange,
  changeBGColor,
  handleItemClicked,
  itemClicked,
}) => {
  // const [itemClicked, setItemClicked] = useState(1);
  // const handleItemClicked = (itemId) => {
  //   setItemClicked(itemId);
  // };
  const bGColorArray = [
    {
      id: 1,
      bGColor: "white",
      name: "Default",
    },
    {
      id: 2,
      bGColor: "#f28b82",
      name: "Red",
    },
    {
      id: 3,
      bGColor: "#fbbc04",
      name: "Orange",
    },
    {
      id: 4,
      bGColor: "#fff475",
      name: "Yellow",
    },
    {
      id: 5,
      bGColor: "#ccff90",
      name: "Green",
    },
    {
      id: 6,
      bGColor: "#a7ffeb",
      name: "Teal",
    },
    {
      id: 7,
      bGColor: "#cbf0f8",
      name: "Blue",
    },
    {
      id: 8,
      bGColor: "#aecbfa",
      name: "Dark blue",
    },
    {
      id: 9,
      bGColor: "#d7aefb",
      name: "Purple",
    },
    {
      id: 10,
      bGColor: "#fdcfe8",
      name: "Pink",
    },
    {
      id: 11,
      bGColor: "#e6c9a8",
      name: "Brown",
    },
    {
      id: 12,
      bGColor: "#e8eaed",
      name: "Grey",
    },
  ];

  const open = Boolean(anchorElPopover);
  const id = open ? "simple-popover" : undefined;

  return (
    <Popover
      id={id}
      open={open}
      anchorEl={anchorElPopover}
      onClose={handleClosePopover}
      anchorOrigin={{
        vertical: "bottom",
        horizontal: "center",
      }}
      transformOrigin={{
        vertical: "center",
        horizontal: "center",
      }}
    >
      <Box
        sx={{
          display: "flex",

          padding: 1,
          gap: 0.5,
          flexWrap: "wrap",
          alignItems: "center",
          justifyContent: "center",
          width: { xs: "100px", sm: "100%" },
        }}
      >
        {bGColorArray.map((e) => (
          <CToolTip title={e.name} sx={{ with: "100%" }} key={e.id}>
            <Item
              sx={{
                backgroundColor: e.bGColor,
                border: itemClicked === e.id ? "1px solid #a142f4" : "none",
              }}
              onClick={() => {
                setBGChange(e.bGColor);

                changeBGColor(e.bGColor);
                handleItemClicked(e.id);
              }}
            >
              <DoneIcon
                sx={{
                  position: "absolute",
                  width: 16,
                  height: 16,
                  top: -6,
                  left: 18,
                  color: "white",
                  backgroundColor: "#a142f4",
                  borderRadius: 50,
                  display: itemClicked === e.id ? "default" : "none",
                }}
              />
              <FormatColorResetOutlinedIcon
                sx={{ fontSize: 18, display: e.id !== 1 && "none" }}
              />
            </Item>
          </CToolTip>
        ))}
      </Box>
      {/* <Typography sx={{ p: 2 }}>The content of the Popover.</Typography> */}
    </Popover>
  );
};

export default BasicPopover;
