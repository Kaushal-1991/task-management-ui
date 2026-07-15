import { ThemeProvider } from "@mui/material";
import darktheme from "./theme/darktheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";

function App() {
  return (
    <>
      <ThemeProvider theme={darktheme()}>
        {/* <Navbar />
        <Home /> */}
        <Auth />
      </ThemeProvider>
    </>
  );
}

export default App;
