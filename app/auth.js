import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcrypt";  // Add bcrypt for password hashing
import db from "./_lib/db";   // Assuming db is an instance of Prisma or any database ORM

export const { signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      // name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        try {
          const user = await db.Users.findFirst({
            where: { email: credentials.email },
          });

          if (!user) {
            console.error("User not found");
            return null;
          }

          // Use bcrypt to compare hashed passwords
          // const isPasswordValid = await bcrypt.compare(credentials.password, user.password);
          const isPasswordValid = credentials.password === user.password;

          if (isPasswordValid) {
            // Return user object with necessary fields
            return {
              id: user.id,
              name: user.name,
              email: user.email,
              role: user.type,  // Assuming you have a 'role' or 'type' field
            };
          } else {
            // console.error("Invalid password");
            return null;
          }
        } catch (error) {
          // console.error("Error during authorization: ", error);
          return null;
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
        token.name = user.name;
        token.email = user.email;
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token }) {
      if (token) {
        session.user.id = token.id;
        session.user.name = token.name;
        session.user.email = token.email;
        session.user.role = token.role;
      }
      return session;
    },
  },
  pages: {
    signIn: '/login', // Redirect to this page on login failure
  },
  secret: process.env.NEXTAUTH_SECRET,  // Ensure your environment variable is set
});
