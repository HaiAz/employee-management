import z from "zod";

const userLoginFormSchema = z.object({
  phone: z.number(),
})

type UserLoginForm = z.infer<typeof userLoginFormSchema>;

export {
  userLoginFormSchema,
  type UserLoginForm
}
