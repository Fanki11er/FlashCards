export const theme: AppTheme = {
  colors: {
    navigationButton: 'rgba(118, 210, 176, 0.5)',
    darkPurple: 'rgba(60, 10, 105, 1)',
    transparentGray: 'rgba(0, 0, 0, 0.25)',
    purple: 'rgba(46,38,142, 1)',
    inputBlue: 'rgba(42, 93, 158, 1)',
    buttonGreen: 'rgba(0, 252, 163, 0.66)',
    greenPlaceholder: 'rgba(0, 252, 163, 0.3)',
    orange: 'rgba(255, 152, 0, 1)',
    errorRed: 'rgba(217,20,36, 0.9)',
  },
  fontSizes: {
    navigationButton: '25px',
    mediumHeader: '4.5rem',
    smallError: '2rem',
  },
};

export type AppTheme = {
  colors: {
    navigationButton: string;
    darkPurple: string;
    transparentGray: string;
    purple: string;
    inputBlue: string;
    buttonGreen: string;
    greenPlaceholder: string;
    orange: string;
    errorRed: string;
  };
  fontSizes: {
    navigationButton: string;
    mediumHeader: string;
    smallError: string;
  };
};

export interface ThemeProps {
  theme: AppTheme;
}
