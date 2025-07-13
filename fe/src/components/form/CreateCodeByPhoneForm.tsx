'use client';

import { Button, Flex, Field } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userCreateAccessCodeFormSchema } from '@/schemas/user';
import { useCreateAccessCodeMutation } from '@/hooks/api/useUserMutation';
import { NumericFormatInput } from '@/components/NumericFormatInput';
import { NumberFormatValues } from 'react-number-format';
import { useUserStore } from '@/stores/user-store';
import { MdArrowBack } from "react-icons/md";

export default function CreateCodeByPhoneForm() {
  const mutation = useCreateAccessCodeMutation();

  const { setLoginStep, setPhoneNumber } = useUserStore();

  const formik = useFormik({
    initialValues: {
      phone: 0,
    },
    validationSchema: toFormikValidationSchema(userCreateAccessCodeFormSchema),
    onSubmit: async (values) => {
      const response = await mutation.mutateAsync(values);

      if (response) {
        setPhoneNumber(values.phone)
        setLoginStep('Validate-Code-By-Phone');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex flexDirection="column" gap={5}>
        <Button variant="outline" onClick={() => setLoginStep('Login-Screen')} w="fit-content"><MdArrowBack /></Button>
        <Field.Root>
          <Field.Label>Phone Number</Field.Label>
          <NumericFormatInput
            value={formik.values.phone}
            onValueChange={(data: NumberFormatValues) => formik.setFieldValue('phone', data.floatValue)}
            onBlur={formik.handleBlur}
            name="phone"
            placeholder="0123456789"
          />
        </Field.Root>

        <Button variant="outline" type="submit" textTransform="uppercase">
          Next
        </Button>
      </Flex>
    </form>
  );
}
