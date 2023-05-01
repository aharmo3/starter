import React, { useState, createContext, FC, ReactEventHandler } from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";

export type FormContextType = {
  form: {[key: string]: any;}
  handleSubmit: (e:React.FormEvent) => any,
  handleFormChange?: (event: React.ChangeEvent<HTMLInputElement>) => any;
}
export const FormContext= createContext<FormContextType>({
  form: {},
  handleSubmit: () => {},
});

type FormProps = {
  children: JSX.Element | JSX.Element[],
  formInitialValues: {[key: string]: any},
  submit: (form:{[key: string]: any}) => void,
}
const Form: FC<FormProps> = ({ children, formInitialValues, submit }) => {
  const [form, setForm] = useState(formInitialValues);
  const handleFormChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    const updatedForm = {
      ...form,
      [name]: value,
    };

    // Update state
    setForm(updatedForm);
  };
  const handleSubmit = (e:React.FormEvent) => {
    e.preventDefault();
    submit(form);
    setForm(formInitialValues);
    return form;
  };
  return (
    <form onSubmit={handleSubmit}>
      <FormContext.Provider
        value={{
          form,
          handleFormChange,
          handleSubmit,
        }}
      >
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: 10, backgroundColor: "white" }}
          >
            {children}
          </Grid>
        </Container>
      </FormContext.Provider>
    </form>
  );
}

export default Form;