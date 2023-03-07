import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { API, LS_KEYS } from "../constants";
import useLocalStorage from "../useLocalStorage";
import useFetch from "../useFetch";
export default function LogInView() {
  const LOGIN_FORM = {
    username: "",
    password: "",
  };
  const [input, setInput] = useState(LOGIN_FORM);
  const [token, setToken] = useLocalStorage(LS_KEYS.TOKEN);
  const [user, setUser] = useLocalStorage(LS_KEYS.USER);
  const [{}, fetchData] = useFetch(API.LOGIN);
  const navigate = useNavigate();
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: {
        username: input.username,
        password: input.password,
      },
    };
    fetchData(options, (data) => {
      setToken(data.token);
      setUser(data.user);
      navigate("/");
    });

    setInput(LOGIN_FORM);
  };
  const handleChange = (e) => {
    setInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <Container>
          <Grid container spacing={2}>
            <Grid sm={12} item>
              <TextField
                label="Username"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                name="username"
                value={input.username}
                onChange={handleChange}
              />
            </Grid>
            <Grid sm={12} item>
              <TextField
                label="Password"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                name="password"
                value={input.password}
                onChange={handleChange}
              />
            </Grid>
            <Grid sm={12} item>
              <Button size="large" variant="contained" type="submit">
                Submit
              </Button>
            </Grid>
          </Grid>
        </Container>
      </form>
    </>
  );
}
