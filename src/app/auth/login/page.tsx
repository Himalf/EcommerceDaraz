"use client";
import React, { useCallback } from "react";
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
import { ToastContainer, toast } from "react-toastify";
import { signIn } from "next-auth/react";
import {
  signInFormDefaultValues,
  signInFormField,
  signInFormSchema,
  TSignInFormSchema,
} from "@/models/sign-in.model";
import "react-toastify/dist/ReactToastify.css";
import { redirect, usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { url } from "inspector";
import { string } from "zod";

type Props = {
  callbackUrl: string;
};

export default function SignIn(props: Props) {
  const form = useForm<TSignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
    defaultValues: signInFormDefaultValues,
  });
  async function onSubmit(values: TSignInFormSchema) {
    try {
      await signIn("credentials", {
        ...values,
        redirect: true,
        callbackUrl: `${window.location.origin}`,
      }).then((res) => {
        if (res?.status === 200) {
          toast.success("Login Successfull");
        } else {
          toast.error("Email or Password does not match!");
        }
      });
      // toast.success("login Successfull");
    } catch (error) {
      toast.error("Cannot login");
    }
  }
  return (
    <main className="flex justify-center items-center min-h-screen bg-gray-100">
      <section className="w-full max-w-md p-8 space-y-6 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold text-center">
          Login to Your Account
        </h2>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
            {signInFormField.map((formField) => (
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
                        type={formField.type}
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            ))}

            <ToastContainer />
            <Button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Login
            </Button>
          </form>
        </Form>
      </section>
    </main>
  );
}
