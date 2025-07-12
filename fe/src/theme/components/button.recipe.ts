import { defineRecipe } from '@chakra-ui/react';

export const buttonRecipe = defineRecipe({
  base: {
    display: 'flex',
    cursor: 'pointer',
  },
  variants: {
    visual: {
      primary: { colorPalette: 'primary', color: 'white' },
      secondary: { colorPalette: 'secondary', color: 'white' },
      'secondary-outline': {
        bg: 'white',
        color: 'secondary.500',
        borderColor: 'secondary.500',
        _hover: {
          bg: 'secondary.100',
        },
      },
    },
    size: {
      md: { px: '3', h: '8' },
    },
  },
});
