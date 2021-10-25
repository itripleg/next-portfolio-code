import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";

import React from "react";

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
  },
  // callbacks: {
  //   redirect: async (url, baseUrl) => {
  //     return Promise.resolve(url);
  //   },
  // },
});
