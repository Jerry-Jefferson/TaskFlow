import { TextField, type TextFieldProps } from "@mui/material";
import type { ReactNode } from "react";

export type TextInputProps = Omit<TextFieldProps, "variant"> & {
  startIcon?: ReactNode;
};

export function TextInput({ startIcon, slotProps, sx, ...rest }: TextInputProps) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      slotProps={{
        ...slotProps,
        input: {
          ...(typeof slotProps?.input === "object" ? slotProps.input : {}),
          startAdornment: startIcon ?? undefined,
        },
      }}
      sx={[
        (theme) => ({
          "& .MuiOutlinedInput-root": {
            backgroundColor: theme.palette.background.paper,
            color: theme.palette.text.secondary,
            borderRadius: 2,

            "& fieldset": {
              borderColor: theme.palette.divider,
            },
            "&:hover fieldset": {
              borderColor: theme.palette.divider,
            },
            "&.Mui-focused fieldset": {
              borderColor: theme.palette.primary.main,
              borderWidth: 2,
            },
          },
          "& .MuiInputLabel-root": {
            color: theme.palette.text.secondary,
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: theme.palette.primary.main,
          },
          "& .MuiInputAdornment-root, & .MuiOutlinedInput-root > svg": {
            color: theme.palette.text.secondary,
            marginRight: theme.spacing(1),
          },
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    />
  );
}
