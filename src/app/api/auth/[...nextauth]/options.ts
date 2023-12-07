import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      credentials: {
        username: { label: "username", type: "text", placeholder: "you username" },
        password: { label: "password", type: "password" },
      },
      async authorize(credentials) {
        if (credentials?.username === process.env.AUTH_USERNAME && credentials?.password === process.env.AUTH_PASSWORD) {
          return Promise.resolve({ id: "1", name: process.env.AUTH_USERNAME});
        }
        return Promise.resolve(null);
      },
    }),
  ],
  pages: {
    signIn: '/auth/signin'
  },
};
