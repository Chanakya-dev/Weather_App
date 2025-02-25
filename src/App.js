import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/Home";
import WeatherPage from "./pages/WeatherPage";
import NavBar from "./components/NavBar";
import { ThemeProvider } from "@mui/material/styles";
import theme from "./theme";
import { Provider } from "react-redux";
import store from "./redux/store";
import { CssBaseline } from "@mui/material";

function App() {
  return (
    <Provider store={store}>
    <ThemeProvider theme={theme}>
    <CssBaseline />
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/weather/:city" element={<WeatherPage />} />
        </Routes>
      </Router>
    </ThemeProvider>
    </Provider>
  );
}

export default App;
