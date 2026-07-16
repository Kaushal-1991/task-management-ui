import { ThemeProvider } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import darktheme from "./theme/darktheme";
import Navbar from "./Page/Navbar/Navbar";
import Home from "./Page/Home/Home";
import Auth from "./Page/Auth/Auth";

function App() {
  const user = true;

  return (
    <ThemeProvider theme={darktheme()}>
      {user ? (
        <>
          <Navbar />
          <Home />
        </>
      ) : (
        <Auth />
      )}
    </ThemeProvider>
  );
}

export default App;
