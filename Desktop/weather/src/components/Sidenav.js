import React, { useState } from "react";
import clsx from "clsx";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import Collapse from "@material-ui/core/Collapse";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import ExpandLess from "@material-ui/icons/ExpandLess";
import ExpandMore from "@material-ui/icons/ExpandMore";
import StarBorder from "@material-ui/icons/StarBorder";
import { ListSubheader } from "@material-ui/core";
// import Table from "./Table";

const drawerWidth = 260;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    background: "white",
  },
  appBar: {
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: "none",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    borderRadius: "12px",
    display: "flex",
    flexDirection: "column",
    border: "none",
    boxShadow: "none",
  },
  drawerPaper: {
    width: drawerWidth,
    // marginTop: "80px",
    overflowY: "auto",
    flexShrink: "0",
    boxShadow: "none",
    border: "none",
    // height: "calc(100%-190px)",
    "&::-webkit-scrollbar": {
      width: "0.5em",
    },
    "&::-webkit-scrollbar-track": {
      boxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",

      webkitBoxShadow: "inset 0 0 6px rgba(0,0,0,0.00)",
      borderRadius: "12px",
    },
    "&:hover": {
      "&::-webkit-scrollbar-thumb": {
        backgroundColor: "rgba(0,0,0,.2)",
        height: "30%",
        borderRadius: "12px",
      },
    },
    "&::-webkit-scrollbar-track-piece:start": {
      marginTop: "84px",
    },
    "&::-webkit-scrollbar-button:start": {},
  },
  content: {
    flexGrow: 1,
    padding: "12px",
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
    marginTop: "0",
    borderRadius: "12px",
  },
  contentShift: {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  list: {
    marginTop: "90px",
    margin: "1em",
  },
  list1: {
    margin: "1em",
  },
  subheader: {
    marginLeft: "-1em",
    fontSize: "0.9rem",
    fontWeight: "600",
    color: "#212121",
  },
  listitemIcon: {},
  icon: {},
  listText: {
    verticalAlign: "middle",
    borderRadius: "12px",
    marginBottom: "4px",
    paddingLeft: "18px",
    fontSize: "0.875rem",
    // backgroundColor: "red",
    "&:hover": {
      background: "rgba(3,169,244,0.2)",
      color: "rgb(3,169,244)",
      "& $listItemIcon": {
        "& $iconsize": {
          color: "rgb(3,169,244)",
        },
      },
    },
  },
  listItemIcon: () => ({}),
  iconsize: () => ({
    fontSize: "20px",
  }),
}));

export default function PersistentDrawerLeft(props) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  const handleNestedClick = () => {
    setOpen1(!open1);
  };
  return (
    <div className={classes.root}>
      <CssBaseline />

      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={props.open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Divider />
        <List className={classes.list}>
          <ListSubheader className={classes.subheader}>
            Sanitizer Compilant Report
          </ListSubheader>
          {["Statistics", "Live Report"].map((text, index) => (
            <ListItem
              justifyContent="center"
              button
              key={text}
              className={classes.listText}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {index % 2 === 0 ? (
                  <InboxIcon className={classes.iconsize} />
                ) : (
                  <MailIcon className={classes.iconsize} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ marginLeft: "-20px" }} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ margin: "0 1em" }} />
        <List className={classes.list1}>
          <ListSubheader className={classes.subheader}>Widget</ListSubheader>
          {["Widget", "Data", "Chart"].map((text, index) => (
            <ListItem
              justifyContent="center"
              button
              key={text}
              className={classes.listText}
            >
              <ListItemIcon className={classes.listItemIcon}>
                {index % 2 === 0 ? (
                  <InboxIcon className={classes.iconsize} />
                ) : (
                  <MailIcon className={classes.iconsize} />
                )}
              </ListItemIcon>
              <ListItemText primary={text} style={{ marginLeft: "-20px" }} />
            </ListItem>
          ))}
        </List>
        <Divider style={{ margin: "0 1em" }} />
        <List className={classes.list1}>
          <ListSubheader className={classes.subheader}>
            Application
          </ListSubheader>

          <ListItem button onClick={handleClick} className={classes.listText}>
            <ListItemIcon className={classes.listItemIcon}>
              <InboxIcon className={classes.iconsize} />
            </ListItemIcon>
            <ListItemText primary="Inbox" />
            {open ? <ExpandLess /> : <ExpandMore />}
          </ListItem>
          <Collapse
            in={open}
            timeout="1000"
            style={{ transitionDuration: ".5s" }}
            unmountOnExit
          >
            <List component="div" disablePadding className={classes.list1}>
              {["account", "settings", "cards", ["one", "two"]].map(
                (text, index) =>
                  Array.isArray(text) ? (
                    <div>
                      <ListItem
                        button
                        onClick={handleNestedClick}
                        className={classes.listText}
                      >
                        <ListItemIcon className={classes.listItemIcon}>
                          <InboxIcon className={classes.iconsize} />
                        </ListItemIcon>
                        <ListItemText primary="Inbox" />
                        {open1 ? <ExpandLess /> : <ExpandMore />}
                      </ListItem>
                      <Collapse
                        in={open1}
                        timeout="1000"
                        style={{ transitionDuration: ".5s" }}
                        unmountOnExit
                      >
                        <List
                          component="div"
                          disablePadding
                          className={classes.list1}
                        >
                          {["one", "two"].map((tx, indx) => (
                            <ListItem
                              button
                              className={classes.listText}
                              key={indx}
                            >
                              <ListItemIcon className={classes.listItemIcon}>
                                <StarBorder className={classes.iconsize} />
                              </ListItemIcon>
                              <ListItemText primary={tx} />
                            </ListItem>
                          ))}
                        </List>
                      </Collapse>
                    </div>
                  ) : (
                    <ListItem button className={classes.listText} key={index}>
                      <ListItemIcon className={classes.listItemIcon}>
                        <StarBorder className={classes.iconsize} />
                      </ListItemIcon>
                      <ListItemText primary={text} />
                    </ListItem>
                  )
              )}
            </List>
          </Collapse>
        </List>
        <Divider style={{ margin: "0 1em" }} />
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: props.open,
        })}
        style={{
          background: "rgba(3,169,244,0.2)",
          marginTop: "84px",
          marginRight: "1%",
          marginLeft: `${!props.open ? `${15 - drawerWidth}px` : ""}`,
        }}
      >
        <Typography paragraph>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Rhoncus
          dolor purus non enim praesent elementum facilisis leo vel. Risus at
          ultrices mi tempus imperdiet. Semper risus in hendrerit gravida rutrum
          quisque non tellus. Convallis convallis tellus id interdum velit
          laoreet id donec ultrices. Odio morbi quis commodo odio aenean sed
          adipiscing. Amet nisl suscipit adipiscing bibendum est ultricies
          integer quis. Cursus euismod quis viverra nibh cras. Metus vulputate
          eu scelerisque felis imperdiet proin fermentum leo. Mauris commodo
          quis imperdiet massa tincidunt. Cras tincidunt lobortis feugiat
          vivamus at augue. At augue eget arcu dictum varius duis at consectetur
          lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa sapien
          faucibus et molestie ac.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        <Typography paragraph>
          Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
          ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
          elementum integer enim neque volutpat ac tincidunt. Ornare suspendisse
          sed nisi lacus sed viverra tellus. Purus sit amet volutpat consequat
          mauris. Elementum eu facilisis sed odio morbi. Euismod lacinia at quis
          risus sed vulputate odio. Morbi tincidunt ornare massa eget egestas
          purus viverra accumsan in. In hendrerit gravida rutrum quisque non
          tellus orci ac. Pellentesque nec nam aliquam sem et tortor. Habitant
          morbi tristique senectus et. Adipiscing elit duis tristique
          sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
          eleifend. Commodo viverra maecenas accumsan lacus vel facilisis. Nulla
          posuere sollicitudin aliquam ultrices sagittis orci a.
        </Typography>
        {/* <Table /> */}
      </main>
    </div>
  );
}
