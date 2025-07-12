import { createSystem, defaultConfig, defineConfig } from '@chakra-ui/react';

import { fonts, fontSizes } from './tokens/typography';
import { colors } from './tokens/colors';
import { semanticColors } from './sematic-tokens/colors';
import { recipes } from './components/recipes';

const config = defineConfig({
  theme: {
    tokens: {
      colors: colors,
      fontSizes: fontSizes,
      fonts: fonts,
    },
    semanticTokens: {
      colors: semanticColors,
    },
    recipes: recipes,
  },
  globalCss: {
    body: {
      overflowX: 'hidden',
      bg: {
        base: 'secondaryGray.300',
        _dark: 'navy.900',
      },
    },
    input: {
      color: 'gray.700',
    },
  },
});

export const system = createSystem(defaultConfig, config);
