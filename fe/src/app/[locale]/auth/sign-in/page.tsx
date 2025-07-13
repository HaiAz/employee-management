'use client';

import { Box, Button, Flex, Input, NumberInput, Text, Field, AbsoluteCenter } from '@chakra-ui/react';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import { toFormikValidationSchema } from 'zod-formik-adapter';
import { userCreateAccessCodeFormSchema } from '@/schemas/user';
import { useCreateAccessCodeMutation } from '@/hooks/api/useUserMutation';
import { NumericFormatInput } from '@/components/NumericFormatInput';
import { NumberFormatValues } from 'react-number-format';
import { useUserStore } from '@/stores/user-store';
import CreateCodeByPhoneForm from '@/components/form/CreateCodeByPhoneForm';
import ValidateCodeByPhoneForm from '@/components/form/ValidateCodeByPhoneForm';

export default function SignIn() {
  const mutation = useCreateAccessCodeMutation();

  const { loginStep, setLoginStep, phone } = useUserStore();

  return (
    <AbsoluteCenter gap="5" w={500} borderWidth="1px" borderColor="secondaryGray.500" rounded="md">
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
        {loginStep === 'Login-Screen' && (
          <Flex gap={5} direction="column">
            <Button variant="outline" onClick={() => setLoginStep('Create-New-Access-Code-By-Phone')}>Sign In By Phone</Button>
            <Button variant="outline" onClick={() => setLoginStep('Create-New-Access-Code-By-Email')}>Sign In By Email</Button>
            <Button variant="outline">Sign Up</Button>
          </Flex>
        )}
        {loginStep === 'Create-New-Access-Code-By-Phone' && <CreateCodeByPhoneForm />}
        {loginStep === 'Validate-Code-By-Phone' && <ValidateCodeByPhoneForm phone={phone}/>}
      </Flex>
    </AbsoluteCenter>
  );
}
