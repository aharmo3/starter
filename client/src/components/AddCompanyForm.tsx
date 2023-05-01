import React, { ChangeEvent, useState } from "react";
import Button from "@mui/material/Button";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { transformData } from "../helpers";
import { API, LS_KEYS } from "../constants";
import Form, { FormContext } from "./Form";
import FormInput from "./FormInput";

import TechnologyDropdown from "./TechnologyDropdown";
import useLocalStorage from "../useLocalStorage";
import useFetch from "../useFetch";

type FormProp =  {[key: string]: any;}
export default function AddCompanyForm() {
  const FORM_ENTRY = {
    repo_name: "",
    team_name: "",
    technology: "",
    company_name: "",
  };
  const [showSuccess, setShowSuccess] = useState(false);
  const [user] = useLocalStorage(LS_KEYS.USER);
  const { fetchData } = useFetch(API.POST_ALL);

  const handleClose = (event: React.SyntheticEvent<any> | Event, reason: any) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccess(false);
  };
  const addCompany = async (form:FormProp) => {
    if (user) {
      const finalInput = { ...form, creator_id: user.id };
      let options = {
        method: "POST",
        body: transformData(finalInput),
      };
      fetchData(options, () => {
        setShowSuccess(true);
      });
    }
  };
  //addCompany
  const handleSubmit = (form: FormProp) => {
    addCompany(form);
  };

  return (
    <Form
      submit={(form: FormProp) => {
        handleSubmit(form);
      }}
      formInitialValues={FORM_ENTRY}
    >
      <Snackbar
        open={showSuccess}
        autoHideDuration={6000}
        onClose={handleClose}
      >
        <Alert severity="success" sx={{ width: "100%" }}>
          Your Request was successfully submitted!
        </Alert>
      </Snackbar>
      <Grid sm={12}>
        <Typography variant="h5">Company:</Typography>
      </Grid>
      <FormInput label="Company Name" name="company_name" />

      <Grid sm={12}>
        <Typography variant="h5">Project or Codebase Info</Typography>
      </Grid>
      <FormInput label="Repo Name" name="repo_name" />
      <FormInput label="Team Name" name="team_name" />

      <Grid sm={6}>
        {/* <TechnologyDropdown
          onSelect={handleAutoComplete}
          value={input.technology}
        /> */}
      </Grid>
      <Grid sm={12}>
        {/*   <Typography variant="h6">
              The Criteria (Select All that Apply)
            </Typography>

           <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    name="questionOne"
                    checked={input.questionOne}
                    onChange={handleChange}
                  />
                }
                label="This codebase has at least two functions or classes that is written by two separate female engineers."
              />
              <FormControlLabel
                control={
                  <Checkbox
                    name="questionTwo"
                    checked={input.questionTwo}
                    onChange={handleChange}
                  />
                }
                label="These two functions call each other"
              />
            </FormGroup> */}
      </Grid>
      <Grid sm={12}>
        <Button size="large" variant="contained" type="submit">
          Submit
        </Button>
      </Grid>
    </Form>
  );
}
