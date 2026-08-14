import { Box } from "@mui/material";
import { Outlet } from "react-router";
import { Sidebar, type NavLinkItem } from "../shared/components/sidebar/sidebar";
import { ROUTES } from "../shared/constants/routes";
import ArchiveIcon from '@mui/icons-material/Archive';
import DeleteIcon from '@mui/icons-material/Delete';

const navLinks: NavLinkItem[] = [
  { link: ROUTES.archive, label: "Archive", icon: ArchiveIcon },
  { link: ROUTES.trash, label: "Trash", icon: DeleteIcon },
];

export function HomePage() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        width: "100%",
        minHeight: "100vh",
      }}
    >
      <Box
        sx={{
          width: { xs: "100%", md: "20%" },
          alignSelf: { md: "stretch" },
          order: { xs: 2, md: 0 },
        }}
      >
        <Sidebar navLinks={navLinks} />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "80%" }, flex: 1, minHeight: { md: "100vh" } }}>
        <Outlet />
      </Box>
    </Box>
  );
}
