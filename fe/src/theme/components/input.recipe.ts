import { defineRecipe } from '@chakra-ui/react';

export const inputRecipe = defineRecipe({
  base: {
    colorPalette: 'secondary',
  },
  variants: {
    size: {
      xs: {
        textStyle: 'sm',
        py: '1.5',
        '--input-height': 'sizes.8',
      },
    },
  },
  defaultVariants: {
    size: 'xs',
  },
});
