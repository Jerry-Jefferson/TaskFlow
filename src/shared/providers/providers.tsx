import { CssBaseline, ThemeProvider } from "@mui/material";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { theme } from "../theme/theme";
import { BrowserRouter } from "react-router";

export type ProvidersProps = {
  children: React.ReactNode;
};

const queryClient = new QueryClient();

export function Providers({ children }: ProvidersProps) {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
        {children}
        </BrowserRouter>
      </ThemeProvider>
    </QueryClientProvider>
  );
}
