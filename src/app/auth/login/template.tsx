import React from "react";
type Props = {
  children: React.ReactNode;
};
export default function SignInTemplate({ children }: Props) {
  return <main>{children}</main>;
}
