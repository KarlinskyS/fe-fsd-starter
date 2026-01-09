import type { ComponentsProps, ComponentsOverrides, ComponentsVariants } from '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Components<Theme = unknown> {
    MuiPickersTextField?: {
      defaultProps?: ComponentsProps['MuiTextField'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiTextField'];
      variants?: ComponentsVariants<Theme>['MuiTextField'];
    };
    MuiPickersInputBase?: {
      defaultProps?: ComponentsProps['MuiInputBase'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiInputBase'];
      variants?: ComponentsVariants<Theme>['MuiInputBase'];
    };
    MuiDataGrid?: {
      defaultProps?: ComponentsProps['MuiBox'];
      styleOverrides?: ComponentsOverrides<Theme>['MuiBox'];
      variants?: ComponentsVariants<Theme>['MuiBox'];
    };
  }
}
