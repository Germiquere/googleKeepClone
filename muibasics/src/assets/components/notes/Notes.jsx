import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useContext, useState } from "react";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";
// import Masonry from "@mui/lab/Masonry";
// import Paper from "@mui/material/Paper";
//components
import Form from "./Form";
import Note from "./Note";

import { DataContext } from "../../context/DataProvider";
import { SearchContext } from "../../context/SearchProvider";
import EmptyNotes from "./EmptyNotes";

// const MuiMasonry = styled(Masonry)({
//   ".MuiMasonry-root": {
//     backgroundColor: "red"
//   }
// });

// import TestDialog from "../TestDialog";
const DrawerHeader = styled("div")(({ theme }) => ({
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
const Item = styled(Paper)(({ theme }) => ({
  // backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  // ...theme.typography.body2,
  // padding: theme.spacing(0.5),
  // textAlign: "center",
  // color: theme.palette.text.secondary,
  width: 240,
  // backgroundColor: "transparent",
  // border: "none",
  boxShadow: "none",
}));
const Notes = ({ orderNotes }) => {
  const { notes } = useContext(DataContext);

  const { filter } = useContext(SearchContext);

  const filteredNotes = notes.filter(
    (note) =>
      note.text.toLowerCase().includes(filter.toLowerCase()) ||
      note.heading.toLowerCase().includes(filter.toLowerCase())
  );
  return (
    <Box sx={{ display: "flex", width: "100%" }}>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <DrawerHeader />
        <Form></Form>

        {/* <TestMansory></TestMansory> */}
        {filteredNotes.length > 0 ? (
          <Box sx={{ display: "flex", justifyContent: "center" }}>
            <Masonry
              columns={{
                xs: 1,
                sm: 2,
                md: 5,
              }}
              sx={{ marginTop: 3 }}
              spacing={2}
              autoFill={true}
            >
              {filteredNotes.map((note) => (
                <Item key={note.id} sx={{ width: "100%" }}>
                  <Note note={note} orderNotes={orderNotes}></Note>
                </Item>
              ))}
            </Masonry>
          </Box>
        ) : (
          <EmptyNotes></EmptyNotes>
        )}
      </Box>
    </Box>
  );
};
export default Notes;
// *****************MI CODIGO ********************
// <Box sx={{ display: "flex", width: "100%" }}>
//   <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
//     <DrawerHeader />
//     <Form></Form>

//     {filteredNotes.length > 0 ? (
//       <Grid
//         container
//         sx={{
//           marginTop: 2,
//           gridTemplateColumns: "repeat(auto-fill, 240px)",
//         }}
//         spacing={2}
//       >
//         {filteredNotes.map((note) => (
//           <Grid item>
//             <Note note={note} key={note.id}></Note>
//           </Grid>
//         ))}
//       </Grid>
//     ) : (
//       <EmptyNotes></EmptyNotes>
//     )}
//   </Box>
// </Box>

// *****************MI CODIGO ********************
