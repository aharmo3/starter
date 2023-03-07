import React, { useState } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Form, { FormContext } from "./Form";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { API, LS_KEYS } from "../constants";
import useLocalStorage from "../useLocalStorage";
import useFetch from "../useFetch";
import FormInput from "./FormInput";
export default function LogInForm() {
  const LOGIN_FORM = {
    username: "",
    password: "",
  };
  const [token, setToken] = useLocalStorage(LS_KEYS.TOKEN);
  const [user, setUser] = useLocalStorage(LS_KEYS.USER);
  const { fetchData } = useFetch(API.LOGIN);
  const navigate = useNavigate();
  const handleSubmit = async (form) => {
    const options = {
      method: "POST",
      body: {
        username: form.username,
        password: form.password,
      },
    };
    fetchData(options, (data) => {
      setToken(data.token);
      setUser(data.user);
      navigate("/");
    });
  };

  return (
    <>
      <Form
        submit={(form) => {
          handleSubmit(form);
        }}
        formInitialValues={LOGIN_FORM}
      >
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: 10, backgroundColor: "white" }}
          >
            <Grid sm={12} item>
              <FormInput label="Username" name="username" />
            </Grid>
            <Grid sm={12} item>
              <FormInput label="Password" name="password" />
            </Grid>
            <Grid sm={12} item>
              <Button size="large" variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </Form>
    </>
  );
}
