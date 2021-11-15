import { useMoralis } from "react-moralis";

const Login = () => {
	const { authenticate } = useMoralis();
	return (
		<div className="container mx-auto justify-center items-center">
			<div className="grid grid-cols-3 gap-y-4">
				<button onClick={authenticate}>Log in with Metamask</button>
				<button onClick={authenticate}>Log in with Email</button>
				<button onClick={authenticate}>Sign up</button>
			</div>
		</div>
	);
};

export default Login;
