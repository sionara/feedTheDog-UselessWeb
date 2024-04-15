import * as React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function Instructions() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <Button variant="outlined" onClick={handleClickOpen}>
        Instructions
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"How To Play"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Drag the food over the dog to feed her! Every time you feed her, the
            counter will go up. Feed her until she is full!
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>I Understand</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
