import React from "react";

export default function RegistrationView() {
  const REGISTER_FORM = {
    username: "",
    email: "",
    password: "",
  };
  const [input, setInput] = useState(REGISTER_FORM);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const options = {
        method: "POST",
        headers: { "Content-Type": "application/json" },

        body: JSON.stringify({
          username: input.username,
          password: input.password,
          email: input.email,
        }),
      };
      const response = await fetch(API.LOGIN, options);
      if (response.ok) {
        // const data = await response.json();
        // setToken(data.token);
        // setUser(data.user);
      } else {
        console.log("Error");
      }
    } catch (err) {
      console.log("Server Not responding", err);
    }
    setInput(LOGIN_FORM);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Container>
          <Grid container spacing={2}>
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
                type="password"
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
