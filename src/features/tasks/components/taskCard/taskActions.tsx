import { Box, Button } from "@mui/material";

export function TaskActions() {
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
      <Button fullWidth variant="contained">
        Edit
      </Button>
      <Button fullWidth variant="outlined">
        Delete
      </Button>
    </Box>
  );
}
