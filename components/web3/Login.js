import { useMoralis } from "react-moralis";
import { useState } from "react";

const Login = () => {
	const { authenticate } = useMoralis();
	const [image, setImage] = useState("/metamask.png");
	return (
		<div
			className="bg-gradient-to-b from-gray-900 to-black mx-auto 
			justify-center items-center h-screen bg-gray-900 p-2 md:p-20 "
		>
			<img
				src={image}
				alt=""
				className="mx-auto max-h-60 md:max-h-[250px] py-6"
			/>
			<div className="grid md:grid-cols-3 gap-6 pt-20 text-gray-300">
				<button
					className="h-20 bg-gradient-to-b from-green-500 rounded-md
					animate hover:scale-110 transition ease"
					onClick={authenticate}
					onMouseEnter={() => setImage("/metamask.png")}
					onMouseLeave={() => setImage("/metamask.png")}
				>
					Log in with Metamask
				</button>
				<button
					className="h-20 bg-gradient-to-b from-green-500 rounded-md animate hover:scale-110 transition ease"
					onClick={() => alert("coming soon!")}
					onMouseEnter={() => setImage("/moralis.png")}
					onMouseLeave={() => setImage("/metamask.png")}
				>
					Log in with Email
				</button>
				<button
					className="h-20 bg-gradient-to-b from-green-500 rounded-md animate hover:scale-110 transition ease"
					onClick={() => alert("coming soon!")}
					onMouseEnter={() => setImage("/email.png")}
					onMouseLeave={() => setImage("/metamask.png")}
				>
					Sign up
				</button>
			</div>
		</div>
	);
};

export default Login;
