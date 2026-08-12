import { alpha, Box, Typography } from "@mui/material";
import { ROUTES } from "../../constants/routes";
import { AppLink } from "../appLink/appLink";

export type ComingSoonProps = {
  title?: string;
};

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        overflow: "hidden",
        bgcolor: "background.default",
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
          background: "background.paper",
          backdropFilter: "blur(12px)",
          boxShadow: `0 4px 30px ${alpha(theme.palette.primary.main, 0.08)}`,
          border: `1px solid ${alpha(theme.palette.primary.light, 0.18)}`,
          maxWidth: 440,
          width: "90%",
          textAlign: "center",
        })}
      >
        {title && (
          <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", sm: "2rem" } }}>
            {title}
          </Typography>
        )}
        <Typography
          variant="h1"
          sx={(theme) => ({
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.75rem" },
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.primary.light})`,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          })}
        >
          Coming Soon
        </Typography>
        <Typography
          variant="body1"
          sx={{
            color: "text.secondary",
            maxWidth: 320,
            fontSize: { xs: "0.875rem", sm: "1rem" },
          }}
        >
          This section is under development.
        </Typography>
        <AppLink link={ROUTES.home} variant="contained">
          Go Home
        </AppLink>
      </Box>
    </Box>
  );
}
