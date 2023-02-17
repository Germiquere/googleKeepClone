import { React, useContext } from "react";
import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  RestoreFromTrashOutlined as Restore,
  DeleteForeverOutlined as Delete,
} from "@mui/icons-material";
import IconButton from "@mui/material/IconButton";
import { DataContext } from "../../context/DataProvider";
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
const StyledIconButton = styled(IconButton)`
  &:hover {
    background-color: rgba(95, 99, 104, 0.157);
    opacity: 0.87;
  }
`;
const StyledCard = styled(Card)`
  max-width: 240px;
  margin: 8px;
  box-shadow: none;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  // background-color: #a7ffeb;
`;
const DeleteNote = ({ note }) => {
  const {
    notes,
    setNotes,
    archiveNotes,
    setArchiveNotes,
    deleteNotes,
    setDeleteNotes,
  } = useContext(DataContext);
  const restoreNote = (note) => {
    const newArray = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(newArray);
    setNotes((prevArr) => [note, ...prevArr]);
  };
  const deletedNotes = (note) => {
    const newArray = deleteNotes.filter((data) => data.id !== note.id);
    setDeleteNotes(newArray);
  };
  return (
    <StyledCard sx={{ backgroundColor: note.background }}>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <CToolTip title="Delete forever">
          <StyledIconButton
            style={{ width: 32, height: 32 }}
            onClick={() => deletedNotes(note)}
          >
            <Delete fontSize="small" sx={{ marginLeft: "auto" }}></Delete>
          </StyledIconButton>
        </CToolTip>
        <CToolTip title="Restore">
          <StyledIconButton
            style={{ width: 32, height: 32 }}
            onClick={() => restoreNote(note)}
          >
            <Restore fontSize="small"></Restore>
          </StyledIconButton>
        </CToolTip>
      </CardActions>
    </StyledCard>
  );
};

export default DeleteNote;
