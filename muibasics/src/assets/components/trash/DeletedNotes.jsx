import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
import EmptyDeleteNotes from "./EmptyDeleteNotes";
//components
import DeletedNote from "./DeletedNote";
import { DataContext } from "../../context/DataProvider";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const DeletedNotes = () => {
  const { deleteNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {deleteNotes.length > 0 ? (
          <Grid container sx={{ marginTop: 2 }}>
            {deleteNotes.map((note) => (
              <Grid item>
                <DeletedNote note={note} key={note.id}></DeletedNote>
              </Grid>
            ))}
            {/* <Note></Note> */}
          </Grid>
        ) : (
          <EmptyDeleteNotes></EmptyDeleteNotes>
          // <div>hhola</div>
        )}
      </Box>
    </Box>
  );
};
export default DeletedNotes;
