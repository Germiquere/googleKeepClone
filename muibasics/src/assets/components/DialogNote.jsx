import { React, useContext, useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import { Box, TextField } from "@mui/material";
import ClickAwayListener from "@mui/base/ClickAwayListener";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import { styled } from "@mui/material/styles";
import { DataContext } from "../context/DataProvider";
import PerfectScrollbar from "perfect-scrollbar";

const Container = styled(DialogContent)(({ theme }) => ({
  justifySelf: "scenter",
  display: "flex",
  flexDirection: "column",
  // width: "600px",
  // maxWidth: "500px",

  // [theme.breakpoints.up("md")]: {
  //   // width: 600,

  //   maxWidth: "600px",
  // },
}));

const DialogNote = ({ open, handleClose, note }) => {
  const onHeadingChange = (e) => {
    note.heading = e.target.value;
  };

  const onTextChange = (e) => {
    note.text = e.target.value;
  };

  return (
    <Dialog
      open={open}
      onClose={handleClose}
      onClickAway={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
      // sin usassr paper props no podia cambiar el color
      PaperProps={{
        style: {
          backgroundColor: note.background,
          overflow: "hidden",
        },
      }}
      sx={
        {
          // width: "300px",
        }
      }
    >
      <Container>
        <TextField
          placeholder="Title"
          variant="standard"
          multiline
          InputProps={{
            disableUnderline: true,
            style: { fontWeight: "400", fontSize: "1.3rem" },
          }}
          style={{
            marginBotton: 10,
            // width: "300px",
            width: "100%",
            maxWidth: 700,
            backgroundColor: "red",
          }}
          onChange={onHeadingChange}
          name="heading"
          defaultValue={note.heading}
          // cuando seteas disable to false lo que haces es que puedas editar el defaultvalue
          disabled={false}
          // defaultValue = {note.heading}
        ></TextField>

        <TextField
          placeholder="Note"
          variant="standard"
          InputProps={{ disableUnderline: true }}
          multiline
          maxRows={Infinity}
          // onClick={onTextAreaClick}
          onChange={onTextChange}
          name="text"
          defaultValue={note.text}
          disabled={false}
          autoFocus={true}
        ></TextField>
      </Container>
    </Dialog>
  );
};

export default DialogNote;
