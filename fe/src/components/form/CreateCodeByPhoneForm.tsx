'use client';

import { Box, Button, Flex, Input, NumberInput, Text, Field } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userCreateAccessCodeFormSchema } from '@/schemas/user';
import { useCreateAccessCodeMutation } from '@/hooks/api/useUserMutation';
import { NumericFormatInput } from '@/components/NumericFormatInput';
import { NumberFormatValues } from 'react-number-format';
import { useUserStore } from '@/stores/user-store';

export default function CreateCodeByPhoneForm() {
  const mutation = useCreateAccessCodeMutation();

  const { setLoginStep } = useUserStore();

  const formik = useFormik({
    initialValues: {
      phone: 0,
    },
    validationSchema: toFormikValidationSchema(userCreateAccessCodeFormSchema),
    onSubmit: async (values) => {
      const response = await mutation.mutateAsync(values);

      if (response) {
        setLoginStep('Validate-Code-By-Phone');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex
        mx="auto"
        bg="white"
        direction="column"
        gap="5"
        w={500}
        p={50}
        borderWidth="1px"
        borderColor="secondaryGray.500"
        rounded="md"
      >
        <NumericFormatInput
          value={formik.values.phone}
          onValueChange={(data: NumberFormatValues) => formik.setFieldValue('phone', data.floatValue)}
          onBlur={formik.handleBlur}
          name="phone"
          placeholder="0123456789"
        />

        <Button type="submit" textTransform="uppercase">
          {/* {t('nav.sign-in')} */}
          Sign In
        </Button>
      </Flex>
    </form>
  );
}
