import { Box, Button, FormHelperText, Typography } from "@mui/material";
import { ModalWindow } from "../modalWindow/modalWindow";

export type DeleteConfirmDialogProps = {
  header: string;
  itemTitle: string;
  handleClose: () => void;
  handleDelete: () => void;
  error?: string;
  isPending?: boolean;
};

export function DeleteConfirmDialog({
  header,
  itemTitle,
  error,
  isPending = false,
  handleClose,
  handleDelete,
}: DeleteConfirmDialogProps) {
  return (
    <ModalWindow header={header} handleCancel={handleClose}>
      <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
        <Typography variant="h2">Are you sure you want to delete "{itemTitle}"?</Typography>
        {error && (
          <FormHelperText error sx={{ fontSize: "0.875rem" }}>
            {`Error: ${error}`}
          </FormHelperText>
        )}
        <Box sx={{ display: "flex", justifyContent: "space-between", gap: 2 }}>
          <Button fullWidth type="button" onClick={handleClose} variant="outlined">
            Cancel
          </Button>
          <Button
            fullWidth
            onClick={handleDelete}
            variant="contained"
            disabled={isPending}
            loading={isPending}
          >
            Delete
          </Button>
        </Box>
      </Box>
    </ModalWindow>
  );
}
