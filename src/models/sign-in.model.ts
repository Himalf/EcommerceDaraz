import { EInputType, TFormField } from "@/types/form-fiels";
import { z } from "zod";
export const signInFormSchema = z.object({
  email: z.string().email({ message: "Invalid email address" }),
  password: z.string().min(1, { message: "Please enter Password" }),
});

export type TSignInFormSchema = z.infer<typeof signInFormSchema>; //form fiels ma generic use vayako
export const signInFormDefaultValues: Partial<TSignInFormSchema> = {
  email: "",
  password: "",
};
export const signInFormField: TFormField<TSignInFormSchema>[] = [
  {
    label: "Email",
    name: "email",
    placeholder: "Eg. johndoe@gmail.com",
    type: EInputType.EMAIL,
    required: true,
  },
  {
    label: "password",
    name: "password",
    placeholder: "********",
    type: EInputType.PASSWORD,
    required: true,
  },
];
