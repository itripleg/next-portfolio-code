import Image from "next/image";
import { useSession, signOut } from "next-auth/react";

function MiniProfile() {
	const { data: session } = useSession();
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<Image
				src={session.user.image}
				width={40}
				height={40}
				className="rounded-full border p-[2px] ml-2"
				alt="pic"
			/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">{session.user.name}</h2>
				<h3 className="text-sm">Welcome Back!</h3>
			</div>
		</div>
	);
}

export default MiniProfile;
