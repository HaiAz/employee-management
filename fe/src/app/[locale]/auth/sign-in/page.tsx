'use client';

import { Box, Button, Flex, Input, Text } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userLoginFormSchema } from '@/schemas/user';

export default function SignIn() {
  const formik = useFormik({
    initialValues: {
      phone: '',
    },
    validationSchema: toFormikValidationSchema(userLoginFormSchema),
    onSubmit: async (values) => {
      const response = await fetch('http://localhost:3001/api/v1/auth/login/phone', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(values),
      });

      const data = await response.json();
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
        <Flex>
          <Input
            value={formik.values.phone}
            onChange={(e) => formik.setFieldValue('phone', Number(e.target.value))}
            onBlur={formik.handleBlur}
            name="phone"
            type="number"
            placeholder="123456789"
          />
          <Text>{formik.errors.phone}</Text>
        </Flex>

        <Button type="submit" textTransform="uppercase">
          {/* {t('nav.sign-in')} */}
          Sign In
        </Button>
      </Flex>
    </form>
  );
}

// export default SignIn
