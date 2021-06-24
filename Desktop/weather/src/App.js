// import SignIn from "./components/SignIn";
import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Sign /> */}
        <Navbar />
      </div>
    </ThemeProvider>
  );
}

export default App;
