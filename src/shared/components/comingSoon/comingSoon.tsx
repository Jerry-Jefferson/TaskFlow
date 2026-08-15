import { Box } from "@mui/material";
import { ROUTES } from "../../constants/routes";
import { AppLink } from "../appLink/appLink";
import { FeedbackCard } from "../feedbackCard/feedbackCard";

export type ComingSoonProps = {
  title?: string;
};

export function ComingSoon({ title }: ComingSoonProps) {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100dvh",
        overflow: "hidden",
        bgcolor: "background.default",
      }}
    >
      <FeedbackCard
        title={title}
        infoText="Coming Soon"
        description="This section is under development"
      >
        <AppLink link={ROUTES.home} variant="contained">
          Go Home
        </AppLink>
      </FeedbackCard>
    </Box>
  );
}
