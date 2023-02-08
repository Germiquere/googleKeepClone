import { Box } from "@mui/material";
import { useContext } from "react";
import Notes from "./notes/Notes";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import SwiperDrawer from "./SwiperDrawer";
import DeletedNotes from "./trash/DeletedNotes";
import Archives from "./archives/Archives";
import { DataContext } from "../context/DataProvider";

const Home = () => {
  const { notes } = useContext(DataContext);
  const orderNotes = (n) => {
    return n.sort((a, b) => {
      if (a.pin === b.pin) return 0;
      if (a.pin === true) return -1;
      // el === true es redundante se puede hacer como hice en el caso de abajo
      if (!a.pin) return 1;
    });
  };
  orderNotes(notes);
  return (
    <Box
      style={{
        display: "flex",
      }}
    >
      <Router>
        <SwiperDrawer></SwiperDrawer>

        <Routes>
          <Route path="/" element={<Notes></Notes>}></Route>
          <Route path="/archive" element={<Archives></Archives>}></Route>
          <Route path="/delete" element={<DeletedNotes></DeletedNotes>}></Route>
        </Routes>
      </Router>
    </Box>
  );
};
export default Home;
