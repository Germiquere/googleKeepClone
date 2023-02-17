import { React, useContext, useState } from "react";
import {
  CardActions,
  CardContent,
  Card,
  Typography,
  Checkbox,
  TextField,
} from "@mui/material";

import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import PushPinOutlinedIcon from "@mui/icons-material/PushPinOutlined";
import PushPinIcon from "@mui/icons-material/PushPin";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { DataContext } from "../../context/DataProvider";
import { CheckedContext } from "../../context/CheckedState";
import DialogNote from "../DialogNote";
import { Box } from "@mui/system";

const StyledCard = styled(Card)`
  // width: 240px;
  // margin: 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: white;
  // cursor: pointer;
`;
const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
    opacity: 0.87;
  }
`;
const CToolTip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    // backgroundColor: theme.palette.common.white,
    // color: "rgba(0, 0, 0, 0.87)",
    // boxShadow: theme.shadows[1],
    // fontSize: 13,
    marginTop: "0 !important",
  },
}));
const Note = ({ note, orderNotes }) => {
  const { notes, setNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const archiveNotes = (note) => {
    const newArray = notes.filter((data) => data.id !== note.id);
    setNotes(newArray);
    setArchiveNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNotes = (note) => {
    const newArray = notes.filter((data) => data.id !== note.id);
    setNotes(newArray);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };

  // const [pinNote, setPinNote] = useState(note.pin);
  const handleNotePin = () => {
    // setPinNote(!pinNote);
    // note.pin = pinNote;
    // // esto no
    // console.log(id);
    // const noteToUpdate = notes.find((note) => note.id === id);
    // console.log(noteToUpdate.id);
    const changeNotes = notes.map((n) => {
      if (n.id === note.id) {
        return { ...n, pin: !n.pin };
      }
      return n;
    });
    setNotes(changeNotes);
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <StyledCard
      sx={{
        backgroundColor: note.background,
        position: "relative",
      }}
    >
      <DialogNote
        open={open}
        handleClose={handleClose}
        note={note}
      ></DialogNote>

      <CardContent sx={{ overflowWrap: "anywhere" }}>
        <Box sx={{ display: "block", position: "relative" }}>
          <CToolTip
            title={note.pin === true ? "Unpin note" : "Pin note"}
            onClick={() => {
              handleNotePin();
            }}
          >
            <StyledIconButton
              edge="start"
              // size="small"
              sx={{
                position: "absolute",
                right: 0,
                // top: 6,

                height: 40,
                width: 40,
                "&:hover": {
                  color: "#202124",
                },
              }}
            >
              {note.pin === true ? <PushPinIcon /> : <PushPinOutlinedIcon />}
            </StyledIconButton>
          </CToolTip>
          <Box
            sx={{
              width: 40,
              height: 30,
              // backgroundColor: "red",
              float: "right",
              // display: "none",
            }}
          ></Box>
          <Typography variant="h6" onClick={handleClickOpen}>
            {note.heading}
          </Typography>
        </Box>
        {/* <Typography variant="h6">{note.heading}</Typography> */}
        <Typography onClick={handleClickOpen}> {note.text}</Typography>
      </CardContent>
      <CardActions>
        <CToolTip title="Archive">
          <StyledIconButton
            style={{ width: 32, height: 32 }}
            onClick={() => archiveNotes(note)}
          >
            <Archive fontSize="small"></Archive>
          </StyledIconButton>
        </CToolTip>
        <CToolTip title="Delete">
          <StyledIconButton onClick={() => deleteNotes(note)}>
            <Delete fontSize="small"></Delete>
          </StyledIconButton>
        </CToolTip>
      </CardActions>
    </StyledCard>
  );
};

export default Note;
