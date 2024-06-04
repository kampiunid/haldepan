/* import NextAuth from "next-auth"
import GoogleProvider from "next-auth/providers/google"

export default NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
}) */

import { authOptions } from "@/utils/auth"
import NextAuth from "next-auth"

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };

