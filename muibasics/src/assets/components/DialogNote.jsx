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

const Container = styled(DialogContent)`
  justify-self: center;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 500px;
  box-shadow: 0 1px 2px 0 rgb(60 64 67/ 30%), 0 2px 6px 2px rgb(60 64 67/ 15%);
  //   box-shadow: none;
  padding: 10px 15px;
  border-radius: 8px;
  border-color: #e0e0e0;
  // min-height: 100px;
  margin: auto;
  // overflow-y: scroll;
`;
const DialogNote = ({ open, handleClose, note }) => {
  const onHeadingChange = (e) => {
    note.heading = e.target.value;
  };

  const onTextChange = (e) => {
    note.text = e.target.value;
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        onClickAway={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        // sin usassr paper props no podia cambiar el color
        PaperProps={{
          style: {
            backgroundColor: "#a7ffeb",
            overflow: "hidden",
          },
        }}
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

        {/* <DialogTitle id="alert-dialog-title">{note.heading}</DialogTitle>
        <DialogContent>
          <DialogContentText id={note.id}>{note.text}</DialogContentText>
        </DialogContent> */}
        {/* <DialogActions>
          <Button onClick={false}>Disagree</Button>
          <Button onClick={false} autoFocus>
            Agree
          </Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
};

export default DialogNote;
