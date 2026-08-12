import { Box, type SxProps, type Theme } from "@mui/material";
import { Link } from "react-router";

export type LinkVariant = "contained" | "text";

export type AppLinkProps = {
  link: string;
  variant?: LinkVariant;
  style?: SxProps<Theme>;
  children: React.ReactNode;
};

const containedSx: SxProps<Theme> = {
  px: 3,
  py: 1,
  borderRadius: 2,
  bgcolor: "primary.main",
  color: "primary.contrastText",
  fontWeight: 600,
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": { bgcolor: "primary.dark" },
};

const textSx: SxProps<Theme> = {
  display: "flex",
  gap: 1,
  alignItems: "center",
  color: "secondary.dark",
  textDecoration: "none",
  transition: "all 0.2s ease",
  "&:hover": { color: "primary.main" },
};

export function AppLink({ link, style, children, variant = "text" }: AppLinkProps) {
  const baseSx = variant === "contained" ? containedSx : textSx;
  return (
    <Box component={Link} to={link} sx={[baseSx, ...(Array.isArray(style) ? style : [style])]}>
      {children}
    </Box>
  );
}
