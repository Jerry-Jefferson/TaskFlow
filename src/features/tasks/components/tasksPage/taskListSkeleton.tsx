import { Box, Skeleton } from "@mui/material";

function TaskCardSkeleton() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: 1,
        p: 2,
        border: "1px solid",
        borderColor: "divider",
        borderRadius: 2,
        backgroundColor: "background.paper",
      }}
    >
      <Skeleton width={80} height={28} sx={{ alignSelf: "flex-end" }} />
      <Skeleton width="60%" height={28} />
      <Skeleton width="100%" />
      <Skeleton width="90%" />
      <Skeleton width={100} height={20} sx={{ mt: 1 }} />
    </Box>
  );
}

export function TaskListSkeleton() {
  return (
    <Box
      sx={{
        display: "grid",
        gridTemplateColumns: { xs: "1fr", sm: "1fr 1fr", lg: "1fr 1fr 1fr" },
        gap: 2,
        mt: 3,
      }}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <TaskCardSkeleton key={i} />
      ))}
    </Box>
  );
}
