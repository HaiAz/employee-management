import { defineRecipe } from '@chakra-ui/react';

export const headingRecipe = defineRecipe({
  base: {
    fontFamily: 'heading',
    fontWeight: 'semibold',
    color: 'primary.500',
  },
  variants: {
    size: {
      xs: { textStyle: 'xs' },
      sm: { textStyle: 'sm' },
      md: { textStyle: 'md' },
      lg: { textStyle: 'lg' },
      xl: { textStyle: 'xl' },
      '2xl': { textStyle: '2xl' },
      '3xl': { textStyle: '3xl' },
      '4xl': { textStyle: '4xl' },
      '5xl': { textStyle: '5xl' },
      '6xl': { textStyle: '6xl' },
      '7xl': { textStyle: '7xl' },
    },
  },
  defaultVariants: {
    size: 'xl',
  },
});
