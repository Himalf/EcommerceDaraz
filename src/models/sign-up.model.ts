import { EInputType, TFormField } from "@/types/form-field";
import { z } from "zod";
export const signUpFormSchema = z
  .object({
    fullname: z.string().min(1, { message: "Please Enter full Name" }),
    email: z.string().email({ message: "Invalid email address" }),
    password: z
      .string()
      .min(1, { message: "Please enter Password" })
      .min(8, { message: "Password should be of 8 charcters long" }),
    confirmPassword: z.string(),
  })
  .superRefine(({ confirmPassword, password }, ctx) => {
    if (confirmPassword !== password) {
      ctx.addIssue({
        code: "custom",
        message: "The password does not match",
        path: ["confirmPassword"],
      });
    }
  });

export type TSignUpFormSchema = z.infer<typeof signUpFormSchema>; //form fiels ma generic use vayako
export const signUpFormDefaultValues: Partial<TSignUpFormSchema> = {
  fullname: "",
  email: "",
  password: "",
  confirmPassword: "",
};
export const signUpFormField: TFormField<TSignUpFormSchema>[] = [
  {
    label: "Full Name",
    name: "fullname",
    placeholder: "eg: John Doe",
    type: EInputType.TEXT,
    required: true,
  },
  {
    label: "Email",
    name: "email",
    placeholder: "Eg. johndoe@gmail.com",
    type: EInputType.EMAIL,
    required: true,
  },
  {
    label: "Password",
    name: "password",
    placeholder: "********",
    type: EInputType.PASSWORD,
    required: true,
  },
  {
    label: "Confirm Password",
    name: "confirmPassword",
    placeholder: "********",
    type: EInputType.PASSWORD,
    required: true,
  },
];
