'use client';

import { Button, Flex, Field, Input } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userCreateAccessEmailCodeFormSchema } from '@/schemas/user';
import { useCreateAccessCodeMutation } from '@/hooks/api/useUserMutation';
import { useUserStore } from '@/stores/user-store';
import { MdArrowBack } from "react-icons/md";

export default function CreateCodeByEmailForm() {
  const mutation = useCreateAccessCodeMutation();

  const { setLoginStep, setEmail } = useUserStore();

  const formik = useFormik({
    initialValues: {
      email: '',
    },
    validationSchema: toFormikValidationSchema(userCreateAccessEmailCodeFormSchema),
    onSubmit: async (values) => {
      const response = await mutation.mutateAsync(values);

      if (response) {
        setEmail(values.email)
        setLoginStep('Validate-Code-By-Email');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex flexDirection="column" gap={5}>
        <Button variant="outline" onClick={() => setLoginStep('Login-Screen')} w="fit-content"><MdArrowBack /></Button>
        <Field.Root>
          <Field.Label>Email</Field.Label>
          <Input
            value={formik.values.email}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            type='email'
            name="email"
            placeholder="text@gmail.com"
          />
        </Field.Root>

        <Button variant="outline" type="submit" textTransform="uppercase">
          Next
        </Button>
      </Flex>
    </form>
  );
}
