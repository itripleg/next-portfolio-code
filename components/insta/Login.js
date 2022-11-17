import React from "react";
import Image from "next/image";
import { signIn } from "next-auth/react";
import InstaLogo from "../../public/Instagram-logo.png";

export default function Login({ providers }) {
	return (
		<div className="grid place-items-center ">
			<div className="relative">
				<Image
					src={InstaLogo}
					objectFit="contain"
					width={200}
					height={200}
					alt="logo"
				/>
			</div>
			<p className="flex pb-6 text-center mx-4 md:mx-60 lg:p-16 sm:text-xl font-bold text-gray-500">
				{`This is a demo version of a Instagram-like social media app I'm making
								for R&D purposes. By "signing in" to this demo, you will (only) be sharing public
								profile information you have already aggreed to make public; (Like your display
								name, email, and profile pic.) This info is currently used for
								cosmetic display purposes only.`}
			</p>
			<p className="flex pb-12 text-center mx-4 md:mx-60 lg:p-16 sm:text-xl font-bold text-gray-700 animate-pulse">
				{`Don't post sensitive information you wouldn't want
				others to see here. Use my contact form if you need me to delete
				something.`}
			</p>
			<p className="px-5 italic">
				*Note* a Gmail account is needed to login.
			</p>
			<h1
				onClick={signIn}
				className="p-5 mb-6 bg-gray-500 rounded-full text-white text-center cursor-pointer"
			>
				{`Let me in!`}
			</h1>
			<div className=" text-center whitespace-pre">
				<h1 className="font-bold pt-4">To Do List</h1>
				<li>
					<strike>Implement post functionality</strike>
				</li>
				<strike>
					<li>Display sorted posts</li>
				</strike>
				<li>Enable comments</li>
				<li>Enable likes</li>
			</div>
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
