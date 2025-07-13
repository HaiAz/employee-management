import z from "zod";

const userSchema = z.object({
  
})

const userCreateAccessCodeFormSchema = z.object({
  phone: z.number(),
})

const userValidateAccessCodeFormSchema = userCreateAccessCodeFormSchema.extend({
  otp: z.number(),
})

type UserCreateAccessCodeForm = z.infer<typeof userCreateAccessCodeFormSchema>;
type UserValidateAccessCodeForm = z.infer<typeof userValidateAccessCodeFormSchema>;

export {
  userCreateAccessCodeFormSchema,
  userValidateAccessCodeFormSchema,
  type UserCreateAccessCodeForm,
  type UserValidateAccessCodeForm,
}
