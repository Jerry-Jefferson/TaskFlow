import { useCallback } from "react";
import { useSearchParams } from "react-router";
import { Box } from "@mui/material";
import { Outlet } from "react-router";
import {
  Sidebar,
  type NavLinkItem,
  type FilterButtonItem,
} from "../shared/components/sidebar/sidebar";
import { ROUTES } from "../shared/constants/routes";
import ArchiveIcon from "@mui/icons-material/Archive";
import DeleteIcon from "@mui/icons-material/Delete";
import ListAltIcon from "@mui/icons-material/ListAlt";
import RadioButtonUncheckedIcon from "@mui/icons-material/RadioButtonUnchecked";
import AutorenewIcon from "@mui/icons-material/Autorenew";
import CheckCircleOutlineOutlinedIcon from "@mui/icons-material/CheckCircleOutlineOutlined";

const navLinks: NavLinkItem[] = [
  { link: ROUTES.archive, label: "Archive", icon: ArchiveIcon },
  { link: ROUTES.trash, label: "Trash", icon: DeleteIcon },
];

const filterButtons: FilterButtonItem[] = [
  { label: "All Tasks", icon: ListAltIcon, value: null },
  { label: "To Do", icon: RadioButtonUncheckedIcon, value: "todo" },
  { label: "In Progress", icon: AutorenewIcon, value: "in_progress" },
  { label: "Done", icon: CheckCircleOutlineOutlinedIcon, value: "done" },
];

export function HomePage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const activeFilter = searchParams.get("status");

  const handleFilterChange = useCallback(
    (value: string | null) => {
      setSearchParams(
        (prev) => {
          const next = new URLSearchParams(prev);

          if (value) {
            next.set("status", value);
          } else {
            next.delete("status");
          }

          return next;
        },
        { replace: true }
      );
    },
    [setSearchParams]
  );

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
        <Sidebar
          navLinks={navLinks}
          filterButtons={filterButtons}
          activeFilter={activeFilter}
          onFilterChange={handleFilterChange}
        />
      </Box>
      <Box sx={{ width: { xs: "100%", md: "80%" }, flex: 1, minHeight: { md: "100vh" } }}>
        <Outlet />
      </Box>
    </Box>
  );
}
