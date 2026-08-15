import { Box, Typography } from "@mui/material";
import { AppLink } from "../shared/components/appLink/appLink";
import { ROUTES } from "../shared/constants/routes";

export function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        bgcolor: "background.default",
        gap: 2,
        px: 3,
        textAlign: "center",
      }}
    >
      <Typography
        variant="h1"
        sx={(theme) => ({
          fontWeight: 800,
          fontSize: { xs: "5rem", sm: "8rem" },
          background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
          backgroundClip: "text",
          WebkitTextFillColor: "transparent",
        })}
      >
        404
      </Typography>
      <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.25rem", sm: "1.5rem" } }}>
        Page not found
      </Typography>
      <Typography variant="body1" sx={{ color: "text.secondary", maxWidth: 360 }}>
        The page you're looking for doesn't exist or has been moved.
      </Typography>
      <AppLink link={ROUTES.home} variant="contained">
        Go Home
      </AppLink>
    </Box>
  );
}
