import { Component, type ErrorInfo, type ReactNode } from "react";
import { alpha, Box, Button, Typography } from "@mui/material";
import ErrorOutlineOutlinedIcon from "@mui/icons-material/ErrorOutlineOutlined";

interface Props {
  children: ReactNode;
  title?: string;
  message?: string;
  retryLabel?: string;
}

interface State {
  hasError: boolean;
  error: Error | null;
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo);
  }

  reset = () => {
    this.setState({ hasError: false, error: null });
  };

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100%",
            width: "100%",
            p: 3,
          }}
        >
          <Box
            sx={(theme) => ({
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 2,
              px: { xs: 3, sm: 5 },
              py: { xs: 4, sm: 6 },
              borderRadius: 4,
              backgroundColor: "background.paper",
              boxShadow: `0 4px 30px ${alpha(theme.palette.error.main, 0.08)}`,
              border: `1px solid ${alpha(theme.palette.error.light, 0.18)}`,
              maxWidth: 440,
              width: "90%",
              textAlign: "center",
            })}
          >
            <ErrorOutlineOutlinedIcon
              sx={(theme) => ({
                fontSize: 48,
                color: theme.palette.error.main,
              })}
            />

            <Typography
              variant="h2"
              sx={(theme) => ({
                fontWeight: 800,
                fontSize: { xs: "1.5rem", sm: "2rem" },
                background: `linear-gradient(135deg, ${theme.palette.error.main}, ${theme.palette.error.light ?? theme.palette.error.main})`,
                backgroundClip: "text",
                WebkitTextFillColor: "transparent",
              })}
            >
              {this.props.title ?? "Something went wrong"}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                color: "text.secondary",
                maxWidth: 320,
                fontSize: { xs: "0.875rem", sm: "1rem" },
              }}
            >
              {this.props.message ?? "An unexpected error occurred. Please try again."}
            </Typography>

            <Button fullWidth variant="outlined" color="error" onClick={this.reset} sx={{ mt: 1 }}>
              {this.props.retryLabel ?? "Try again"}
            </Button>
          </Box>
        </Box>
      );
    }

    return this.props.children;
  }
}
