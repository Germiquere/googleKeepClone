import { React, useContext } from "react";
import { CardActions, CardContent, Card, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import IconButton from "@mui/material/IconButton";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";
import {
  UnarchiveOutlined as UnArchive,
  DeleteOutlineOutlined as Delete,
} from "@mui/icons-material";
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
const Archive = ({ note }) => {
  const { notes, setNotes, archiveNotes, setArchiveNotes, setDeleteNotes } =
    useContext(DataContext);
  const unArchiveNotes = (note) => {
    const newArray = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(newArray);
    setNotes((prevArr) => [note, ...prevArr]);
  };
  const deleteNotes = (note) => {
    const newArray = archiveNotes.filter((data) => data.id !== note.id);
    setArchiveNotes(newArray);
    setDeleteNotes((prevArr) => [note, ...prevArr]);
  };
  return (
    <StyledCard sx={{ backgroundColor: note.background }}>
      <CardContent>
        <Typography>{note.heading}</Typography>
        <Typography>{note.text}</Typography>
      </CardContent>
      <CardActions>
        <CToolTip title="Unarchive">
          <StyledIconButton
            style={{ width: 32, height: 32 }}
            onClick={() => unArchiveNotes(note)}
          >
            <UnArchive fontSize="small" sx={{ marginLeft: "auto" }}></UnArchive>
          </StyledIconButton>
        </CToolTip>
        <CToolTip title="Delete">
          <StyledIconButton
            style={{ width: 32, height: 32 }}
            onClick={() => deleteNotes(note)}
          >
            <Delete fontSize="small"></Delete>
          </StyledIconButton>
        </CToolTip>
      </CardActions>
    </StyledCard>
  );
};

export default Archive;
