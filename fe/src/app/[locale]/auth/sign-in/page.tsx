'use client';

import { Button, Flex, AbsoluteCenter } from '@chakra-ui/react';
import React from 'react';
import { useUserStore } from '@/stores/user-store';
import CreateCodeByPhoneForm from '@/components/form/CreateCodeByPhoneForm';
import ValidateCodeByPhoneForm from '@/components/form/ValidateCodeByPhoneForm';
import CreateCodeByEmailForm from '@/components/form/CreateCodeByEmailForm';
import ValidateCodeByEmailForm from '@/components/form/ValidateCodeByEmailForm';

export default function SignIn() {

  const { loginStep, setLoginStep, phone, email } = useUserStore();

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
            <Button variant="outline" onClick={() => setLoginStep('Create-New-Access-Code-By-Phone')}>
              Sign In By Phone
            </Button>
            <Button variant="outline" onClick={() => setLoginStep('Create-New-Access-Code-By-Email')}>
              Sign In By Email
            </Button>
            <Button variant="outline">Sign Up</Button>
          </Flex>
        )}
        {loginStep === 'Create-New-Access-Code-By-Phone' && <CreateCodeByPhoneForm />}
        {loginStep === 'Validate-Code-By-Phone' && <ValidateCodeByPhoneForm phone={phone} />}
        {loginStep === 'Create-New-Access-Code-By-Email' && <CreateCodeByEmailForm />}
        {loginStep === 'Validate-Code-By-Email' && <ValidateCodeByEmailForm email={email} />}
      </Flex>
    </AbsoluteCenter>
  );
}
