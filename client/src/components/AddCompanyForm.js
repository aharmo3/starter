import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";

import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Unstable_Grid2";
import { transformData } from "../helpers";
import { API } from "../constants";
import TechnologyDropdown from "./TechnologyDropdown";

export default function AddCompanyForm() {
  const FORM_ENTRY = {
    repo_name: "",
    team_name: "",
    technology: "",
    company_name: "",
  };
  const [input, setInput] = useState(FORM_ENTRY);
  const [showSuccess, setShowSuccess] = useState(false);
  const handleChange = (e) => {
    setInput((state) => ({
      ...state,
      [e.target.name]: e.target.value,
    }));
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    setShowSuccess(false);
  };
  const handleAutoComplete = (val) => {
    setInput((state) => ({ ...state, technology: val }));
  };
  const addCompany = async (input) => {
    try {
      let options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(transformData(input)),
      };

      let response = await fetch(`${API.POST_ALL}`, options);
      if (response.ok) {
        let listItem = await response.json();
        setShowSuccess(true);
      } else {
        console.log(`Server error: ${response.status} ${response.statusText}`);
      }
    } catch (err) {
      console.log(`Server Error`);
    }
  };
  //addCompany
  const handleSubmit = (e) => {
    e.preventDefault();
    addCompany(input);
    setInput(FORM_ENTRY);
  };

  return (
    <Container>
      <form onSubmit={handleSubmit}>
        <Snackbar
          open={showSuccess}
          autoHideDuration={6000}
          onClose={handleClose}
        >
          <Alert
            onClose={handleClose}
            severity="success"
            sx={{ width: "100%" }}
          >
            Your Request was successfully submitted!
          </Alert>
        </Snackbar>
        <Grid container spacing={2}>
          <Grid sm={12} item>
            <Typography variant="h5">Company:</Typography>
          </Grid>

          <Grid sm={12} item>
            <TextField
              label="Company Name"
              variant="outlined"
              fullWidth
              required
              margin="normal"
              name="company_name"
              value={input.company_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={12} item>
            <Typography variant="h5">Project or Codebase Info</Typography>
          </Grid>
          <Grid sm={6} item>
            <TextField
              label="Repo Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="repo_name"
              value={input.repo_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={6} item>
            <TextField
              label="Team Name"
              variant="outlined"
              fullWidth
              margin="normal"
              name="team_name"
              value={input.team_name}
              onChange={handleChange}
            />
          </Grid>
          <Grid sm={6} item>
            {/* <TechnologyDropdown
              onSelect={handleAutoComplete}
              value={input.technology}
            /> */}
          </Grid>
          <Grid sm={12} item>
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
          <Grid sm={12} item>
            <Button size="large" variant="contained" type="submit">
              Submit
            </Button>
          </Grid>
        </Grid>
      </form>
    </Container>
  );
}
