import { TextField, Button } from "@mui/material";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "./register.css";
import { useState } from "react";
import axios from "../../axios";

const isValidGmail = (email) => {
  const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
  return gmailRegex.test(email);
};

const handleRegister = async (username, email, password) => {
  const data = {
    username: username,
    email: email,
    password: password,
  };
  try {
    const res = await axios.post("/auth/register", data);
    console.log(username, email, password);
    console.log(res);
  } catch (err) {
    console.log(err);
  }
};

function Register() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="left-form">
          <LocalLibraryIcon className="logo" />
          <div className="text-container">
            <h1 className="left-header">Let us help you find your IT course for free.</h1>
            <h5 className="left-subheader">
              Our register process is quick and easy, taking no more than 10 minutes to complete.
            </h5>
          </div>
          <div className="card-container">
            <h4 className="text">
              “Everyone needs a coach. It doesn't matter whether you're a basketball player, a
              tennis player, a gymnast, or a bridge player. Your most unhappy customers are your
              greatest source of learning."
            </h4>
            <div className="flex-container">
              <div className="container">
                <img
                  src="https://cdn.tgdd.vn/Files/2022/02/21/1416573/bill-gates_1280x720-800-resize.jpg"
                  className="round"
                />
                <div className="profile">
                  <h4 className="name">Bill Gates</h4>
                  <h6 className="job">Co-founder of Microsoft</h6>
                </div>
              </div>
              <MicrosoftIcon sx={{ fontSize: "45px", color: "#fff" }} />
            </div>
          </div>
        </div>
        <div className="right-form">
          <div className="upper">
            <h2 className="right-header">Get started</h2>
            <h3 className="right-subheader">Create your account now</h3>
          </div>
          <TextField
            value={username}
            color="success"
            id="outlined-size-small"
            label="User name"
            // variant="filled"
            className="form-input"
            size="medium"
            onChange={(e) => {
              setUsername(e.target.value);
            }}
          />
          <TextField
            value={email}
            color="success"
            id="outlined-size-small"
            label="Email"
            // variant="filled"
            className="form-input"
            size="medium"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
          <TextField
            value={password}
            color="success"
            id="outlined-size-small"
            label="Password"
            // variant="filled"
            className="form-input"
            size="medium"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
          />
          <Button
            className="register-btn"
            variant="contained"
            onClick={(e) => {
              e.preventDefault();
              if (isValidGmail(email)) {
                handleRegister(username, email, password);
                setUsername("");
                setEmail("");
                setPassword("");
              } else {
                console.log("fuck ur email");
              }
            }}
          >
            Register
          </Button>
          <div className="lower">
            <h4 className="lower-text">Have an account?</h4>
            <a href="/login" className="lower-text-login">
              Login
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Register;
