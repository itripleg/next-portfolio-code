import NextAuth from 'next-auth'
import Providers from 'next-auth/providers'

import React from 'react'

export default NextAuth({
	providers: [
		Providers.Facebook({
			clientId: process.env.FACEBOOK_CLIENT_ID,
			clientSecret: process.env.FACEBOOK_CLIENT_SEC,
		}),
	],
});