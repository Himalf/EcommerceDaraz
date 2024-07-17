"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  signUpFormDefaultValues,
  signUpFormField,
  signUpFormSchema,
  TSignUpFormSchema,
} from "@/models/sign-up.model";
type Props = {};

export default function SignIn() {
  const form = useForm<TSignUpFormSchema>({
    resolver: zodResolver(signUpFormSchema),
    defaultValues: signUpFormDefaultValues,
  });
  function onSubmit(values: TSignUpFormSchema) {
    console.log(values);
  }
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Sign up to Your Account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {signUpFormField.map((formField) => (
              <FormField
                key={formField.name}
                control={form.control}
                name={formField.name}
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>{formField.label}</FormLabel>
                    <FormControl>
                      <Input
                        placeholder={formField.placeholder}
                        required={formField.required}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Submit
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
