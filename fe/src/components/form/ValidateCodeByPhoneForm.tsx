'use client';

import { Button, Flex, Field } from '@chakra-ui/react';
import React from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userValidateAccessCodeFormSchema } from '@/schemas/user';
import { useValidateAccessCodeMutation } from '@/hooks/api/useUserMutation';
import { NumericFormatInput } from '@/components/NumericFormatInput';
import { NumberFormatValues } from 'react-number-format';
import { useUserStore } from '@/stores/user-store';
import { MdArrowBack } from 'react-icons/md';
import { useRouter } from 'next/navigation';

export default function ValidateCodeByPhoneForm({ phone }: { phone: number }) {
  const mutation = useValidateAccessCodeMutation();
  const router = useRouter();

  const { setLoginStep } = useUserStore();

  const formik = useFormik({
    initialValues: {
      phone: phone,
      otp: 0,
    },
    validationSchema: toFormikValidationSchema(userValidateAccessCodeFormSchema),
    onSubmit: async (values) => {
      const response = await mutation.mutateAsync(values);

      if (response.success) {
        localStorage.setItem('token', response.token)
        setLoginStep('Login-Screen');
        router.push('/en');
      }
    },
  });

  return (
    <form onSubmit={formik.handleSubmit}>
      <Flex flexDirection="column" gap={5}>
        <Button variant="outline" onClick={() => setLoginStep('Create-New-Access-Code-By-Phone')} w="fit-content">
          <MdArrowBack />
        </Button>
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

        <Field.Root>
          <Field.Label>OTP</Field.Label>
          <NumericFormatInput
            value={formik.values.otp}
            onValueChange={(data: NumberFormatValues) => formik.setFieldValue('otp', data.floatValue)}
            onBlur={formik.handleBlur}
            name="otp"
            placeholder="0123456789"
          />
        </Field.Root>

        <Button variant="outline" type="submit" textTransform="uppercase">
          Sign In
        </Button>
      </Flex>
    </form>
  );
}
