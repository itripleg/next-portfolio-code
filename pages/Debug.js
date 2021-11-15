import UserImage from "../components/UserImage";
import { useSession } from "next-auth/react";
import { useState } from "react";
function Debug() {
	const { data: session } = useSession();
	const [visible, setVisible] = useState("false");
	return (
		<div className=" w-full bg-gradient-to-tl from-blue-500">
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
				<div className="grid grid-cols-2 mx-auto gap-x-8 gap-y-8 max-w-7xl pt-8">
					<button className="h-20 bg-[#afaaaf] animate hover:scale-110">
						#afaaaf
					</button>
					<button className="h-20 bg-[#40a0ff] animate hover:scale-110">
						#40a0ff
					</button>
					<button className="h-20 bg-[#ffffff] animate hover:scale-110">
						#ffffff
					</button>
					<button className="h-20 bg-[#aaaaaa] animate hover:scale-110">
						#aaaaaa
					</button>
					<button className="h-20 bg-[#ffaaff] text-white animate hover:scale-110">
						#ffaaff
					</button>
					<button className="h-20 bg-[#fabfab] text-white animate hover:scale-110">
						#fabfab
					</button>
					<button className="h-20 bg-[#deadaf] text-white animate hover:scale-110">
						#deadaf
					</button>
					<button className="h-20 bg-[#badbad] text-white animate hover:scale-110">
						#badbad
					</button>
					<button className="h-20 bg-[#cabbad] text-white animate hover:scale-110">
						#cabbad
					</button>
					<button className="h-20 bg-[#deadaf] text-white animate hover:scale-110">
						#deadaf
					</button>
					<button className="h-20 bg-[#beeeef] text-white animate hover:scale-110">
						#beeeef
					</button>
					<button className="h-20 bg-[#bedaff] text-white animate hover:scale-110">
						#bedaff
					</button>
					<button className="h-20 bg-[#444444] text-white animate hover:scale-110">
						#444444
					</button>
					<button className="h-20 bg-[#666666] text-white animate hover:scale-110">
						#666666
					</button>
					<button className="h-20 bg-[#777777] text-white animate hover:scale-110">
						#777777
					</button>
					<button className="h-20 bg-[#123456] text-white animate hover:scale-110">
						#123456
					</button>
					<button className="h-20 bg-[#321654] text-white animate hover:scale-110">
						#321654
					</button>
					<button className="h-20 bg-[#987654] text-white animate hover:scale-110">
						#987654
					</button>
				</div>
				<br />
				<div
					onClick={() => setVisible(!visible)}
					className={`flex transition-all ease-in-out duration-300 bg-gray-200 w-44 items-center justify-between px-2 rounded ${
						visible ? "opacity-100" : "opacity-100"
					}`}
				>
					<p>Optional rendering practice button</p>
					{visible ? <p>😁</p> : <p>😥</p>}
				</div>
				<div className="">
					<h1>grid practice</h1>
					<div className="myGrid grid grid-cols-3 grid-rows-2 gap-4">
						<div className="bg-red-500 col-span-3">Header</div>
						<div className="bg-blue-500 ">Side Bar</div>
						<div className="bg-green-500 ">Content</div>
						<div className="bg-yellow-500">Right Side</div>
						<div className="bg-purple-500 col-span-3">Footer</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Debug;
