import { TextField, Button } from "@mui/material";
import MicrosoftIcon from "@mui/icons-material/Microsoft";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "./register.css";
function Register() {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="left-form">
          <LocalLibraryIcon className="logo" />
          <div className="text-container">
            <h1 className="left-header">
              Let us help you find your IT course for free.
            </h1>
            <h5 className="left-subheader">
              Our register process is quick and easy, taking no more than 10
              minutes to complete.
            </h5>
          </div>
          <div className="card-container">
            <h4 className="text">
              “Everyone needs a coach. It doesn't matter whether you're a
              basketball player, a tennis player, a gymnast, or a bridge player.
              Your most unhappy customers are your greatest source of learning."
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
            color="success"
            id="outlined-size-small"
            label="User name"
            // variant="filled"
            className="form-input"
            size="medium"
            defaultValue="User name"
          />
          <TextField
            color="success"
            id="outlined-size-small"
            label="Email"
            // variant="filled"
            className="form-input"
            size="medium"
            defaultValue="xyz@gmail.com"
          />
          <TextField
            color="success"
            id="outlined-size-small"
            label="Password"
            // variant="filled"
            className="form-input"
            size="medium"
            defaultValue="Password"
            type="password"
          />
          <Button className="register-btn" variant="contained">
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
