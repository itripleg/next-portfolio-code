// import Header from "../components/insta/Header";
// import Feed from "../components/insta/Feed";
import Login from "../components/insta/Login";
import { useSession, signOut } from "next-auth/react";
import dynamic from "next/dynamic";
const Header = dynamic(() => import("../components/insta/Header"));
const Feed = dynamic(() => import("../components/insta/Feed"));

function Insta() {
	const { data: session } = useSession();
	// Blocks all access to Insta app unless logged in initially
	if (!session) return <Login />;
	return (
		<div className="bg-gray-50 h-screen overflow-y-scroll z-50 fixed top-0 w-full">
			<Header />
			<Feed />
		</div>
	);
}

export default Insta;
