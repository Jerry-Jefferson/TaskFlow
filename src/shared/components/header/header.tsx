import { Box, Typography } from "@mui/material";
import { SearchInput } from "../searchInput/searchInput";

export function Header() {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
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
      <SearchInput />
    </Box>
  );
}
