import * as React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Masonry from "@mui/lab/Masonry";

const heights = [
  150, 30, 90, 70, 110, 150, 130, 80, 50, 90, 100, 150, 30, 50, 80,
];

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(0.5),
  textAlign: "center",
  color: theme.palette.text.secondary,
  width: 240,
}));

export default function BasicMasonry() {
  return (
    <Box sx={{ width: "100%" }}>
      <Masonry
        columns={{
          xs: 1,
          sm: 2,
          md: 5,
        }}
        spacing={10}
      >
        {heights.map((e, index) => (
          <Item key={index}>{"lorem"}</Item>
        ))}
      </Masonry>
    </Box>
  );
}
