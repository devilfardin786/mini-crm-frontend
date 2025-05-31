import NextAuth from "next-auth";
import { authOptions } from "@/lib/auth";  // This imports your NextAuth config

const handler = NextAuth(authOptions);

export { handler as GET, handler as POST };