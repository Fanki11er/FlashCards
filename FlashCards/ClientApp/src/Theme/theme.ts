export const theme: AppTheme = {
  colors: {
    navigationButton: 'rgba(118, 210, 176, 0.5)',
    darkPurple: 'rgba(60, 10, 105, 1)',
    transparentGray: 'rgba(0, 0, 0, 0.25)',
  },
  fontSizes: {
    navigationButton: '30px',
  },
};

export type AppTheme = {
  colors: {
    navigationButton: string;
    darkPurple: string;
    transparentGray: string;
  };
  fontSizes: {
    navigationButton: string;
  };
};
