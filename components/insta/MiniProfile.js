import Image from "next/image";

function MiniProfile() {
	return (
		<div className="flex items-center justify-between mt-14 ml-10">
			<Image
				src={"/me.jpg"}
				width={40}
				height={40}
				className="rounded-full border p-[2px] ml-2"
			/>
			<div className="flex-1 mx-4">
				<h2 className="font-bold">Joshie</h2>
				<h3 className="text-sm">Welcome to Instagram</h3>
			</div>
			<button className="text-blue-400 text-sm font-semibold">Sign Out</button>
		</div>
	);
}

export default MiniProfile;
