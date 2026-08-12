import { Box, Typography } from "@mui/material";
import { AppLink } from "../appLink/appLink";
import type { ElementType } from "react";

export type NavLinkItem = {
  link: string;
  label: string;
  icon: ElementType;
};

export type SidebarProps = {
  navLinks: NavLinkItem[];
};

export function Sidebar({ navLinks }: SidebarProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        minWidth: "100px",
        height: "100%",
        minHeight: "40px",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Box sx={{ p: 2, display: { xs: "none", md: "block" } }}>
        <Typography variant="h2" sx={{ color: "primary.main" }}>
          TaskFlow
        </Typography>
        <Typography variant="body1" sx={{ color: "text.secondary" }}>
          Productivity Workspace
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: 2,
          p: 2,
          borderTop: { xs: "none", md: "1px solid" },
          borderColor: { md: "divider" },
        }}
      >
        {navLinks.map(({ label, link, icon: Icon }) => (
          <AppLink key={link} link={link}>
            <Icon fontSize="small" />
            <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
              {label}
            </Box>
          </AppLink>
        ))}
      </Box>
    </Box>
  );
}
