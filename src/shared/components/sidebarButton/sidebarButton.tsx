import { Button, Box } from "@mui/material";
import type { ElementType } from "react";

export type SidebarButtonProps = {
  label: string;
  icon: ElementType;
  isActive: boolean;
  onClick: () => void;
};

const baseSx = {
  justifyContent: "flex-start",
  gap: 1,
  color: "secondary.dark",
  textTransform: "none",
  minWidth: "auto",
  padding: 0,
  font: "inherit",
  transition: "all 0.2s ease",
  "&:hover": { color: "primary.main", background: "transparent" },
};

const activeSx = {
  color: "primary.main",
};

export function SidebarButton({ label, icon: Icon, isActive, onClick }: SidebarButtonProps) {
  return (
    <Button
      variant="text"
      disableRipple
      onClick={onClick}
      sx={[baseSx, isActive && activeSx]}
    >
      <Icon fontSize="small" />
      <Box component="span" sx={{ display: { xs: "none", md: "inline" } }}>
        {label}
      </Box>
    </Button>
  );
}
