import { defineTokens } from '@chakra-ui/react';

export const colors = defineTokens.colors({
  borderLine: { value: '#E5E9F0' },
  primary: {
    50: { value: '#e6eaf4' }, // Lightest - subtle background
    100: { value: '#b3bde6' }, // Very light - hover states
    200: { value: '#8090d9' }, // Light - secondary buttons
    300: { value: '#4d63cc' }, // Medium light - active states
    400: { value: '#1a3599' }, // Medium - primary interactive
    500: { value: '#00266b' }, // Your base color
    600: { value: '#001e56' }, // Medium dark - hover states
    700: { value: '#001642' }, // Dark - active states
    800: { value: '#000f2d' }, // Very dark - text on light
    900: { value: '#000819' }, // Darkest - emphasis
  },
  secondary: {
    50: { value: '#E8F1FA' },
    100: { value: '#C7DEF5' },
    200: { value: '#93BEE9' },
    300: { value: '#609EDE' },
    400: { value: '#3C87D6' },
    500: { value: '#2275D3' }, // Your base color
    600: { value: '#1E66BA' },
    700: { value: '#1A5296' },
    800: { value: '#153E72' },
    900: { value: '#0F2A4E' },
  },
});
