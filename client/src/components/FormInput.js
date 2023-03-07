import React, { useContext } from "react";
import Form, { FormContext } from "./Form";
import TextField from "@mui/material/TextField";

export default function FormInput(props) {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  const { label, type = "text", name } = props;

  return (
    <TextField
      label={label}
      type={type}
      variant="outlined"
      fullWidth
      margin="normal"
      name={name}
      value={form[name]}
      onChange={handleFormChange}
    />
  );
}
