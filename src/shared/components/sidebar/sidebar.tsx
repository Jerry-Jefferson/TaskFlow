import { Box, Divider, Typography } from "@mui/material";
import { AppLink } from "../appLink/appLink";
import { SidebarButton, type SidebarButtonProps } from "../sidebarButton/sidebarButton";
import type { ElementType } from "react";

export type NavLinkItem = {
  link: string;
  label: string;
  icon: ElementType;
};

export type FilterButtonItem = Omit<SidebarButtonProps, "onClick" | "isActive"> & {
  value: string | null;
};

export type SidebarProps = {
  navLinks: NavLinkItem[];
  filterButtons: FilterButtonItem[];
  activeFilter: string | null;
  onFilterChange: (value: string | null) => void;
};

export function Sidebar({ navLinks, filterButtons, activeFilter, onFilterChange }: SidebarProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "row", md: "column" },
        justifyContent: { xs: "center", md: "space-between" },
        alignItems: "center",
        width: "100%",
        minWidth: "100px",
        height: { md: "100%" },
        minHeight: "40px",
        border: "1px solid",
        borderColor: "divider",
        backgroundColor: "background.default",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
        }}
      >
        <Box sx={{ display: { xs: "none", md: "block" }, p: 2 }}>
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
          }}
        >
          {filterButtons.map(({ label, icon, value }) => (
            <SidebarButton
              key={label}
              label={label}
              icon={icon}
              isActive={activeFilter === value}
              onClick={() => onFilterChange(value)}
            />
          ))}
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "row", md: "column" },
          gap: 2,
          p: 2,
        }}
      >
        <Divider />
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
