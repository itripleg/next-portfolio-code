import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

export default NextAuth({
  providers: [
    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SEC,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SEC,
    }),
  ],
  pages: {
    // signIn: "/auth/signin",
  },
  theme: {
    logo: "/next-auth.png",
    colorScheme: "dark",
  },
  callbacks: {
    // redirect: async (url, baseUrl) => {
    //   console.log(url);
    //   return Promise.resolve(url);
    // },
    async jwt({ token, account }) {
      // Persist the OAuth access_token to the token right after signin
      if (account) {
        token.accessToken = account.access_token;
        console.log(token);
      }
      return token;
    },

    async session({ session, user, token }) {
      if (token) {
        session.accessToken = token.accessToken;
      }
      return session;
    },
  },
  secret: "test",
  jwt: {
    secret: "test",
    encryption: "true",
  },
});
