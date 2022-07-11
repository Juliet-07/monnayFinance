import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";

const options = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        username: {
          label: "Username",
          type: "text",
          placeholder: "enter your username",
        },
        password: {
          label: "Password",
          type: "password",
          placeholder: "enter your password",
        },
      },
      async authorize(credentials) {
        const payload = {
          username: credentials.username,
          password: credentials.password,
        };
        const res = await fetch("https://monnayfinance.com/api/auth/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: { "Content-type": "application/json; charset=UTF-8" },
        });
        const user = await res.json();
        if (!res.ok) {
          throw new Error("Wrong username or password");
        }
        if (res.ok && user) {
          return user;
        }
        return null;
      },
    }),
  ],
  session: {
    jwt: true,
  },
  jwt: {
    secret: "SUPER_SECRET_JWT_SECRET",
  },
  callbacks: {
    async jwt({ token, user, account }) {
      if (account && user) {
        return {
          ...token,
          accessToken: user.data.access_token,
          refreshToken: user.data.refresh_token,
        };
      }
      return token;
    },
    async session({ session, token }) {
      session.user.accessToken = token.accessToken;
      session.user.refreshToken = token.refreshToken;

      return session;
    },
    pages: {
      signIn: "/signin",
    },
  },
};

export default (req, res) => NextAuth(req, res, options);
