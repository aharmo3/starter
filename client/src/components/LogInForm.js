import React, { useState, useContext } from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";
import Form, { FormContext } from "./Form";

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
  const formContext = useContext(FormContext);
  const { form, handleSubmit } = formContext;
  // body of request, token, callback
  const submitStuff = async (form) => {
    // handleSubmit();
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
      window.location.reload();
    });
  };

  return (
    <>
      <Form submit={submitStuff} formInitialValues={LOGIN_FORM}>
        <FormInput label="Username" name="username" />
        <FormInput label="Password" name="password" />
        <Grid sm={12} item>
          <Button size="large" variant="contained" type="submit">
            Submit
          </Button>
        </Grid>
      </Form>
    </>
  );
}
