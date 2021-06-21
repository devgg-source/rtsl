import React from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import Box from "@material-ui/core/Box";
import Grid from "@material-ui/core/Grid";
// import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { Divider } from "@material-ui/core";
import rtsl from "../Images/rtsl1.svg";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    backgroundImage: "radial-gradient( circle farthest-corner at 10% 20%,  rgba(255,229,168,1) 0%, rgba(251,174,222,1) 100.7% )"
  
  },
  image: {
    backgroundImage:
      "url('https://amchealthgroup.com/wp-content/uploads/2020/01/anfas-logo.png')",
    backgroundRepeat: "no-repeat",
    backgroundColor: "yellow",
    backgroundSize: "cover",
    backgroundPosition: "center",
    // maxWidth: "100%",
    // maxHeight: "100%",
    margin: "200px 0 200px",
    zindex: 1,
  },
  img: {
    backgroundImage: `url(${rtsl})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    height: "auto",
    position: "relative",
    borderRadius: "15px",
    height: "auto",
    margin: "10% 20% 10% 20%",
    display: "flex",
    padding: "3% 5% 5% 5%"
  },
  underline: {
    color: "linear-gradient( 67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7% )",
    borderWidth: "1px",
    borderColor: "yellow !important",
  },
  text: {
    color: "rgb(158,158,158)",
    padding: "3px",
  },
  link: {
    textDecoration: "none",
    cursor: "pointer",
    marginTop: "5px",
  },

  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    color: "white",
    fontWeight: "600",
    "&:hover": {
      backgroundColor: "linear-gradient( 67.2deg,  rgba(37,208,199,1) -7.5%, rgba(165,90,240,1) 62.7% )",
    },
  },
  box1: {
    display: "flex",
    marginTop: "10px",
  },
  link1: {
    paddingTop: "12px",
    marginLeft: "auto",
    cursor: "pointer",
    order: 2,
  },
  textField: {
    [`& fieldset`]: {
      border: "none",
      margin: "10px",
      fontSize: "100px",
    },
    color: "grey",
  },
  someTextField: {
    minHeight: 420,
  },
  "@keyframes fadeIn": {
    "0%,100%": {
      transform: "translateY(5rem)",
    },
    "50%": {
      transform: "translateY(0)",
    },
  },
  selector: {
    animation: "$fadeIn 10s ease infinite",
    margin: "auto",
    position: "relative",
    height: "auto",
    width: "300px",
    marginTop: "120px",
    alignItems: "center",
  },
}));

export default function Signin() {
  const classes = useStyles();

  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={6} className={classes.img}>
        <div className={classes.selector}>
          <img src="/anfas/anfas-logo.png" />
        </div>
      </Grid>

      <Grid item xs={12} sm={8} md={6} square className={classes.color}>
        <div
          className={classes.paper}
          component={Paper}
          elevation={6}
          square
          style={{
            boxShadow: "0 20px 26px rgba(54, 53, 53, 0.3)",
            backgroundColor: "white",
          }}
        >
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Hi, Welcome Back!
          </Typography>
          <Typography variant="body1" className={classes.text}>
            Enter Your Crenditials to Continue
          </Typography>
          <form className={classes.form} noValidate>
            <Box
              style={{
                border: "2px solid #32cd32",
                paddingTop: "10px",
                borderRadius: "12px",
              }}
            >
              <TextField
                variant="outlined"
                color="secondary"
                fullWidth
                size="small"
                id="email"
                label="Email Address/User Name"
                name="email"
                autoComplete="email"
                autoFocus
                className={classes.textField}
              />
            </Box>
            <Box
              style={{
                border: "2px solid #32cd32",
                paddingTop: "10px",
                borderRadius: "12px",
                marginTop: "12px",
              }}
            >
              <TextField
                variant="outlined"
                size="small"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                color="secondary"
                className={classes.textField}
              />
            </Box>
            <Box className={classes.box1}>
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />

              <Typography variant="body2" className={classes.link1}>
                Forget Password?
              </Typography>
            </Box>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              Sign In
            </Button>

            {/* <Box mt={5}>
              <Copyright />
            </Box> */}
          </form>
          <Divider
            variant="middle"
            color="secondary"
            light
            style={{ color: "grey", width: "100%" }}
          />
          <Link className={classes.link} variant="body1">
            Don't have an account?
          </Link>
        </div>
      </Grid>
    </Grid>
  );
}
