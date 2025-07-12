import { UserLoginForm } from "@/schemas/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";

function useUserMutation() {
  const queryClient = useQueryClient();
  
  const mutation = useMutation({
    mutationFn: async (userLoginForm: UserLoginForm) => {
      return await fetch('http://localhost:3001/api/v1/auth/login/phone')
    }
  })
}
