import { createMuiTheme } from "@material-ui/core";
import { deepPurple } from "@material-ui/core/colors";

export const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#03a9f4",
    },
    secondary: deepPurple,
  },
  typography: {
    fontFamily:
      "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif ",
  },
});
