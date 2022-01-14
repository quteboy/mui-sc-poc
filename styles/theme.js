import { createTheme, responsiveFontSizes } from "@mui/material/styles";
import { deepPurple, amber } from "@mui/material/colors";

// Create a theme instance.
const baseTheme = createTheme({
  palette: {
    primary: {
      main: "#16A9BC",
      ///dark
      //light
    },
    secondary: {
      main: "#00BDCE",
    },
  },
  //custom theme variables
  bg: {
    main: "#fff",
    light: "#F4F5F7",
  },
  text: {
    main: "#172B4D",
    light: "#262930",
  },
});

const theme = responsiveFontSizes(baseTheme);

export default theme;
