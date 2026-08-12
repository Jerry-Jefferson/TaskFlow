import { Box, Typography } from "@mui/material";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: 'center',
        justifyContent: "space-between",
        width: "100%",
        minHeight: "60px",
        p: 2,
        borderBottom: "1px solid",
        borderColor: "divider",
      }}
    >
      <Typography variant="h2" sx={{ color: "primary.main", display: { xs: "block", md: "none" } }}>
        TF
      </Typography>
    </Box>
  );
}
