import { Token, UserCreateAccessEmailCodeForm, UserCreateAccessPhoneCodeForm, UserValidateAccessEmailCodeForm, UserValidateAccessPhoneCodeForm } from "@/schemas/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useApiAuthClient } from "../useApiAuthClient";

const userQueryAccessCode = 'accessCode';

function useCreateAccessCodeMutation() {
  const queryClient = useQueryClient();
  const apiClient = useApiAuthClient();
  
  const mutation = useMutation({
    mutationFn: async (data: UserCreateAccessPhoneCodeForm | UserCreateAccessEmailCodeForm) => {
      return apiClient.post('http://localhost:3001/api/v1/auth/create-new-access-code', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ userQueryAccessCode ]})
    }
  })

  return mutation;
}

function useValidateAccessCodeMutation() {
  const queryClient = useQueryClient();
  const apiClient = useApiAuthClient();
  
  const mutation = useMutation({
    mutationFn: async (data: UserValidateAccessPhoneCodeForm | UserValidateAccessEmailCodeForm): Promise<Token> => {
      return apiClient.post('http://localhost:3001/api/v1/auth/validate-access-code', data)
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [ userQueryAccessCode ]})
    }
  })

  return mutation;
}

export {
  userQueryAccessCode,
  useCreateAccessCodeMutation,
  useValidateAccessCodeMutation
}
