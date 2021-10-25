import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";

export default function Login({ providers }) {
	return (
		<div className="grid place-items-center mt-6">
			<p className="flex text-wrap text-center md:mx-60 lg:p-16 sm:text-xl font-bold text-blue-500">
				This is a demo version of a Instagram-like social media app. By signing
				in below, you will be providing the public information you have already
				chosen to share with your choosen login provider (display name, email,
				profile pic.) This info is only used for display purposes on the demo
				app. Posts made will be visible to other users of the demo. Use my
				contact form if you need any public information removed from the app.
			</p>
			<Image
				src={"https://links.papareact.com/ocw"}
				layout="fill"
				objectFit="contain"
				alt="Instagram"
			/>
			<h1
				onClick={signIn}
				className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
			>
				Login with Next.js
			</h1>
		</div>
	);
}

export async function getServerSideProps(context) {
	return {
		props: {
			providers: await providers(context),
		},
	};
}
