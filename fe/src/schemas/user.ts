import z from "zod";

const tokenSchema = z.object({
  success: z.boolean(),
  token: z.string(),
})

const userCreateAccessCodeFormSchema = z.object({
  phone: z.number(),
})

const userValidateAccessCodeFormSchema = userCreateAccessCodeFormSchema.extend({
  otp: z.number(),
})

type UserCreateAccessCodeForm = z.infer<typeof userCreateAccessCodeFormSchema>;
type UserValidateAccessCodeForm = z.infer<typeof userValidateAccessCodeFormSchema>;
type Token = z.infer<typeof tokenSchema>;

export {
  userCreateAccessCodeFormSchema,
  userValidateAccessCodeFormSchema,
  tokenSchema,
  type UserCreateAccessCodeForm,
  type UserValidateAccessCodeForm,
  type Token,
}
