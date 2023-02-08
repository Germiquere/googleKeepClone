import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import { useState, useContext } from "react";
import { SearchContext } from "../context/SearchProvider";

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: "#f1f3f4",
  color: "#5f6368",

  //   "&:hover": {
  //     backgroundColor: "#ffffff",
  //     boxShadow:
  //       "     0 16px 10px 0 rgb(0 0 0 / 14%), 0 11px 18px 0 rgb(0 0 0 / 12%), 0 13px 5px -1px rgb(0 0 0 / 20%)",
  //   },
  // marginLeft: 0,
  width: "100%",
  // paddingLeft: 100,
  [theme.breakpoints.up("sm")]: {
    // marginLeft: theme.spacing(10),
    // maxWidth: 600,
    // width: "auto",
  },
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  svg: {
    color: "#5f6368",
  },
  zIndex: 100,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  // right: "100px",

  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    // position: "absolute",
    // maxWidth: "600px",
    height: "-30px",
    "&::placeholder": {
      color: "#5f6368",
    },
    "&:focus": {
      // width: "150px",
      borderRadius: theme.shape.borderRadius,
      backgroundColor: "#ffffff",
      color: "#5f6368",
      boxShadow:
        " 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%)",
    },
    [theme.breakpoints.up("sm")]: {
      // maxWidth: 600,
      // width: "542px",
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));

const SearchBar = () => {
  const { setFilter } = useContext(SearchContext);
  const search = (e) => {
    setFilter(e.target.value);
    console.log(e.target.value);
  };
  return (
    <Search>
      <SearchIconWrapper>
        <SearchIcon />
      </SearchIconWrapper>
      <StyledInputBase
        placeholder="Search"
        inputProps={{ "aria-label": "search" }}
        onChange={search}
      />
    </Search>
  );
};

export default SearchBar;
