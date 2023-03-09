import React, { useContext } from "react";
import Form, { FormContext } from "./Form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

export default function FormInput(props) {
  const formContext = useContext(FormContext);
  const { form, handleFormChange } = formContext;

  const { label, type = "text", name, required } = props;

  return (
    <Grid sm={12} item>
      <TextField
        label={label}
        type={type}
        required={required}
        variant="outlined"
        fullWidth
        margin="normal"
        name={name}
        value={form[name]}
        onChange={handleFormChange}
      />
    </Grid>
  );
}
