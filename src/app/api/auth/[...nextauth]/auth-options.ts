import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          placeholder: "Enter your email",
          type: "email",
        },
        password: {
          label: "Password",
          placeholder: "Enter your password",
          type: "password",
        },
      },
      async authorize(credentials) {
        const users = [
          {
            id: "1",
            email: "himal@gmail.com",
            password: "12345678",
          },
        ];

        const foundUser = users.find(
          (user) => user.email === credentials?.email
        );

        if (!foundUser) {
          console.log("No user found with email:", credentials?.email);
          return null;
        }

        const isPwdMatch = foundUser.password === credentials?.password;

        if (!isPwdMatch) {
          console.log("Password does not match for user:", foundUser.email);
          return null;
        }

        console.log("User authenticated successfully:", foundUser);
        return foundUser;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
};
