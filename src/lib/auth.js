import { MongoDBAdapter } from "@auth/mongodb-adapter";
import NextAuth from "next-auth";
import client from "./mongodb-client";
import Resend from "next-auth/providers/resend";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: MongoDBAdapter(client),
  providers: [
    Resend({
      from: "book-college <onboarding@resend.dev>",
    }),
  ],
  pages: {
    error: "/login",
    verifyRequest: "/verify-email",
    signIn: "/login",
  },
});
