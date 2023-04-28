import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import { Link, useNavigate } from "react-router-dom";
import Avatar from "@mui/material/Avatar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { URL, LS_KEYS } from "../constants";
import "./Header.scss";
import LoginDialog from "./LoginDialog";
import useLocalStorage from "../useLocalStorage";
export default function Header() {
  const [open, setOpen] = useState(false);
  const [token] = useLocalStorage(LS_KEYS.TOKEN);
  const [user] = useLocalStorage(LS_KEYS.USER);
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    window.location.reload();
  };
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <LoginDialog onClose={handleClose} isOpen={open} />

      <AppBar position="static">
        <Toolbar>
          <Link style={{ color: "#fff", textDecoration: "none" }} to={URL.HOME}>
            <Typography variant="logo">Techdel Test</Typography>
            <span className="subtext"> The Bechdel Test for Tech</span>
          </Link>

          <Typography
            variant="h6"
            component="div"
            sx={{ textAlign: "right", flexGrow: 1, marginRight: 10 }}
          >
            <Link
              style={{ color: "#F5E9CF", textDecoration: "none" }}
              to={URL.COMPANIES}
            >
              View Companies
            </Link>
          </Typography>

          {token && (
            <>
              <Avatar sx={{ bgcolor: "#609EA2", marginRight: 2 }}>N</Avatar>
              {/* Welcome, <br />
              {user.username} */}
              <Button color="inherit" onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
          {!token && (
            <>
              {/* <Button color="inherit" onClick={handleClickOpen}>
                Login
              </Button> */}
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
