import { alpha, Box, Typography } from "@mui/material";

export type FeedbackVariant = "info" | "error";

export type FeedbackCardProps = {
  title?: string;
  variant?: FeedbackVariant;
  infoText: string;
  description: string;
  children?: React.ReactNode;
};


export function FeedbackCard({
  title,
  variant = "info",
  infoText,
  description,
  children,
}: FeedbackCardProps) {
  return (
    <Box
      sx={(theme) => {
        const mainColor = theme.palette[variant === "error" ? "error" : "primary"].main;
        const lightColor = theme.palette[variant === "error" ? "error" : "primary"].light;
        return {
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: 2,
          px: { xs: 3, sm: 5 },
          py: { xs: 4, sm: 6 },
          borderRadius: 4,
          background: "background.paper",
          backdropFilter: "blur(12px)",
          boxShadow: `0 4px 30px ${alpha(mainColor, 0.08)}`,
          border: `1px solid ${alpha(lightColor, 0.18)}`,
          maxWidth: 440,
          width: "90%",
          textAlign: "center",
        };
      }}
    >
      {title && (
        <Typography variant="h2" sx={{ fontWeight: 700, fontSize: { xs: "1.5rem", sm: "2rem" } }}>
          {title}
        </Typography>
      )}
      <Typography
        variant="h1"
        sx={(theme) => {
          const mainColor = theme.palette[variant === "error" ? "error" : "primary"].main;
          const lightColor = theme.palette[variant === "error" ? "error" : "primary"].light;
          return {
            fontWeight: 800,
            fontSize: { xs: "2rem", sm: "2.75rem" },
            background: `linear-gradient(135deg, ${mainColor}, ${lightColor})`,
            backgroundClip: "text",
            WebkitTextFillColor: "transparent",
          };
        }}
      >
        {infoText}
      </Typography>
      <Typography
        variant="body1"
        sx={{
          color: "text.secondary",
          maxWidth: 320,
          fontSize: { xs: "0.875rem", sm: "1rem" },
        }}
      >
        {description}
      </Typography>
      {children}
    </Box>
  );
}
