import Image from "next/image";
import { useSession } from "next-auth/react";

function MiniProfile() {
	const { data: session } = useSession();
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<Image
				src={session.user.image}
				width={40}
				height={40}
				className="rounded-full border p-[2px] ml-2"
			/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">{session.user.name}</h2>
				<h3 className="text-sm">Welcome to Instagram</h3>
			</div>
			<button className="text-blue-400 text-sm font-semibold">Sign Out</button>
		</div>
	);
}

export default MiniProfile;
