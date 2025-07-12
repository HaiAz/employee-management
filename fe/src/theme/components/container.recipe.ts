import { defineRecipe } from '@chakra-ui/react';

export const containerRecipe = defineRecipe({
  // Base styles applied to all variants
  base: {
    width: '100%',
    marginX: 'auto',
    paddingX: '4',
  },

  // Different size variants
  variants: {
    size: {
      sm: {
        maxWidth: '640px',
      },
      md: {
        maxWidth: '768px',
      },
      lg: {
        maxWidth: '1024px',
      },
      xl: {
        maxWidth: '1312px',
      },
      full: {
        maxWidth: '100%',
      },
    },
  },

  // Default values
  defaultVariants: {
    size: 'xl',
  },
});
