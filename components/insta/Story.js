import Image from "next/image";

function Story({ img, username }) {
	return (
		<div className="">
			<img
				src={img}
				className="rounded-full h-14 w-14 p-[1.5px] border-red-500 
					border-2 object-contain cursor-pointer hover:scale-110 
					transistion transform duration-200 ease-out"
			/>
			<p className="text-xs w-14 truncate text-center">{username}</p>
		</div>
	);
}

export default Story;
