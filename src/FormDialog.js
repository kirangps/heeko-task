import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogTitle from "@material-ui/core/DialogTitle";
import CreateShape from "./CreateShape";

export default function FormDialog() {
  const [open, setOpen] = useState(false);
  const [hover, setHover] = useState({});
  const [shape, setShape] = useState({
    id: Math.floor(Math.random() * 1000),
    shape: "",
    height: 0,
    width: 0,
    xpos: 0,
    ypos: 0
  });
  const [allShapes, setAllShapes] = useState([]);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCreate = () => {
    setOpen(false);
    setAllShapes([...allShapes, shape]);
  };

  const handleChange = (e) => {
    setShape({ ...shape, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Button variant="outlined" className="but1" color="primary" onClick={handleClickOpen}>
        Create New Shape
      </Button>
      <div className="move">
        <h1> Shapes </h1>
        <p> {hover.shape ? hover.shape : " -- "} </p>
        <p> X-Position - {hover?.xpos} </p>
        <p> Y-Position - {hover?.ypos} </p>
      </div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="form-dialog-title"
      >
        <DialogTitle id="form-dialog-title">Create Shape</DialogTitle>
        <DialogContent>
          <TextField
            autoFocus
            margin="dense"
            id="shape"
            name="shape"
            label="Enter Shape Name"
            type="text"
            fullWidth
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="height"
            name="height"
            label="Height"
            type="number"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="width"
            name="width"
            label="Width"
            type="number"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="xpos"
            name="xpos"
            label="X-Position"
            type="number"
            onChange={handleChange}
          />
          <TextField
            autoFocus
            margin="dense"
            id="ypos"
            name="ypos"
            label="Y-Position"
            type="number"
            onChange={handleChange}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCreate} color="primary">
            Create New Shape
          </Button>
        </DialogActions>
      </Dialog>
      <div style={{ position: "relative" }}>
        <CreateShape allShapes={allShapes} shape={shape} setHover={setHover} />{" "}
      </div>
    </div>
  );
}