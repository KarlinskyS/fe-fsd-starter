import { alpha, type PaletteMode, type Theme, type ThemeOptions } from '@mui/material';

const primaryMain = '#1976d2';
const secondaryMain = '#2e7d32';
const greyLight = '#f3f4f6';
const greyMain = '#9ca3af';

const lightPalette: ThemeOptions['palette'] = {
  primary: { main: primaryMain },
  secondary: { main: secondaryMain },
  background: {
    default: '#f5f5f5',
    paper: '#ffffff',
  },
  text: {
    primary: '#111827',
    secondary: '#4b5563',
  },
  grey: {
    700: '#374151',
  },
};

const darkPalette: ThemeOptions['palette'] = {
  primary: { main: '#90caf9' },
  secondary: { main: '#a5d6a7' },
  background: {
    default: '#0f172a',
    paper: '#111827',
  },
  text: {
    primary: '#f9fafb',
    secondary: '#cbd5f5',
  },
  grey: {
    700: '#9ca3af',
  },
};

export function getDesignTokens(mode: PaletteMode, direction: 'ltr' | 'rtl'): ThemeOptions {
  return {
    direction,
    breakpoints: {
      values: {
        xs: 0,
        sm: 600,
        md: 960,
        lg: 1200,
        xl: 1440,
      },
    },
    shape: {
      borderRadius: 8,
    },
    typography: {
      htmlFontSize: 16,
      fontFamily: ['Almoni', 'Arial', 'sans-serif'].join(','),
      fontWeightMedium: 500,
      fontWeightBold: 700,
      h1: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontWeight: 200,
      },
      h2: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h3: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h4: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h5: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
      },
      h6: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontWeight: 500,
      },
      subtitle1: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontSize: '1.125rem',
        fontWeight: 500,
      },
      subtitle2: {
        fontFamily: ['Almoni', 'sans-serif'].join(','),
        fontSize: '1rem',
        fontWeight: 500,
      },
      body1: {
        fontSize: '1rem',
      },
      body2: {
        fontSize: '0.875rem',
      },
      overline: {
        textTransform: 'uppercase',
      },
      caption: {
        fontSize: '0.75rem',
      },
    },
    palette: {
      mode,
      ...(mode === 'light' ? lightPalette : darkPalette),
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: (theme) => ({
          body: { backgroundColor: theme.palette.background.default },
          '::-webkit-scrollbar-track': {
            boxShadow: 'none',
            borderRadius: 0,
            backgroundColor: greyLight,
          },
          '::-webkit-scrollbar': {
            width: 6,
            marginLeft: 5,
            backgroundColor: greyLight,
          },
          '::-webkit-scrollbar-thumb': {
            borderRadius: 0,
            boxShadow: 'none',
            backgroundColor: greyMain,
          },
        }),
      },
      MuiTextField: {
        defaultProps: {
          variant: 'outlined',
          margin: 'none',
          size: 'small',
        },
      },
      MuiPickersTextField: {
        defaultProps: {
          variant: 'outlined',
          margin: 'none',
          size: 'small',
        },
      },
      MuiInputBase: {
        styleOverrides: {
          root: () => ({
            minHeight: 40,
            fontSize: '0.875rem',
          }),
        },
      },
      MuiPickersInputBase: {
        styleOverrides: {
          root: () => ({
            minHeight: 40,
            fontSize: '0.875rem',
          }),
        },
      },
      MuiFormLabel: {
        styleOverrides: {
          root: () => ({
            fontSize: '0.9rem',
          }),
        },
      },
      MuiButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            paddingTop: 6,
            paddingBottom: 6,
            paddingLeft: 16,
            paddingRight: 16,
            height: 40,
            borderRadius: 20,
            textTransform: 'initial',
            '&.MuiButton-contained.Mui-disabled': {
              backgroundColor: greyMain,
              color: theme.palette.primary.contrastText,
            },
            '&.MuiButton-text.Mui-disabled': {
              color: greyMain,
            },
            '& + .MuiBadge-badge': {
              top: 4,
              left: 4,
            },
            variant: [
              {
                props: { variant: 'text' },
                style: {
                  color: primaryMain,
                  '&:hover': {
                    background: alpha(theme.palette.secondary.main, 0.15),
                  },
                },
              },
              {
                props: { variant: 'outlined' },
                style: {
                  color: theme.palette.text.primary,
                  borderColor: secondaryMain,
                },
              },
            ],
          }),
        },
        defaultProps: {
          disableElevation: true,
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            textTransform: 'initial',
            variants: [
              {
                props: { color: 'secondary' },
                style: {
                  backgroundColor: theme.palette.secondary.main,
                  color: theme.palette.secondary.contrastText,
                  '&:hover': {
                    backgroundColor: theme.palette.secondary.dark,
                  },
                },
              },
            ],
          }),
        },
      },
      MuiMenuItem: {
        styleOverrides: {
          root: ({ theme }) => ({
            color: theme.palette.grey[700],
            padding: theme.spacing(1, 2),
            fontSize: '0.875rem',
            '& .MuiListItemText-root': {
              fontSize: '0.875rem',
            },
            '& .MuiSvgIcon-root': {
              width: 20,
              height: 20,
            },
          }),
        },
      },
      MuiDialogTitle: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: theme.spacing(2, 3),
            fontSize: '1.5rem',
            fontWeight: 'lighter',
            letterSpacing: 1,
            color: theme.palette.grey[700],
          }),
        },
      },
      MuiDialogContent: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: theme.spacing(2, 3),
            borderColor: theme.palette.primary.main,
            minHeight: 150,
            minWidth: 465,
          }),
        },
      },
      MuiDialogContentText: {
        styleOverrides: {
          root: {
            textAlign: 'center',
          },
        },
      },
      MuiDialogActions: {
        styleOverrides: {
          root: ({ theme }) => ({
            padding: theme.spacing(1.5, 3),
          }),
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: ({ theme }) => ({
            borderColor: theme.palette.divider,
          }),
        },
      },
      MuiSnackbar: {
        styleOverrides: {
          root: ({ theme }) => ({
            [theme.breakpoints.up('md')]: {
              right: 304,
              left: 24,
            },
          }),
        },
        defaultProps: {
          autoHideDuration: 20000,
        },
      },
      MuiAlert: {
        styleOverrides: {
          root: ({ theme }) => ({
            width: '100%',
            height: 40,
            paddingTop: 4,
            paddingBottom: 4,
            alignItems: 'center',
            '& .MuiAlert-message': {
              padding: 0,
              lineHeight: 1.5,
            },
            '& .MuiAlert-action': {
              paddingTop: 0,
            },
            variants: [
              {
                props: { severity: 'info' },
                style: {
                  backgroundColor: theme.palette.info.light,
                },
              },
              {
                props: { severity: 'error' },
                style: {
                  backgroundColor: theme.palette.error.light,
                },
              },
              {
                props: { severity: 'success' },
                style: {
                  backgroundColor: theme.palette.success.light,
                },
              },
            ],
          }),
        },
      },
      MuiToggleButton: {
        styleOverrides: {
          root: ({ theme }) => ({
            textTransform: 'none',
            borderColor: alpha(theme.palette.primary.main, 0.65),
            height: 40,
            lineHeight: 1.7,
            borderRadius: 20,
            paddingTop: 6,
            paddingBottom: 6,
            paddingRight: 16,
            paddingLeft: 16,
            color: theme.palette.primary.main,
            '&: hover': {
              background: alpha(theme.palette.primary.main, 0.15),
            },
            '&.Mui-selected': {
              background: theme.palette.primary.main,
              color: theme.palette.primary.contrastText,
              '&: hover': {
                background: theme.palette.primary.dark,
              },
            },
          }),
        },
      },
      MuiDataGrid: {
        defaultProps: {
          density: 'compact',
          checkboxSelection: false,
          disableColumnMenu: true,
          disableRowSelectionOnClick: true,
          disableColumnReorder: true,
          disableColumnResize: true,
          resizeThrottleMs: 300,
        },
        styleOverrides: {
          root: ({ theme }: { theme: Theme }) => ({
            border: 0,
            borderRadius: 0,
            '& .MuiDataGrid-columnHeader': {
              backgroundColor: theme.palette.primary.light,
            },
            '& .MuiDataGrid-columnHeaderTitle': {
              fontWeight: 700,
            },
            '& .MuiDataGrid-cell': {
              textAlign: 'left',
            },
            '& .MuiDataGrid-footerContainer': {
              justifyContent: 'center',
            },
            '& .MuiTablePagination-displayedRows': { margin: 0 },
            '& .MuiTablePagination-spacer': { flex: 0 },
            '& .MuiTablePagination-toolbar': { justifyContent: 'center' },
          }),
        },
      },
    },
  };
}
