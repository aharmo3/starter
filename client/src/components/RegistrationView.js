import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";

import Container from "@mui/material/Container";
import Grid from "@mui/material/Unstable_Grid2";
import { API, LS_KEYS } from "../constants";
import useFetch from "../useFetch";

export default function RegistrationView() {
  const REGISTER_FORM = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(REGISTER_FORM);
  const { fetchData } = useFetch(API.REGISTER);
  const handleChange = (e) => {
    setInput((state) => ({ ...state, [e.target.name]: e.target.value }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const options = {
      method: "POST",
      body: {
        username: input.username,
        password: input.password,
        email: input.email,
      },
    };
    fetchData(options, (data) => {
      console.log("data", data);
    });
    setInput(REGISTER_FORM);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          <Grid
            container
            spacing={2}
            style={{ marginTop: 10, backgroundColor: "white" }}
          >
            <Grid sm={12} item>
              <TextField
                label="Email"
                variant="outlined"
                fullWidth
                required
                margin="normal"
                name="email"
                value={input.email}
                onChange={handleChange}
              />
            </Grid>
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
    </div>
  );
}
