import React, {FC,  useState, forwardRef, useContext } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import Slide from "@mui/material/Slide";
import LogInView from "./LogInForm";
import Form, { FormContext } from "./Form";
import { TransitionProps } from "@mui/material/transitions";

const Transition = React.forwardRef(function Transition(
  props: TransitionProps & {
    children: React.ReactElement<any, any>;
  },
  ref: React.Ref<unknown>,
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

type LoginDialog = {
  onClose: () => void,
  isOpen: boolean
}

const LoginDialog: FC<LoginDialog> = ({onClose, isOpen}) => {

  const formContext = useContext(FormContext);
  const { form, handleSubmit, handleFormChange } = formContext;

  return (
    <div>
      <Dialog
        open={isOpen}
        TransitionComponent={Transition}
        keepMounted
        onClose={onClose}
        aria-describedby="alert-dialog-slide-description"
      >
        <DialogTitle>Login</DialogTitle>
        <DialogContent>
          <LogInView />
          <DialogContentText>
            New to Techdel? Create Your Account Now
          </DialogContentText>
        </DialogContent>
        {/* <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose}>Agree</Button>
        </DialogActions> */}
      </Dialog>
    </div>
  );
}

export default LoginDialog;

