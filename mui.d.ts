import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    taskPriority: {
      low: string;
      medium: string;
      high: string;
    };
  }

  interface PaletteOptions {
    taskPriority?: {
      low?: string;
      medium?: string;
      high?: string;
    };
  }
}