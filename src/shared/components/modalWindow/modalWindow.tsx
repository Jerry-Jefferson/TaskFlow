import CloseIcon from "@mui/icons-material/Close";
import { Box, Dialog, DialogContent, IconButton, Typography } from "@mui/material";
import type { ReactNode } from "react";

export type ModalWindowProps = {
  header: string;
  handleCancel: () => void;
  children: ReactNode;
};

export function ModalWindow({ header, handleCancel, children }: ModalWindowProps) {
  return (
    <Dialog
      open
      fullWidth
      maxWidth="sm"
      slotProps={{
        paper: {
          sx: {
            borderRadius: 2,
            width: { xs: "95%", sm: "80%", md: "600px" },
            maxWidth: "600px",
          },
        },
      }}
    >
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          backgroundColor: "background.paper",
          color: "text.primary",
          height: "60px",
          p: 2,
        }}
      >
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {header}
        </Typography>
        <IconButton sx={{ color: "text.primary" }} onClick={handleCancel}>
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
      <DialogContent>{children}</DialogContent>
    </Dialog>
  );
}

