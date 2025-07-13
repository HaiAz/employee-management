'use client';

import { Input, InputProps } from '@chakra-ui/react';
import { NumericFormat, NumericFormatProps } from 'react-number-format';

export const NumericFormatInput = (props: NumericFormatProps<InputProps>) => {
  return (
    <NumericFormat
      {...props}
      customInput={Input}
    />
  );
};
