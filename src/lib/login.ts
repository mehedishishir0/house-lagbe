import { NextAuthOptions } from "next-auth";
import { JWT } from "next-auth/jwt";
import CredentialsProvider from "next-auth/providers/credentials";

export const authOptions: NextAuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
    maxAge: 7 * 24 * 60 * 60, // 7 day
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "email" },
        password: {
          label: "Password",
          type: "password",
          placeholder: "password",
        },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) {
          throw new Error("Please enter your email and password");
        }

        try {
          const res = await fetch(
            `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({
                email: credentials.email,
                password: credentials.password,
              }),
            }
          );

          const response = await res.json();
   
          if (!res.ok || !response?.success) {
            throw new Error(response?.message || "Login failed");
          }
          //   if (response.data.user.role === "USER") {
          //     throw new Error("Only admin can access this page");
          //   }
          
          const { user, token } = response.data;

          return {
            id: user._id,
            name: user.fullName,
            email: user.email,
            role: user.role,
            phone: user.phoneNmber,
            profileImage: user.profileImage,
            token,
          };
        } catch (error) {
          console.error("Authentication error:", error);
          const errorMessage =
            error instanceof Error
              ? error.message
              : "Authentication failed. Please try again.";
          throw new Error(errorMessage);
        }
      },
    }),
  ],

  callbacks: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async jwt({ token, user }: { token: JWT; user?: any }) {
      if (user) {
        token.id = user.id;
        token.name = user.fullName;
        token.email = user.email;
        token.role = user.role;
        token.phone = user.phoneNmber;
        token.accessToken = user.token;
      }
      return token;
    },

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async session({ session, token }: { session: any; token: JWT }) {
      session.user = {
        id: token.id,
        name: token.fullName,
        email: token.email,
        role: token.role,
        phone: token.phoneNmber,
        accessToken: token.accessToken,
      };
      return session;
    },
  },
};
