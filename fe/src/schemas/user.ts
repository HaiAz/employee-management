import z from "zod";

const tokenSchema = z.object({
  success: z.boolean(),
  token: z.string(),
})

const userCreateAccessPhoneCodeFormSchema = z.object({
  phone: z.number(),
})

const userValidateAccessPhoneCodeFormSchema = userCreateAccessPhoneCodeFormSchema.extend({
  otp: z.number(),
})

const userCreateAccessEmailCodeFormSchema = z.object({
  email: z.string(),
})

const userValidateAccessEmailCodeFormSchema = userCreateAccessEmailCodeFormSchema.extend({
  otp: z.number(),
})

type UserCreateAccessPhoneCodeForm = z.infer<typeof userCreateAccessPhoneCodeFormSchema>;
type UserValidateAccessPhoneCodeForm = z.infer<typeof userValidateAccessPhoneCodeFormSchema>;
type UserCreateAccessEmailCodeForm = z.infer<typeof userCreateAccessEmailCodeFormSchema>;
type UserValidateAccessEmailCodeForm = z.infer<typeof userValidateAccessEmailCodeFormSchema>
type Token = z.infer<typeof tokenSchema>;

export {
  userCreateAccessPhoneCodeFormSchema,
  userValidateAccessPhoneCodeFormSchema,
  userCreateAccessEmailCodeFormSchema,
  userValidateAccessEmailCodeFormSchema,
  tokenSchema,
  type UserCreateAccessPhoneCodeForm,
  type UserValidateAccessPhoneCodeForm,
  type UserCreateAccessEmailCodeForm,
  type UserValidateAccessEmailCodeForm,
  type Token,
}
