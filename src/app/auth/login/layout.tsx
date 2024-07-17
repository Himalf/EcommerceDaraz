import { Metadata } from "next";
import React from "react";

type Props = {
  children: React.ReactNode;
};
export const metadata: Metadata = {
  title: "Sign In | Ecommerce",
  description: "Here you can sign in here",
};

export default function SignInLayout({ children }: Props) {
  return <main>{children}</main>;
}
