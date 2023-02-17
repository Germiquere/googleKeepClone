import { Box, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { useState, useRef, useContext } from "react";
import { DataContext } from "../../context/DataProvider";
import { v4 as uuid } from "uuid";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import AddAlertOutlinedIcon from "@mui/icons-material/AddAlertOutlined";
import PersonAddAltOutlinedIcon from "@mui/icons-material/PersonAddAltOutlined";
import IconButton from "@mui/material/IconButton";
import ColorLensOutlinedIcon from "@mui/icons-material/ColorLensOutlined";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import CheckBoxOutlinedIcon from "@mui/icons-material/CheckBoxOutlined";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { CheckedContext } from "../../context/CheckedState";
import { Login } from "@mui/icons-material";
import Popper from "@mui/material/Popper";
import Paper from "@mui/material/Paper";

import BasicPopover from "../BasicPopover";
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
const Container = styled(Box)`
  justify-self: center;
  display: flex;
  flex-direction: column;

  max-width: 600px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  //   box-shadow: none;
  padding: 0 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  min-height: 30px;
  // margin-bottom: 10px;
  margin: auto;
`;
//
const note = {
  id: "",
  heading: "",
  text: "",
  pin: false,
  background: "white",
};
const Icons = styled(Box)(({}) => ({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
}));

const StyledIconButton = styled(IconButton)(({}) => ({
  color: "#5f6368",
}));
// const StyledButton = styled(Button)({
//   color: "#5f6368",
//   boxShadow: "none",
//   textTransform: "none",
//   fontWeight: 500,
//   fontSize: 14,
//   padding: "6px 12px",
//   // border: "1px solid",
//   lineHeight: 1.5,
//   // backgroundColor: "#0063cc",
//   borderColor: "#0063cc",

//   "&:hover": {
//     color: "inherit",
//     // backgroundColor: "#f5",
//     // borderColor: "#0062cc",
//     // boxShadow: "none",
//   },
// });

const Form = () => {
  const [bGChange, setBGChange] = useState("white");

  const { checked, setChecked } = useContext(CheckedContext);

  const { notes, setNotes } = useContext(DataContext);

  const [addNote, setAddNote] = useState({
    ...note,
    id: uuid(),
  });
  const [pinned, setPinned] = useState(true);
  const handlePinned = () => {
    setPinned(!pinned);
    let changeNote = {
      ...addNote,
      pin: pinned,
    };
    setAddNote(changeNote);
    console.log(changeNote);
  };
  const [showTextField, setShowTextField] = useState(false);

  // POPPER

  // const [openBSettings, setOpenBSettings] = useState(false);
  // const handleClickBG = () => {
  //   setOpenBSettings(!openBSettings);
  // };
  const [anchorElPopover, setAnchorElPopover] = useState(null);
  const divRef = useRef(null);
  const handleClickPopover = () => {
    setAnchorElPopover(divRef.current);
  };
  const handleClosePopover = () => {
    setAnchorElPopover(null);
  };

  const [itemClicked, setItemClicked] = useState(1);
  const handleItemClicked = (itemId) => {
    setItemClicked(itemId);
  };
  // POPPER

  const onTextAreaClick = () => {
    setShowTextField(true);
  };

  const onTextChange = (e) => {
    let changeNote = {
      ...addNote,
      [e.target.name]: e.target.value,
    };

    setAddNote(changeNote);
    console.log(addNote);
  };
  const changeBGColor = (color) => {
    console.log(note.background);
    let changeNote = {
      ...addNote,
      background: color,
    };
    // console.log(addNote);
    setAddNote(changeNote);
  };
  const handleClickAway = () => {
    setShowTextField(false);
    // si alguno de esos dos campos esta vacio no se ejecuta el setNotes
    setAddNote({ ...note, id: uuid() });

    if (addNote.text || addNote.heading) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    }
    // setChecked(false);
    console.log(addNote);
    setItemClicked(1);

    // para que se cierre siempre el bgsettings cuando hago click away

    setBGChange("white");
    setPinned(true);
  };
  // const id = open ? "simple-popper" : undefined;
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container
        style={{ backgroundColor: bGChange }}
        ref={divRef}
        className="target"
      >
        {showTextField && (
          // title
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              // width: "30px",
            }}
          >
            <TextField
              placeholder="Title"
              variant="standard"
              InputProps={{
                disableUnderline: true,
                style: {
                  fontWeight: "400",
                  fontSize: "1.25rem",
                },
              }}
              style={{ marginBotton: 10, width: "100%" }}
              onChange={onTextChange}
              name="heading"
              value={addNote.heading}
            ></TextField>
            <CToolTip
              title={addNote.pin ? "Unpin note" : "Pin note"}
              onClick={() => {
                handlePinned();
              }}
              className="ruperta"
            >
              <StyledIconButton edge="start">
                {addNote.pin ? <PushPinIcon /> : <PushPinOutlinedIcon />}
              </StyledIconButton>
            </CToolTip>
          </Box>
        )}
        {/* take a note */}
        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },

            justifyContent: "space-between",
            alignItems: { xs: "flex-start", sm: "center" },
            width: "100%",
          }}
        >
          <TextField
            placeholder="Take a note..."
            variant="standard"
            InputProps={{ disableUnderline: true }}
            multiline
            maxRows={Infinity}
            onClick={onTextAreaClick}
            onChange={onTextChange}
            name="text"
            value={addNote.text}
            sx={{ width: "100%" }}
          ></TextField>
          {!showTextField && (
            <Box sx={{ display: "flex", gap: 2 }}>
              <CToolTip title="New list">
                <StyledIconButton
                  // aria-label="open drawer"
                  edge="start"
                  size="large"
                  disabled
                >
                  <CheckBoxOutlinedIcon
                    sx={{
                      "&:hover": {
                        color: "#202124",
                      },
                    }}
                  />
                </StyledIconButton>
              </CToolTip>
              <CToolTip title="New note with drawing">
                <StyledIconButton
                  // aria-label="open drawer"
                  edge="start"
                  size="large"
                  disabled
                >
                  <BrushOutlinedIcon
                    sx={{
                      "&:hover": {
                        color: "#202124",
                      },
                    }}
                  />
                </StyledIconButton>
              </CToolTip>
              <CToolTip title="New note with image">
                <StyledIconButton
                  // aria-label="open drawer"
                  edge="start"
                  size="large"
                  disabled
                >
                  <ImageOutlinedIcon
                    sx={{
                      "&:hover": {
                        color: "#202124",
                      },
                    }}
                  />
                </StyledIconButton>
              </CToolTip>
            </Box>
          )}
        </Box>
        {/* icons close */}
        <Box>
          {showTextField && (
            <Icons>
              {/* <CToolTip>adasd</CToolTip> */}
              <CToolTip title="Background options">
                <StyledIconButton
                  // aria-label="open drawer"
                  edge="start"
                  // onClick={handleClickBG}

                  onClick={handleClickPopover}
                >
                  <ColorLensOutlinedIcon
                    sx={{
                      fontSize: 20,
                      "&:hover": {
                        color: "#202124",
                      },
                    }}
                  />
                </StyledIconButton>
              </CToolTip>
              <Button
                variant="text"
                disableRipple
                sx={{
                  color: "#5f6368",
                  boxShadow: "none",
                  textTransform: "none",
                  fontWeight: 500,
                  fontSize: 14,
                  padding: "6px 12px",
                  // border: "1px solid",
                  lineHeight: 1.5,
                  // backgroundColor: "#0063cc",
                  borderColor: "#0063cc",

                  "&:hover": {
                    color: "inherit",
                    // backgroundColor: "#f5",
                    // borderColor: "#0062cc",
                    // boxShadow: "none",
                  },
                }}
                onClick={handleClickAway}
              >
                Close
              </Button>
            </Icons>
          )}
        </Box>
        <BasicPopover
          anchorElPopover={anchorElPopover}
          handleClosePopover={handleClosePopover}
          setBGChange={setBGChange}
          changeBGColor={changeBGColor}
          itemClicked={itemClicked}
          handleItemClicked={handleItemClicked}
        ></BasicPopover>
      </Container>
    </ClickAwayListener>
  );
};
export default Form;
