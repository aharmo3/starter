import React, { useContext } from "react";
import Form, { FormContext, FormContextType } from "./Form";
import TextField from "@mui/material/TextField";
import Grid from "@mui/material/Unstable_Grid2";

type FormInputProps = {
  label: string,
  type?: string,
  name?: string,
  required?: boolean
}

export default function FormInput(props: FormInputProps) {
  const formContext = useContext<FormContextType>(FormContext);
  const { form, handleFormChange } = formContext;

  const { label, type = "text", name, required } = props;

  return (
    <Grid sm={12}>
      <TextField
        label={label}
        type={type}
        required={required}
        variant="outlined"
        fullWidth
        margin="normal"
        name={name}
        value={form[name as string]}
        onChange={handleFormChange}
      />
    </Grid>
  );
}
