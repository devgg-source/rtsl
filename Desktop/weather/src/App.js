// import SignIn from "./components/SignIn";
import Sign from "./components/Sign";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Sign />
      </div>
    </ThemeProvider>
  );
}

export default App;
