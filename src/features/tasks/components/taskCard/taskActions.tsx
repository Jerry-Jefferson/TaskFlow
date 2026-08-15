import { Box, Button } from "@mui/material";

export type TaskActionsProps = {
  onEdit: () => void;
  onDelete: () => void;
};

export function TaskActions({ onEdit, onDelete }: TaskActionsProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        gap: 2,
        pt: 2,
        width: "100%",
      }}
    >
      <Button fullWidth variant="contained" onClick={onEdit}>
        Edit
      </Button>
      <Button fullWidth variant="outlined" color="error" onClick={onDelete}>
        Delete
      </Button>
    </Box>
  );
}
