import { React, useContext, useState } from "react";
import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  ArchiveOutlined as Archive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import { DataContext } from "../../context/DataProvider";
import DialogNote from "../DialogNote";

const StyledCard = styled(Card)`
  // width: 240px;
  // margin: 10px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  background-color: #a7ffeb;
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
    fontSize: 13,
    marginTop: "0 !important",
  },
}));
const Note = ({ note }) => {
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
        backgroundColor: note.pin === true ? "red" : "white",
      }}
    >
      <DialogNote
        open={open}
        handleClose={handleClose}
        note={note}
      ></DialogNote>
      <CardContent onClick={handleClickOpen} sx={{ overflowWrap: "anywhere" }}>
        <Typography variant="h6">{note.heading}</Typography>
        <Typography>{note.text}</Typography>
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
