import { TextField, Button } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import LocalLibraryIcon from "@mui/icons-material/LocalLibrary";
import "./login.css";
function Login() {
  return (
    <div className="login-container">
      <div className="form-container">
        <div className="left-form">
          <LocalLibraryIcon className="logo" />
          <div className="text-container">
            <h1 className="left-header">
              We can recommend a great deal of IT courses.
            </h1>
            <h5 className="left-subheader">
              With 300+ online course you can explore and find information about
              available courses.
            </h5>
          </div>
          <div className="card-container">
            <h4 className="text">
              “I think as a company, if you can get those two things right –
              having a clear direction on what you are trying to do and bringing
              in great people who can execute on the stuff – then you can do
              pretty well."
            </h4>
            <div className="flex-container">
              <div className="container">
                <img
                  src="https://cdn.britannica.com/99/236599-050-1199AD2C/Mark-Zuckerberg-2019.jpg"
                  className="round"
                />
                <div className="profile">
                  <h4 className="name">Mark Zuckerberg</h4>
                  <h6 className="job">Founder and Chairman of Facebook</h6>
                </div>
              </div>
              <FacebookIcon sx={{ fontSize: "45px", color: "#fff" }} />
            </div>
          </div>
        </div>
        <div className="right-form-login">
          <div className="upper">
            <h2 className="right-header">Let Login</h2>
            <h3 className="right-subheader">Explore New Thing Now</h3>
          </div>
          <TextField
            color="success"
            id="outlined-size-small"
            label="User name"
            // variant="filled"
            className="form-input"
            size="medium"
          />
          <TextField
            color="success"
            id="outlined-size-small"
            label="Password"
            // variant="filled"
            className="form-input"
            size="medium"
            type="password"
          />
          <a href="#" className="forgot">
            Forgot password?
          </a>
          <Button className="login-btn" variant="contained">
            Login
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Login;
