import { defineSemanticTokens } from '@chakra-ui/react';

export const semanticColors = defineSemanticTokens.colors({
  primary: {
    solid: { value: '{colors.primary.500}' },
    contrast: { value: '{colors.primary.100}' },
    fg: { value: '{colors.primary.700}' },
    muted: { value: '{colors.primary.100}' },
    subtle: { value: '{colors.primary.200}' },
    emphasized: { value: '{colors.primary.300}' },
    focusRing: { value: '{colors.primary.500}' },
  },
  secondary: {
    solid: { value: '{colors.secondary.500}' },
    contrast: { value: '{colors.secondary.100}' },
    fg: { value: '{colors.secondary.700}' },
    muted: { value: '{colors.secondary.100}' },
    subtle: { value: '{colors.secondary.200}' },
    emphasized: { value: '{colors.secondary.300}' },
    focusRing: { value: '{colors.secondary.500}' },
  },
});
