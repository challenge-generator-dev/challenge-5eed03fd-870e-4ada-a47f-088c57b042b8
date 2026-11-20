import { createTheme } from '@mui/material/styles';

// Tema visual compartido por el formulario multipaso.
// Centraliza colores, tipografía y espaciados para que los componentes
// presentacionales mantengan una apariencia consistente y accesible.

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1f5fbf',
      contrastText: '#ffffff',
    },
    secondary: {
      main: '#0f766e',
      contrastText: '#ffffff',
    },
    error: {
      main: '#b42318',
    },
    success: {
      main: '#067647',
    },
    background: {
      default: '#f5f7fb',
      paper: '#ffffff',
    },
  },
  typography: {
    fontFamily: '"Inter", "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    h1: {
      fontSize: '2rem',
      fontWeight: 700,
    },
    h2: {
      fontSize: '1.5rem',
      fontWeight: 600,
    },
    button: {
      textTransform: 'none',
      fontWeight: 600,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
    },
  },
});