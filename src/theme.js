import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    primary: {
      main: "rgba(30, 27, 27, 0.87)", // Dark Gray
      contrastText: "#ffffff", // White text on primary color
    },
    secondary: {
      main: "rgba(247, 8, 8, 0.87)", // Red
      contrastText: "#ffffff",
    },
    background: {
      default: "#f4f4f4", // Light gray background
      paper: "#ffffff", // White for cards and elements
    },
    text: {
      primary: "#212121", // Dark text
      secondary: "#757575", // Lighter gray text
    },
  },
  typography: {
    fontFamily: "'Roboto', 'Arial', sans-serif",
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
    },
    body1: {
      fontSize: "1rem",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: "none", // Prevents uppercase text
          borderRadius: "8px", // Rounded corners for buttons
          padding: "10px 20px",
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: "rgba(30, 27, 27, 0.87)", // Custom primary color
          boxShadow: "none", // Removes default shadow
        },
      },
    },
  },
});

export default theme;
