import React from "react";
import AppBar from "@material-ui/core/AppBar";
import {
  Avatar,
  Box,
  Button,
  ButtonBase,
  Chip,
  Collapse,
  Paper,
  Toolbar,
  Typography,
} from "@material-ui/core";
import logo from "../Images/anfas_logo.png";
import { makeStyles } from "@material-ui/core/styles";
import Settings from "@material-ui/icons/Settings";
import MenuIcon from "@material-ui/icons/Menu";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/Inbox";
import DraftsIcon from "@material-ui/icons/Drafts";
import Divider from "@material-ui/core/Divider";
import ExitToAppRoundedIcon from "@material-ui/icons/ExitToAppRounded";
// import ListItemLink from "@material-ui/core/ListItemLink";
// import AdapterDateFns from "@material-ui/lab/AdapterDateFns";
// import LocalizationProvider from "@material-ui/lab/LocalizationProvider";
// import DateRangePicker from "@material-ui/lab/DateRangePicker";

const useStyles = makeStyles((theme) => ({
  header: {
    height: "83.3px",
    backgroundColor: "white",
  },
  toolbar: {
    padding: "16px",
  },
  img: {
    display: "flex",
  },
  line: {
    lineHeight: "1",
    fontSize: "1.2em",
    color: "red",
  },
  account: {
    color: "rgb(97,97,97)",
    borderRadius: "12px",
    "&:hover": {
      background: "rgba(3,169,244,0.2)",
    },
  },
}));

const Navbar = () => {
  const classes = useStyles();
  const [value, setValue] = React.useState([null, null]);
  const [none, setNone] = React.useState(false);
  const handleClick = () => {
    setNone(!none);
  };
  return (
    <div>
      <AppBar elevation={0} className={classes.header}>
        <Toolbar className={classes.toolbar}>
          <div className={classes.img}>
            <Box style={{ width: "194px" }}>
              <img
                src={logo}
                style={{ height: "50px", alignContent: "center" }}
                alt="logo"
              />
            </Box>
            <Button
              size="small"
              style={{
                borderRadius: "12px",
                height: "40px",
                margin: "auto",
                background: "rgba(3,169,244,0.2)",
              }}
            >
              <MenuIcon style={{ fontSize: "2rem" }} color="primary" />
            </Button>
          </div>
          <Chip
            style={{
              padding: "8px",
              height: "48px",
              marginLeft: "auto",
              borderRadius: "27px",
              borderColor: "rgba(33,150,234,0.2)",
              background: "rgba(33,150,234,0.2)",
              transition: "all 1s ease-in-out",
            }}
            avatar={
              <Avatar
                style={{
                  height: "34px",
                  width: "34px",
                  margin: "8px 0 8px 4px",
                }}
              >
                M
              </Avatar>
            }
            clickable
            label={
              <Settings
                style={{
                  width: "1.5rem",
                  height: "1.5rem",
                  background: "transparent !important",
                  margin: "8px -4px 8px 0px",
                }}
                color="primary"
              />
            }
            variant="outlined"
            onClick={handleClick}
          />
        </Toolbar>
        <div
          style={{
            position: "absolute",
            transform: "translate(1100px,88px)",
            width: "20%",
            display: `${!none ? "none" : "block"}`,
          }}
        >
          <Collapse in={none}>
            <Paper
              elevation={4}
              style={{ borderRadius: "12px", padding: "12px" }}
            >
              <Typography variant="body1" style={{ padding: "5px" }}>
                Good Morning, John
              </Typography>
              <Divider />
              <List component="nav" aria-label="account settings">
                <ListItem button className={classes.account}>
                  <ListItemIcon>
                    <Settings color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Account Settings" />
                </ListItem>
                <ListItem button className={classes.account}>
                  <ListItemIcon>
                    <ExitToAppRoundedIcon color="primary" />
                  </ListItemIcon>
                  <ListItemText primary="Logout" />
                </ListItem>
              </List>
            </Paper>
          </Collapse>
        </div>
      </AppBar>
    </div>
  );
};

export default Navbar;
