import UserImage from "../components/UserImage";
import { useSession } from "next-auth/react";
function Debug() {
	const { data: session } = useSession();
	return (
		<div className="h-screen w-full bg-gradient-to-tl from-blue-500">
			{session && (
				<div>
					<p>
						Logged in as {session.user.name} via {session.provider}
					</p>
					<p>Email: {session.user.email}</p>
					<p>Expires: {session.expires}</p>
				</div>
			)}
			<div className="text-center">
				<p>Pretty Hex Buttons!</p>
				<div className="grid grid-cols-2 mx-auto gap-2 max-w-7xl pt-8">
					<button className="h-20 bg-[#afaaaf] ">#afaaaf</button>
					<button className="h-20 bg-[#40a0ff]">#40a0ff</button>
					<button className="h-20 bg-[#ffffff]">#ffffff</button>
					<button className="h-20 bg-[#aaaaaa]">#aaaaaa</button>
					<button className="h-20 bg-[#ffaaff] text-white">#ffaaff</button>
					<button className="h-20 bg-[#fabfab] text-white">#fabfab</button>
					<button className="h-20 bg-[#deadaf] text-white">#deadaf</button>
					<button className="h-20 bg-[#badbad] text-white">#badbad</button>
					<button className="h-20 bg-[#cabbad] text-white">#cabbad</button>
					<button className="h-20 bg-[#deadaf] text-white">#deadaf</button>
					<button className="h-20 bg-[#beeeef] text-white">#beeeef</button>
					<button className="h-20 bg-[#bedaff] text-white">#bedaff</button>
					<button className="h-20 bg-[#444444] text-white">#444444</button>
					<button className="h-20 bg-[#666666] text-white">#666666</button>
					<button className="h-20 bg-[#777777] text-white">#777777</button>
					<button className="h-20 bg-[#123456] text-white">#123456</button>
					<button className="h-20 bg-[#321654] text-white">#321654</button>
					<button className="h-20 bg-[#987654] text-white">#987654</button>
				</div>
			</div>
		</div>
	);
}

export default Debug;
