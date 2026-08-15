import { useState } from "react";
import { alpha, Chip, Menu, MenuItem, Typography, useTheme } from "@mui/material";
import type { TaskStatus } from "../../model/taskSchema";
import { statusMap } from "../../model/taskStatus";

export type TaskStatusChipProps = {
  status: TaskStatus;
  onStatusChange?: (status: TaskStatus) => void;
};

export function TaskStatusChip({ status, onStatusChange }: TaskStatusChipProps) {
  const theme = useTheme();
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const { label, colorKey } = statusMap[status];
  const color =
    colorKey === "main" ? theme.palette.primary.main : theme.palette.taskPriority[colorKey];

  const isInteractive = !!onStatusChange;

  const handleClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isInteractive) return;
    e.stopPropagation();
    setAnchorEl(e.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleSelect = (newStatus: TaskStatus) => {
    handleClose();
    if (newStatus !== status) {
      onStatusChange?.(newStatus);
    }
  };

  return (
    <>
      <Chip
        label={label}
        {...(isInteractive && { onClick: handleClick })}
        sx={{
          alignSelf: "flex-end",
          backgroundColor: alpha(color, 0.15),
          color,
          fontWeight: 600,
          ...(isInteractive && {
            cursor: "pointer",
            transition: "box-shadow 0.2s ease",
            "&:hover": {
              backgroundColor: alpha(color, 0.25),
              boxShadow: `0 0 0 2px ${alpha(color, 0.3)}`,
            },
          }),
        }}
      />
      <Menu
        anchorEl={anchorEl}
        open={!!anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
        slotProps={{
          paper: {
            sx: { mt: 0.5, minWidth: 140, borderRadius: 2 },
          },
        }}
      >
        {(Object.keys(statusMap) as TaskStatus[]).map((value) => {
          const { label: optionLabel, colorKey: optionColorKey } = statusMap[value];
            const optionColor =
              optionColorKey === "main"
                ? theme.palette.primary.main
                : theme.palette.taskPriority[optionColorKey];

            return (
              <MenuItem
                key={value}
                selected={value === status}
                onClick={() => handleSelect(value)}
                sx={{ gap: 1.5, py: 1 }}
              >
                <span
                  style={{
                    width: 8,
                    height: 8,
                    borderRadius: "50%",
                    backgroundColor: optionColor,
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body2" sx={{ fontWeight: value === status ? 600 : 400 }}>
                  {optionLabel}
                </Typography>
              </MenuItem>
            );
          })}
      </Menu>
    </>
  );
}
