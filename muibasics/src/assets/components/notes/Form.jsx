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
  pin: "",
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
  const { checked, setChecked } = useContext(CheckedContext);
  const { dale, setDale } = useState(false);
  console.log(checked);
  console.log(note.pin);
  const handleCheckedFalse = () => {
    console.log(checked);
    setChecked(false);
    console.log(note.pin);
  };
  const handleCheckedTrue = () => {
    console.log(checked);
    setChecked(true);
    console.log(note.pin);
  };
  // console.log(note.pin);
  const { notes, setNotes } = useContext(DataContext);
  // console.log(checked);
  const [addNote, setAddNote] = useState({
    ...note,
    id: uuid(),
  });

  const [showTextField, setShowTextField] = useState(false);
  const containerRef = useRef();
  // POPPER

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  // POPPER

  const onTextAreaClick = () => {
    setShowTextField(true);
    containerRef.current.style.minHeight = "70px";
  };
  const handleClickAway = () => {
    setShowTextField(false);
    containerRef.current.style.minHeight = "30px";
    setAddNote({ ...note, id: uuid() });
    // si alguno de esos dos campos esta vacio no se ejecuta el setNotes

    if (addNote.text || addNote.heading) {
      setNotes((prevArr) => [addNote, ...prevArr]);
    } else {
      console.log(checked);
      setChecked(false);
    }
    setChecked(false);
  };
  const onToggleChecked = () => {
    console.log("hice checked o no checked");
    setChecked(!checked);
    console.log(checked);
    let changeNote = {
      ...addNote,
      pin: !checked ? true : false,
    };
    setAddNote(changeNote);
    // console.log(changeNote.pin);
    console.log(note.pin);
  };
  const onTextChange = (e) => {
    let changeNote = {
      ...addNote,
      [e.target.name]: e.target.value,
    };

    console.log(changeNote.pin);
    setAddNote(changeNote);
  };

  const id = open ? "simple-popper" : undefined;
  return (
    <ClickAwayListener onClickAway={handleClickAway}>
      <Container ref={containerRef}>
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
              title={checked ? "Unpin note" : "Pin note"}
              onClick={onToggleChecked}
            >
              <StyledIconButton edge="start">
                {/* <PushPinOutlinedIcon
                  sx={{
                    "&:hover": {
                      color: "#202124",
                    },
                  }}
                /> */}
                <Checkbox
                  sx={{
                    color: "#5f6368",
                    "&:hover": {
                      color: "#202124",
                    },
                  }}
                  icon={<PushPinOutlinedIcon />}
                  checkedIcon={<PushPinIcon sx={{ color: "#5f6368" }} />}
                  disableRipple
                />
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
                  onClick={handleClick}
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
              <Popper
                id={id}
                open={open}
                anchorEl={anchorEl}
                style={{
                  position: "absolute",
                  transform: "translate(-50%, -50%)",
                }}
              >
                <Box sx={{ border: 1, p: 1, bgcolor: "background.paper" }}>
                  The content of the Popper.
                </Box>
              </Popper>
            </Icons>
          )}
        </Box>
      </Container>
    </ClickAwayListener>
  );
};
export default Form;
