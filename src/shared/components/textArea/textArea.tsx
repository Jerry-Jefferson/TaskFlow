import { TextField, type TextFieldProps } from "@mui/material";

export type TextAreaProps = Omit<TextFieldProps, "variant" | "multiline">;

export function TextArea({ sx, ...rest }: TextAreaProps) {
  return (
    <TextField
      variant="outlined"
      fullWidth
      multiline
      minRows={4}
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
        }),
        ...(Array.isArray(sx) ? sx : [sx]),
      ]}
      {...rest}
    />
  );
}
