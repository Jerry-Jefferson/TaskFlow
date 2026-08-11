import { createTheme } from "@mui/material";

export const theme = createTheme({
  palette: {
    primary: {
      main: "#2563eb",
      light: "#60a5fa",
      dark: "#1d4ed8",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#64748b",
      light: "#94a3b8",
      dark: "#475569",
      contrastText: "#ffffff",
    },
    background: {
      default: "#faf8ff",
      paper: "#ffffff",
    },
    text: {
      primary: "#1a1a1a",
      secondary: "#4b5563",
      disabled: "#9ca3af",
    },
    error: {
      main: "#ef4444",
    },
    warning: {
      main: "#f59e0b",
    },
    info: {
      main: "#3b82f6",
    },
    success: {
      main: "#10b981",
    },
    divider: "#e5e7eb",
    taskPriority: {
      low: "#EF1818",
      medium: "#F59704",
      high: "#09B977",
    },
  },
  typography: {
    fontFamily: '"Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 700,
      lineHeight: 1.2,
    },
    body1: {
      fontSize: "1rem",
    },
    body2: {
      fontSize: "0.875rem",
    },
  },
});
