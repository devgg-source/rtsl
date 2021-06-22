import { createMuiTheme } from "@material-ui/core";
import { lightGreen,deepPurple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#32cd32",
    },
    secondary:deepPurple ,
  },
  typography: {
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ",
  },
});
