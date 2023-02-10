import { createTheme } from "@mui/system";
import '@fontsource/red-hat-display';
import '@fontsource/red-hat-display/500.css';

export const theme = createTheme({
  typography: {
    fontFamily: [
      '"Red Hat Display"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
    ],
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: `
        @font-face {
          font-family: 'Red Hat Display';
          font-style: normal;
          font-weight: 500;
          font-size: 14px,
        }
      `,
    },
  },
});