import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useContext } from "react";
//components
import EmptyArchivedNotes from "./EmptyArchivedNotes";
import Archive from "./Archive";
import { DataContext } from "../../context/DataProvider";

const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Archives = () => {
  const { archiveNotes } = useContext(DataContext);
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        {archiveNotes.length > 0 ? (
          <Grid container sx={{ marginTop: 2 }}>
            {archiveNotes.map((archive) => (
              <Grid item>
                <Archive note={archive} key={archive.id}></Archive>
              </Grid>
            ))}
            {/* <Note></Note> */}
          </Grid>
        ) : (
          <EmptyArchivedNotes></EmptyArchivedNotes>
        )}
      </Box>
    </Box>
  );
};
export default Archives;
