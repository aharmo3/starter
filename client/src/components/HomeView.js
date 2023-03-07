import React from "react";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import { URL } from "../constants";
import CodeIcon from "@mui/icons-material/Code";
import AddCompanyForm from "./AddCompanyForm";
import { API, LS_KEYS } from "../constants";
import useLocalStorage from "../useLocalStorage";
import "./HomeView.scss";
import LogInForm from "./LogInForm";

export default function HomeView(props) {
  const [token] = useLocalStorage(LS_KEYS.TOKEN);

  return (
    <main className="home">
      <section className="women">
        <Container>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <h2 className="emphasis" style={{ textAlign: "center" }}>
                <CodeIcon
                  style={{
                    width: 40,
                    height: 40,

                    color: "#E96479",
                  }}
                />
                <br />
                Does your codebase
                <br /> pass the test?
              </h2>
              <ol>
                <li>
                  It has to have at least two functions written by two separate
                  women+ engineers.
                </li>
                <li>These two functions call each other</li>
              </ol>
              <Link to={URL.COMPANIES}>
                <Button size="large" variant="contained">
                  View Companies
                </Button>
              </Link>
            </Grid>
            <Grid
              item
              sm={6}
              style={{ background: "#fff", padding: 20, marginTop: 20 }}
            >
              {token && <AddCompanyForm />}
              {!token && <LogInForm />}
            </Grid>
          </Grid>
        </Container>
      </section>
      <section className="second">
        <Container>
          <Grid container spacing={2}>
            <Grid sm={6} item>
              <h2 className="emphasis">What is a Techdel Test?</h2>
              <p>
                Based off of Bechdel Test, or Bechdel-Wallace Test, is a simple
                test which names the following three criteria: (1) it has to
                have at least two women in it, who (2) who talk to each other,
                about (3) something besides a man.
              </p>
              <p>
                A Techdel Test, is a method of measuring the influence and
                impact that folks who identify as women+ have on a codebase. To
                pass the test, (1) Two separate women+ engineers have to write
                to different functions or methods in production code. (2) These
                functions or methods call each other
              </p>
            </Grid>
            <Grid sm={6} item></Grid>
          </Grid>
        </Container>
      </section>
    </main>
  );
}
