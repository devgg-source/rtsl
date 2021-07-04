import Sign from "./components/Sign";
import Navbar from "./components/Navbar";
import Sidenav from "./components/Sidenav";
import Table from "./components/Table";
import { ThemeProvider } from "@material-ui/core";
import { theme } from "./components/Theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        {/* <Sign /> */}

        <Navbar />
        {/* <Table /> */}
      </div>
    </ThemeProvider>
  );
}

export default App;
